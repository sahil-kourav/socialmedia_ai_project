const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config: {
      systemInstruction: `You are a social media caption writer. 
Your task is to generate an attractive and engaging caption for the given image.  
Follow these rules:
1. The caption should be short, catchy, and in a fun/positive tone.  
2. Use emojis naturally (not too many, 2–5 is enough).  
3. Add 3–5 trending hashtags related to the image content.  
4. Style the caption like Instagram/Facebook posts, engaging and aesthetic.  
5. Do NOT describe the image literally — make it feel like a vibe or mood.  
`,
    },
  });
  console.log(response.text);
}

module.exports = generateCaption;
