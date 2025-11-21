export const res = await fetch("https://portfoliov2-backend-gvmn.onrender.com/cora",{
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

console.log(await res.json())
