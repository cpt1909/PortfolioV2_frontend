import { useState } from "react";
import { Chat, CoraRequest, CoraResponse } from "@/app/types";

export default function Cora() {

    const [chatHistory, setChatHistory] = useState<Chat[]>([]);
    const [text, setText] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [enableChatbox, setEnableChatbox] = useState<boolean>(true);

    async function askCora(prompt: string){
        
        const body: CoraRequest = {
            prompt: prompt,
        };

        const res = await fetch("/api/cora", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "authorization": process.env.AUTH_TOKEN ?? ""
            },
            body: JSON.stringify(body),
            });
    const data = (await res.json());
    return data.reply;
  }
    
  const handleSend = async () => {
    if (!text.trim()) return;

    setEnableChatbox(false);

    const userChat: Chat = {
      userId: "You",
      text: text,
    }
    setChatHistory(prev => [...prev, userChat]);
    setText("");
    setLoading(true);

    const coraReply = await askCora(text);
    
    const coraChat: Chat = {
      userId: "Cora",
      text: coraReply,
    }
    setChatHistory(prev => [...prev, coraChat]);
    setLoading(false);
    setEnableChatbox(true);
  };

  return (
    <div className="w-xs h-100 border-2 rounded-4xl shadow-xl fixed right-6 bottom-6 z-100">
      <div className="chatHistoryWindow p-3 h-85 overflow-y-auto overscroll-contain">
        {chatHistory.map((item, index) => (
          <div key={index} className="border-2 m-5">
            {item.userId} : {item.text}
          </div>
        ))}
        {
          loading && (
            <div className="border-2 m-5">
              Waiting for response...
            </div>
          )
        }
      </div>

      <div className="">
        <input
          type="text"
          id="chatbox"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }}}
          disabled={!enableChatbox}
          maxLength={60}
          className="border-2 m-left-3"
        />

        <button type="button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}
