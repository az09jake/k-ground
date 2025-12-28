import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Note: In a production environment, you should never expose your API key on the client side.
// This is for demonstration/prototyping purposes as per the instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export type AspectRatio = "16:9" | "1:1" | "3:4" | "4:3" | "9:16";

/**
 * Generates an image using the 'gemini-2.5-flash-image' model.
 * @param prompt The text description of the image to generate.
 * @param aspectRatio The aspect ratio of the image.
 * @returns A promise that resolves to the base64 image string or null if failed.
 */
export const generateImage = async (prompt: string, aspectRatio: AspectRatio = "16:9"): Promise<string | null> => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing. Returning null to use fallback image.");
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image', // Nano Banana
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
        }
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        return `data:image/png;base64,${base64EncodeString}`;
      }
    }
    
    return null;

  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    return null;
  }
};