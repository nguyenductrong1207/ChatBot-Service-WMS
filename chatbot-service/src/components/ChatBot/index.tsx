import ChatBot, { ChatBotProvider } from "react-chatbotify";

const MyChatBot = () => {
  const id = "my-chatbot-id" // if not specified, will auto-generate uuidv4

  const flow = {
    "start": {
        message: "Hello there!",
        path: "end"
    },
    "end": {
        message: "See you, goodbye!"
    }
  }

  return (
    <ChatBotProvider>
      <ChatBot id={id} flow={flow}/>
    </ChatBotProvider>
  );
};

export default MyChatBot;
