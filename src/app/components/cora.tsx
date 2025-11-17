import { useState } from "react";

export default function Cora() {

  let id: number = 1;

  type Chat = {
    chatId: number,
    userId: string,
    text: string,
  }

  const coraApi = "http://127.0.0.1:8000/cora";
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [enableChatbox, setEnableChatbox] = useState<boolean>(true);
  
  type CoraRequest = {
    prompt: string,
}

  type CoraResponse = {
      reply: string
  }

  const askCora = async (prompt: string) => {

    const body: CoraRequest = {
        prompt: prompt,
    }

    try{
      const res = await fetch(coraApi, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

      const data = (await res.json()) as CoraResponse;
      return data.reply;
    }catch(e){
      return "Connection Failed !!"
    }}
    


  const handleSend = async () => {
    if (!text.trim()) return;

    setEnableChatbox(false);

    const userChat: Chat = {
      chatId: id,
      userId: "You",
      text: text,
    }
    id++;
    setChatHistory(prev => [...prev, userChat]);
    setText("");
    setLoading(true);

    const reply: string = await askCora(text)
    const coraChat: Chat = {
      chatId: id,
      userId: "Cora",
      text: reply,
    }
    id++;
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
