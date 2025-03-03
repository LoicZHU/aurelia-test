import express,{json,Request, Response} from "express";
import cors from 'cors';
import OpenAI from "openai";

require('dotenv').config();

const app = express();
const port = 3001;

app
  .use(cors())
  .use(json());

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

app.post('/api/chat', async (req:Request, res:Response) => {
  const { message } = req.body;
	console.log(` 👉Received message: ${message}`);

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: message }],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).send('❌ Error communicating with OpenAI API');
  }
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
