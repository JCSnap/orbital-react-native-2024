// create an endpoint on local host port 3001 that accepts a post request with a text body and returns a json object with the text reversed

const express = require("express");
const OpenAI = require("openai");

const openai = new OpenAI();
const app = express();
const port = 3001;

app.use(express.json());

app.post("/reverse", async (req, res) => {
    const { text } = req.body;
    console.log(text);
    if (typeof text === "string") {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: text }],
            model: "gpt-3.5-turbo",
        });
        console.log(completion.choices[0].message.content);
        res.json({ reversed: completion.choices[0].message.content });
    } else {
        res.status(400).json({ error: "Invalid input" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
