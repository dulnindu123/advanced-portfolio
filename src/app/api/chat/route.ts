import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Verify API key is configured
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const { messages } = await req.json();
    
    // We only use the latest message from the user for this simple implementation
    const latestMessage = messages[messages.length - 1].content;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = `You are the AI assistant for Dulnindu Saranga, a Software Engineering Undergraduate at the University of Westminster/IIT Sri Lanka. 
Your goal is to answer questions about his professional background and projects.
Here are the key facts about Dulnindu:
- Education: BSc (Hons) in Computer Science at University of Westminster, UK / IIT (2024 - Present). Ananda College (2010 - 2023).
- Skills: Java, Python, JavaScript/TypeScript, Next.js, React Native, REST APIs, IoT, Firebase.
- Featured Projects:
  1. Smart Campus REST API: Built with Java, JAX-RS, Grizzly.
  2. HelaDry IoT Dehydrator: React Native, C/C++, Firebase, hardware integration.
  3. BodySync AI: React Native app with Gemini AI fitness analysis.
  4. Task Manager System: Python CLI & Tkinter GUI application.
- Contact: dulla2850@gmail.com
Be concise, professional, friendly, and helpful. Always represent Dulnindu in a positive light. Do not hallucinate skills he does not have. Keep responses relatively short (2-3 paragraphs max).`;

    const result = await model.generateContent({
      contents: [
        { role: "user", parts: [{ text: systemPrompt + "\n\nUser Question: " + latestMessage }] }
      ],
    });

    const text = result.response.text();

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
