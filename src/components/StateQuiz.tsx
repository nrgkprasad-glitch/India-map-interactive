import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { StateData } from "../data/statesData";
import { Button } from "./ui/Button";
import { Award, CheckCircle, AlertTriangle, RefreshCw } from "lucide-react";

interface StateQuizProps {
  state: StateData;
  onUnlockBadge: (badgeName: string) => void;
  unlockedBadges: string[];
}

export function StateQuiz({ state, onUnlockBadge, unlockedBadges }: StateQuizProps) {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [selectedOpt, setSelectedOpt] = React.useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [quizFinished, setQuizFinished] = React.useState(false);

  const badgeName = `${state.name} Explorer`;
  const hasBadgeAlready = unlockedBadges.includes(badgeName);

  // Reset quiz when state changes
  React.useEffect(() => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  }, [state]);

  const questions = state.quiz;
  if (!questions || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center space-y-2">
        <AlertTriangle className="h-10 w-10 text-amber-500" />
        <h4 className="font-semibold text-gray-900">Quiz Under Construction</h4>
        <p className="text-xs text-gray-500">We are adding hand-crafted trivia for this state shortly!</p>
      </div>
    );
  }

  const currentQuestion = questions[currentIdx];

  const handleOptionClick = (optIdx: number) => {
    if (isSubmitted) return;
    setSelectedOpt(optIdx);
  };

  const handleSubmit = () => {
    if (selectedOpt === null || isSubmitted) return;
    setIsSubmitted(true);
    if (selectedOpt === currentQuestion.answerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setIsSubmitted(false);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
      if (score + (selectedOpt === currentQuestion.answerIndex ? 1 : 0) === questions.length) {
        onUnlockBadge(badgeName);
      }
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 md:p-6 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!quizFinished ? (
          <motion.div
            key={`question-${currentIdx}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            {/* Header / Progress bar */}
            <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
              <span className="uppercase tracking-widest text-amber-500 font-mono text-[10px]">Question {currentIdx + 1} of {questions.length}</span>
              <span>Current Score: {score}/{questions.length}</span>
            </div>
            
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-amber-500 h-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h4 className="text-base md:text-lg font-bold text-white leading-tight">
              {currentQuestion.question}
            </h4>

            {/* Options List */}
            <div className="grid gap-2.5">
              {currentQuestion.options.map((option, idx) => {
                let btnStyle = "border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 text-slate-300";
                
                if (selectedOpt === idx) {
                  btnStyle = "border-amber-500/55 bg-amber-500/10 text-white ring-2 ring-amber-500/20";
                }

                if (isSubmitted) {
                  if (idx === currentQuestion.answerIndex) {
                    btnStyle = "border-emerald-500/55 bg-emerald-500/10 text-emerald-300 ring-2 ring-emerald-500/20";
                  } else if (selectedOpt === idx) {
                    btnStyle = "border-rose-500/55 bg-rose-500/10 text-rose-300 ring-2 ring-rose-500/20";
                  } else {
                    btnStyle = "border-white/5 bg-white/[0.01] text-slate-500 opacity-40";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isSubmitted}
                    onClick={() => handleOptionClick(idx)}
                    className={`flex items-center w-full px-4 py-3 text-left text-sm font-medium rounded-xl border transition-all duration-200 cursor-pointer ${btnStyle}`}
                  >
                    <span className="flex-1">{option}</span>
                    {isSubmitted && idx === currentQuestion.answerIndex && (
                      <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback / Educational explanation */}
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border text-xs leading-relaxed ${
                  selectedOpt === currentQuestion.answerIndex
                    ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-400"
                    : "bg-rose-500/5 border-rose-500/20 text-rose-400"
                }`}
              >
                <p className="font-bold mb-1">
                  {selectedOpt === currentQuestion.answerIndex ? "🎉 Correct Answer!" : "❌ Incorrect"}
                </p>
                <p>{currentQuestion.explanation}</p>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end gap-2.5 pt-2">
              {!isSubmitted ? (
                <Button 
                  disabled={selectedOpt === null}
                  onClick={handleSubmit}
                  className="w-full sm:w-auto"
                >
                  Verify Answer
                </Button>
              ) : (
                <Button 
                  onClick={handleNext}
                  className="w-full sm:w-auto"
                >
                  {currentIdx < questions.length - 1 ? "Next Question" : "Complete Quiz"}
                </Button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="quiz-finished"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-6 space-y-5"
          >
            {score === questions.length ? (
              <div className="relative">
                <motion.div
                  initial={{ rotate: -15, scale: 0.5 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", damping: 10 }}
                  className="bg-amber-500 text-slate-950 p-5 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                >
                  <Award className="h-16 w-16" />
                </motion.div>
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500"></span>
                </span>
              </div>
            ) : (
              <div className="bg-white/5 text-slate-500 p-5 rounded-full border border-white/5">
                <Award className="h-14 w-14" />
              </div>
            )}

            <div>
              <h4 className="text-xl font-bold text-white">Quiz Completed!</h4>
              <p className="text-sm text-slate-400 mt-1">
                You scored <strong className="text-white">{score} out of {questions.length}</strong>
              </p>
            </div>

            {score === questions.length ? (
              <div className="bg-amber-500/10 border border-amber-500/25 rounded-xl px-4 py-3 max-w-sm">
                <p className="text-xs text-amber-500 font-bold">🎖️ New Achievement Unlocked!</p>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  You earned the <strong>{badgeName}</strong> badge for achieving a perfect score. Collect more badges by exploring India!
                </p>
              </div>
            ) : (
              <p className="text-xs text-slate-500 max-w-xs">
                Score a perfect 3/3 to unlock the golden region explorer collector's badge!
              </p>
            )}

            <div className="flex gap-2.5 w-full sm:w-auto">
              <Button variant="outline" onClick={handleRestart} className="flex-1 sm:flex-none gap-2">
                <RefreshCw className="h-4 w-4" /> Try Again
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
