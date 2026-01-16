
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  // Use process.env.API_KEY directly when initializing as per guidelines
  private ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  async analyzeLTV(niche: string, mainPainPoint: string): Promise<string> {
    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analise o seguinte cenário sob a ótica do Método LTV de Weskley Gomes.
      Nicho: ${niche}
      Problema Principal: ${mainPainPoint}
      
      Forneça um diagnóstico curto (máximo 150 palavras) e direto, citando como a educação e os processos resolveriam isso. Use tom profissional e autoritário.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || "Não foi possível gerar a análise no momento.";
  }
}

export const geminiService = new GeminiService();
