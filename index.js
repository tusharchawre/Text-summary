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
      'X-RapidAPI-Key': 'db2ebe4091mshbac733f9e72a74cp1c8668jsn1189f702723a',
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