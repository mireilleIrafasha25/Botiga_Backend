import Message from "../model/Message.js";
import { getBotResponse } from "../utils/chatBotLogic.js";

export const handleChat = async (req, res) => {
  try {
    const { text } = req.body;

    // Save user message
    const userMessage = new Message({ sender: "user", text });
    await userMessage.save();

    // Get bot response
    const botReply = getBotResponse(text);
    const botMessage = new Message({ sender: "bot", text: botReply });
    await botMessage.save();

    res.json({ reply: botReply });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
