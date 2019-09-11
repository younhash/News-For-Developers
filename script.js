
const newsInfo = document.querySelector('.news-info');
const sendMe = async () => {
    //event.preventDefault();
    newsInfo.innerHTML = '';

    let myResponse = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=13c5993f3cc84e6d81c069e76007ef89");
    console.log(myResponse.data);
    
}

sendMe();