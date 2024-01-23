import express from 'express';
import OpenAI from 'openai';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const port = 8080;

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: process.env.VITE_API_KEY,
});


app.post('/', async (req, res) => {
  /* const animal = req.body.animal || '';
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: 'Please enter a valid animal',
      },
    });
    return;
  } */

  const requestedPrompt = req.body.prompt || '';
  const requestedOutputStructure = req.body.outputStructure || '';
  const requestedSystemContent = req.body.systemContent || '';
    if (requestedPrompt.trim().length === 0) {
        res.status(400).json({
            error: {
                message: 'Please enter a valid prompt',
            },
        });
        return;
    }


  console.log('Entered the server');

  const requestJson = (prompt, jsonStructure) =>
    `${prompt}
  Do not include any explanations, only provide an RFC8259 compliant JSON response following this format without deviation.
  ${JSON.stringify(jsonStructure, null)}`;

/*   const requestedOutputStructure = [
    {
      title: 'The idea title',
      description: 'The idea description',
    },
  ]; */

  const messages = [
    {
      role: 'system',
      content: /* 'Act as a copywriter for developers' */ requestedSystemContent,
    },
    {
      role: 'user',
      content: requestJson(
        /* `I'm a software engineer. Create for me a list with 2 ideas for Javascript tutorials.` */ requestedPrompt,
        requestedOutputStructure
      ),
    },
  ];

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
    });
    console.log('Completion:', completion);
    res.status(200).json({ result: completion.choices[0].message?.content });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        },
      });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
