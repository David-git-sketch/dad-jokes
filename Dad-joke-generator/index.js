const btn= document.getElementById("btn");

const joke= document.getElementById("joke");

const apiKey= "eaOVMgmSPT1en20bQ3cc0A==skInimUDhORNDF7n"
const url="https://api.api-ninjas.com/v1/dadjokes?limit="
const option={
    method:"GET",
    headers:{
        "X-api-key": apiKey
    },
}
async function getJoke(){
    const response= await fetch(url,option)
    const data= await response.json()
    joke.innerText= data[0].joke
}

btn.addEventListener("click", getJoke)