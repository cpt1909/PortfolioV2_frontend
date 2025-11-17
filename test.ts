type CoraRequest = {
    prompt: string,
    convo_context: string[]
}

type CoraResponse = {
    reply: string
}

const askCora = async (prompt: string, convo_context: string[]) => {
    const body: CoraRequest = {
        prompt,
        convo_context,
    }

    const res = await fetch("http://127.0.0.1:8000/cora", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const data = (await res.json()) as CoraResponse;

    console.log(data.reply);
    }

askCora("who is Thaarakenth?", [])