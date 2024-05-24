import OpenAI from 'openai';
const api = "sk-OYpYbESRBY3u2rLTE3CfFc6d7d234450B86f60Bd57587b17"
const url = "https://free.gpt.ge/v1"
import fs from 'fs';
const openai = new OpenAI({
  baseURL: url, 
  apiKey: api, // This is the default and can be omitted
});

async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "how to build a chatbot with chatgpt api" }],
      model: "gpt-3.5-turbo",
    });
    console.log(completion) 
    console.log(completion.choices[0].message.content)

  }
  
main();