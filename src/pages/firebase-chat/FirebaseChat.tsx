import React, { useEffect } from "react";
import { realtimeDb } from "../../fb";
import { ChatStore } from "./ChatStore";

function FirebaseChat() {
  const [chatStore] = React.useState<ChatStore>(new ChatStore(realtimeDb));
  const [inputText, setInputText] = React.useState("");
  const [messages, setMessages] = React.useState<string[]>([]);

  async function loadMessages() {
    setMessages(await chatStore.getMessages());
  }

  useEffect(() => {
    loadMessages();
  }, []);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter") {
      chatStore.send(inputText);
      setInputText("");
    }
  }

  return (
    <div>
      <input
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        type="text"
        placeholder="type message here..."
        className="w-full border-2 p-2"
        onKeyDown={handleKeyDown}
      ></input>
      <button
        onClick={loadMessages}
        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Load chat
      </button>
      {messages.map((message) => (
        <div key={message} className="p-2 ">
          {message}
        </div>
      ))}
    </div>
  );
}

export default FirebaseChat;
