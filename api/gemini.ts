import { GoogleGenerativeAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Define a type for the language to ensure type safety
type Language = 'en' | 'ar';

// System instruction logic is now on the server
const SYSTEM_INSTRUCTION = (lang: Language) => `You are the HomeServe Pro AI Assistant. 
Your goal is to provide expert, safe, and helpful home maintenance advice. 
If a task sounds dangerous (like major electrical or structural work), always recommend hiring a professional from HomeServe Pro.
Keep responses concise, helpful, and professional. 
Format your responses using clean markdown.
IMPORTANT: You MUST respond in ${lang === 'ar' ? 'Arabic' : 'English'}.`;

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  // Extract prompt and lang from the body
  const { prompt, lang = 'en' } = request.body as { prompt: string; lang: Language };

  if (!prompt) {
    return response.status(400).json({ error: 'Prompt is required' });
  }

  // IMPORTANT: The API key is sourced from Vercel's environment variables
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    // The system instruction is now set on the server
    systemInstruction: SYSTEM_INSTRUCTION(lang),
  });

  try {
    const result = await model.generateContent(prompt);
    const modelResponse = await result.response;
    const text = modelResponse.text();
    return response.status(200).json({ text });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return response.status(500).json({ error: 'Failed to generate content from Gemini' });
  }
}
