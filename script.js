const topNews = document.querySelector('.top-news');

/////    Getting the API Response    \\\\
// dont forget to add back event to the parameter
const sendMe = async () => {
    //event.preventDefault();
    topNews.innerHTML = '';

    let myResponse = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=13c5993f3cc84e6d81c069e76007ef89");
    console.log(myResponse.data);

    /////    Output the API Response    \\\\\
const fillTopNews = {};
const article = myResponse.data.articles[0];
fillTopNews.sourceName = article.source.name;
fillTopNews.author = article.author
fillTopNews.title = article.title
fillTopNews.description = article.description
fillTopNews.url = article.url;
fillTopNews.urlToImage = article.urlToImage
fillTopNews.content = article.content;

topNews.innerHTML = `
<p>This is ${fillTopNews.sourceName}</p>
<p> ${fillTopNews.author}</p>
<p> ${fillTopNews.title}</p>
<p> ${fillTopNews.description}</p>
<p> ${fillTopNews.url}</p>
<img src= ${fillTopNews.urlToImage} width="300">
<p> ${fillTopNews.publishDate}</p>
<p> ${fillTopNews.content}</p>`

}
sendMe();


//console.log(fillTopNews.title);


//newsInfo.addEventListener('click', sendMe);

// for (let i = 0; i < 10; i++) {
// }
