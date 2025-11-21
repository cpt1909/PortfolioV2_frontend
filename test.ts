export const res = await fetch("http://127.0.0.1:8000/cora",{
    method: "POST",
    headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        "authorization": "Bearer >jkLoV)~hL338*%RS/2m[Tsd!TaFXE"
    },
    body: JSON.stringify({
        prompt: "hello. who are you?"
    })
})

const header = res.headers;
const Authorization = header.get("authorization");

console.log(res)
console.log(Authorization)