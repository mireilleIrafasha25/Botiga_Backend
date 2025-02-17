const responses = {
    "hello": "Hi there! How can I assist you?",
    "how are you": "I'm just a bot, but I'm doing great! 😊",
    "bye": "Goodbye! Have a great day!",
  };
  
  export const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    return responses[message] || "I'm not sure how to respond to that. 🤔";
  };
  