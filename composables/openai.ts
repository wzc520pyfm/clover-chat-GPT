import { Configuration, OpenAIApi } from "openai";

export const useOpenAI = () => {
  const configuration = new Configuration({
    organization: "org-mvGmOG9Wjd3szwU5aeeUt9NO",
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  return {
    openai
  }
}

