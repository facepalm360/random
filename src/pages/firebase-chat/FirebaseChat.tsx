import React, { useEffect } from "react";
import { chatStore, realtimeDBMessage } from "./ChatStore";
import { observer } from "mobx-react";
import format from "date-fns/format";

const FirebaseChat = observer(() => {
  const [inputText, setInputText] = React.useState("");

  async function loadMessages() {}

  useEffect(() => {
    loadMessages();
  }, []);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" && inputText.trim().length > 0) {
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
      <div className="mt-4">
        {chatStore.messagesReversed.map((message) =>
          renderMessageComponent(message)
        )}
      </div>
    </div>
  );
});

export default FirebaseChat;

function renderMessageComponent(message: realtimeDBMessage): JSX.Element {
  return (
    <div key={message.key} className="p-2 flex">
      <div className="flex flex-col">
        <div className="text-sm rounded-lg bg-blue-600 px-2 text-white">
          {format(message.timestamp, "d MMM yyyy, h:mm aa")}
        </div>
        <div className="text-xl">{message.text}</div>
      </div>
    </div>
  );
}
