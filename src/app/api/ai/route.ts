import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.AZURE_OPENAI_ENDPOINT,
});

export async function POST(request: Request) {
  try {
    const { message, cityData } = await request.json();
    
    const response = await openai.chat.completions.create({
      model: "gpt-4o", // Azure GPT-4 model
      messages: [
        {
          role: "system",
          content: `You are a helpful AI assistant that provides information about cities. You only have access to the following city information and should not make up any additional information:
${JSON.stringify(cityData, null, 2)}
Respond only based on the exact information provided above. If you don't have specific information about something, say "I don't have specific information about that."`
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    return NextResponse.json({ response: response.choices[0].message.content });
  } catch (error) {
    console.error('Error in Azure OpenAI API:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}