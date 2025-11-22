import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysisResult } from "../types";

export const analyzeProjectIdea = async (idea: string): Promise<AIAnalysisResult> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Act as a creative director for a high-end digital agency. 
    Analyze the following project idea and provide a creative project name, a catchy slogan, a professional summary, 
    a list of recommended services, and an estimated budget allocation (percentage split between Strategy, Design, Development, and Marketing).
    
    Project Idea: ${idea}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          projectName: { type: Type.STRING },
          slogan: { type: Type.STRING },
          summary: { type: Type.STRING },
          recommendedServices: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          estimatedBudgetSplit: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                value: { type: Type.NUMBER }
              }
            }
          }
        }
      }
    }
  });

  const text = response.text;
  if (!text) {
    throw new Error("No response from AI");
  }

  return JSON.parse(text) as AIAnalysisResult;
};
