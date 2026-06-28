import * as React from "react";
import { StateData } from "../data/statesData";
import { Button } from "./ui/Button";
import { ScrollArea } from "./ui/ScrollArea";
import { Send, Sparkles, Compass, Lightbulb, MapPin, Loader2, AlertCircle } from "lucide-react";

interface AIGuideProps {
  state: StateData;
}

interface ChatMessage {
  id: string;
  sender: "user" | "ai" | "system";
  text: string;
  timestamp: Date;
}

export function AIGuide({ state }: AIGuideProps) {
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Set initial prompt message when state changes
  React.useEffect(() => {
    setMessages([
      {
        id: "init",
        sender: "ai",
        text: `Namaste! 🙏 Welcome to the digital gateway of **${state.name}**. I am your local AI travel concierge. 

Would you like me to curate an **offbeat 3-day travel itinerary**, share **lesser-known historical secrets**, or answer any specific travel questions about local cuisine, festival calendars, and cultural etiquettes of ${state.name}?`,
        timestamp: new Date()
      }
    ]);
    setError(null);
  }, [state]);

  // Auto scroll chat to bottom when messages update
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const callGeminiRoute = async (type: "itinerary" | "secrets" | "question", customQuestion?: string) => {
    if (loading) return;
    setLoading(true);
    setError(null);

    // If it's a custom question, append it to chat first
    if (type === "question" && customQuestion) {
      setMessages((prev) => [
        ...prev,
        {
          id: `user-${Date.now()}`,
          sender: "user",
          text: customQuestion,
          timestamp: new Date()
        }
      ]);
      setInputVal("");
    }

    try {
      const response = await fetch("/api/gemini/guide", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          stateName: state.name,
          type,
          customQuestion
        })
      });

      if (!response.ok) {
        throw new Error("Failed to consult the state travel guide. Please try again later.");
      }

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: "ai",
          text: data.result,
          timestamp: new Date()
        }
      ]);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "An unexpected issue occurred.");
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          sender: "system",
          text: "⚠️ Sorry, I had trouble reaching your guide. Make sure your API environment is set up.",
          timestamp: new Date()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || loading) return;
    callGeminiRoute("question", inputVal.trim());
  };

  return (
    <div className="flex flex-col border border-white/5 rounded-2xl bg-slate-900 overflow-hidden h-[450px]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-white/10 text-white">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4.5 w-4.5 text-amber-400 animate-pulse" />
          <div>
            <h4 className="text-xs font-bold leading-none">{state.name} AI Guide</h4>
            <span className="text-[9px] text-slate-500 font-mono uppercase tracking-wider block mt-1">Powered by Gemini 2.5 Flash</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] text-emerald-400 font-mono">ONLINE</span>
        </div>
      </div>

      {/* Quick buttons bar */}
      <div className="flex flex-wrap gap-2 p-3 border-b border-white/5 bg-slate-950/40">
        <Button
          variant="outline"
          size="sm"
          disabled={loading}
          onClick={() => callGeminiRoute("itinerary")}
          className="text-xs flex items-center gap-1.5 py-1 px-2.5 h-8 bg-white/5 border-white/10 hover:bg-white/10 text-slate-100"
        >
          <Compass className="h-3.5 w-3.5 text-amber-500" />
          <span>Curate 3-Day Itinerary</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          disabled={loading}
          onClick={() => callGeminiRoute("secrets")}
          className="text-xs flex items-center gap-1.5 py-1 px-2.5 h-8 bg-white/5 border-white/10 hover:bg-white/10 text-slate-100"
        >
          <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
          <span>Reveal 3 State Secrets</span>
        </Button>
      </div>

      {/* Messages Scroll Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-950/20"
      >
        {messages.map((msg) => {
          if (msg.sender === "system") {
            return (
              <div key={msg.id} className="flex justify-center">
                <span className="bg-rose-500/10 border border-rose-500/20 text-rose-300 text-[11px] font-semibold py-1 px-3 rounded-full flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {msg.text}
                </span>
              </div>
            );
          }

          const isAI = msg.sender === "ai";
          return (
            <div
              key={msg.id}
              className={`flex ${isAI ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs md:text-sm leading-relaxed whitespace-pre-wrap ${
                  isAI
                    ? "bg-white/[0.02] border border-white/10 text-slate-100"
                    : "bg-amber-500 text-slate-950 font-semibold"
                }`}
              >
                {/* Text Formatting Helper for Markdown bold tags */}
                {msg.text.split("\n").map((para, pIdx) => {
                  return (
                    <p key={pIdx} className={pIdx > 0 ? "mt-2" : ""}>
                      {para.split("**").map((chunk, cIdx) => {
                        return cIdx % 2 === 1 ? (
                          <strong key={cIdx} className={isAI ? "text-amber-500 font-bold" : "text-slate-950 font-black"}>
                            {chunk}
                          </strong>
                        ) : (
                          chunk
                        );
                      })}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl px-4 py-3 flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-amber-500" />
              <span className="text-xs text-slate-400 font-medium">Consulting tourism archives...</span>
            </div>
          </div>
        )}
      </div>

      {/* Custom query input footer */}
      <form onSubmit={handleSubmitCustom} className="p-3 border-t border-white/10 bg-slate-950 flex gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder={`Ask anything about ${state.name} (e.g. "What is local climate in Dec?")`}
          disabled={loading}
          className="flex-1 px-3.5 py-2.5 bg-white/[0.02] border border-white/10 rounded-xl text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors"
        />
        <Button 
          type="submit" 
          disabled={loading || !inputVal.trim()} 
          size="icon"
          className="shrink-0 h-10 w-10 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
