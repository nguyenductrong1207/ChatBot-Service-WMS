import ChatBot, { ChatBotProvider } from "react-chatbotify";

const MyChatBot = () => {
  const id = "my-chatbot-id" // if not specified, will auto-generate uuidv4
  const helpOptions = ["Quickstart", "API Docs", "Examples", "Github", "Discord"];
  const flow = {
    start: {
      message: "Hello, I am Tan Jin 👋! Welcome to React ChatBotify, I'm excited that you are using our " +
        "chatbot 😊!",
      transition: { duration: 1000 },
      path: "show_options"
    },
    show_options: {
      message: "It looks like you have not set up a conversation flow yet. No worries! Here are a few helpful " +
        "things you can check out to get started:",
      options: helpOptions,
      path: "process_options"
    },
    prompt_again: {
      message: "Do you need any other help?",
      options: helpOptions,
      path: "process_options"
    },
    unknown_input: {
      message: "Sorry, I do not understand your message 😢! If you require further assistance, you may click on " +
        "the Github option and open an issue there or visit our discord.",
      options: helpOptions,
      path: "process_options"
    },
    process_options: {
      transition: { duration: 0 },
      chatDisabled: true,
      path: async (params: { userInput: any; injectMessage: (arg0: string) => any; }) => {
        let link = "";
        switch (params.userInput) {
          case "Quickstart":
            link = "https://react-chatbotify.com/docs/introduction/quickstart/";
            break;
          case "API Docs":
            link = "https://react-chatbotify.com/docs/api/settings";
            break;
          case "Examples":
            link = "https://react-chatbotify.com/docs/examples/basic_form";
            break;
          case "Github":
            link = "https://github.com/tjtanjin/react-chatbotify/";
            break;
          case "Discord":
            link = "https://discord.gg/6R4DK4G5Zh";
            break;
          default:
            return "unknown_input";
        }
        await params.injectMessage("Sit tight! I'll send you right there!");
        setTimeout(() => {
          window.open(link);
        }, 1000)
        return "repeat"
      },
    },
    repeat: {
      transition: { duration: 3000 },
      path: "prompt_again"
    },
  }

  return (
    <ChatBotProvider>
      <ChatBot id={id} flow={flow} settings={{ general: { embedded: false }, chatHistory: { storageKey: "example_faq_bot" } }} />
    </ChatBotProvider>
  );
};

export default MyChatBot;

