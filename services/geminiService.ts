import { Language } from "../lib/i18n";

export const getMaintenanceAdvice = async (userPrompt: string, lang: Language) => {
  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: userPrompt, lang }), // Pass lang to the API
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.text || (lang === 'ar' ? "عذراً، لم أتمكن من توليد نصيحة الآن." : "I'm sorry, I couldn't generate advice for that right now.");
  } catch (error) {
    console.error("API Fetch Error:", error);
    return lang === 'ar' ? "خطأ: تعذر الاتصال بمساعد الذكاء الاصطناعي." : "Error: Unable to connect to the AI Assistant.";
  }
};
