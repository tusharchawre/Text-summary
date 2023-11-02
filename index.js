const form = document.querySelector("#form")

form.addEventListener("submit", async (e)=> {
  e.preventDefault();
  const formData =  new FormData(form);
  const shtarr = ([...formData])

  const options = {
    method: 'POST',
    url: 'https://tldrthis.p.rapidapi.com/v1/model/extractive/summarize-text/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '905e1858f5msh6322e1a6a937a2fp18e512jsn5eee0e4d69ed',
      'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
    },
    data: {
      text: JSON.stringify(shtarr[0][1]),
      num_sentences: 5
    }
  };

try{
  const res =  await axios.request(options)
  console.log(res.data.summary)
  res.data.summary.map((item,key)=>{

    let li = 
    document.createElement("li");
li.innerText = `${key+1}. ` + item;

document.querySelector(".result").appendChild(li)
  })
}

catch(e){
  console.log(e)

}
})