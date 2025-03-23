import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { query } = await req.json();

  try {
    const response = await fetch(process.env.AZURE_INFERENCE_API_URL as string, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.AI_MODEL_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: query }],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from Azure Inference");
    }

    const data = await response.json();
    console.log("DeepSeek API Response:", data);
    return NextResponse.json({ answer: data.choices?.[0]?.message?.content || "No response from AI" });
  } catch (error) {
    console.error("Error fetching from DeepSeek:", error);
    return NextResponse.json({ error: "Sorry, I couldn't retrieve the information." }, { status: 500 });
  }
}