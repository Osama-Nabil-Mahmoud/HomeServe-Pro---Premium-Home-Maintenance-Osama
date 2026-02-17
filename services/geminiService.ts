
import { GoogleGenAI } from "@google/genai";
import { Language } from "../lib/i18n";

const SYSTEM_INSTRUCTION = (lang: Language) => `You are the HomeServe Pro AI Assistant. 
Your goal is to provide expert, safe, and helpful home maintenance advice. 
If a task sounds dangerous (like major electrical or structural work), always recommend hiring a professional from HomeServe Pro.
Keep responses concise, helpful, and professional. 
Format your responses using clean markdown.
IMPORTANT: You MUST respond in ${lang === 'ar' ? 'Arabic' : 'English'}.`;

export const getMaintenanceAdvice = async (userPrompt: string, lang: Language) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your environment variables.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION(lang),
        temperature: 0.7,
      },
    });

    return response.text || (lang === 'ar' ? "عذراً، لم أتمكن من توليد نصيحة الآن." : "I'm sorry, I couldn't generate advice for that right now.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'ar' ? "خطأ: تعذر الاتصال بمساعد الذكاء الاصطناعي." : "Error: Unable to connect to the AI Assistant.";
  }
};
