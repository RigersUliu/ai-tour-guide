import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.AZURE_OPENAI_ENDPOINT,
});

export async function POST(request: Request) {
  try {
    const { message, cityData } = await request.json();

    const stringifiedCityData = JSON.stringify(cityData, null, 2);

    const aiPresentation = `You are a helpful AI assistant that provides information about cities. You only have access to the following city information and should not make up any additional information:`;
    const noResponseMessage = `Hmm, I couldn't find specific information on that. Let me know if you'd like me to try again or look for something similar!`;
    const ruleAboutContent = `Respond only based on the exact information provided above. If you don't have specific information about something, say "${noResponseMessage}".`;
    const beautifyResponse = `Please structure the response with clear, readable sections. Each section should have a header in **bold** and slightly larger font, followed by the content. The sections should be spaced out with blank lines in between to avoid clutter. Use emojis in a subtle way to enhance the response and engage the reader, but don't overuse them.`;
    const googleMaps = `If available, include Google Maps links. The links should be bold, red, and accompanied by an appropriate emoji for better visibility.`;

    const responseStructure = `Here is the required structure for your response:
    1. **Description**: Provide a short introduction or overview of the city.
    2. **📍 Location**: Specify the city, country, and geographical details (latitude, longitude).
    3. **🧳 Visitor Information**: Share tips such as best time to visit, duration of stay, and transport details.
    4. **💡 Helpful Tips**: Provide useful tips and recommendations for visitors.

Each section should be clearly separated with spaces and use headers that are bold and a little larger than the content text. Make sure the emojis are used appropriately without overwhelming the response. Give a concise summary of essential information about [topic].`;

    const responsePrompt = `${aiPresentation} ${stringifiedCityData} ${ruleAboutContent} ${beautifyResponse} ${googleMaps} ${responseStructure}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o", // Azure GPT-4 model
      messages: [
        {
          role: "system",
          content: responsePrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return NextResponse.json({ response: response.choices[0].message.content });
  } catch (error) {
    console.error("Error in Azure OpenAI API:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
