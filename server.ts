import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with telemetry headers
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Server-side Gemini API Route
app.post("/api/gemini/guide", async (req, res) => {
  try {
    const { stateName, type, customQuestion } = req.body;
    if (!stateName) {
      return res.status(400).json({ error: "State name is required" });
    }

    let prompt = "";
    if (type === "itinerary") {
      prompt = `Create an offbeat, deeply authentic 3-day travel itinerary for ${stateName}, India. 
      Include localized recommendations, hidden gems, and must-try regional street foods. 
      Structure it nicely with Day 1, Day 2, and Day 3. Keep the tone warm, highly engaging, and welcoming.`;
    } else if (type === "question") {
      prompt = `You are a proud, deeply knowledgeable local tourism guide for ${stateName}, India. 
      Answer this traveler's question: "${customQuestion}". 
      Keep your answer concise (max 150 words), conversational, warm, and highlight authentic local secrets, culture, or etiquettes of ${stateName}.`;
    } else {
      prompt = `Provide 3 lesser-known, highly interesting local secrets or historical trivia facts about ${stateName}, India. Keep it structured and exciting.`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an expert travel guide specializing in Indian history, geography, cuisine, and local culture. You speak with warm Indian hospitality, using occasional friendly phrases (like Namaste) where appropriate, and focus on delivering authentic local experiences."
      }
    });

    const text = response.text || "I apologize, but I couldn't formulate a response. Let me try again!";
    res.json({ result: text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error?.message || "An error occurred with the AI guide." });
  }
});

// Health check API
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", time: new Date().toISOString() });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
