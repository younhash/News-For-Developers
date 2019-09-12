const topNews = document.querySelector('.top-news');
const fillTopNews = {};
/////    Getting the API Response    \\\\
// dont forget to add back event to the parameter
const sendMe = async () => {
    //event.preventDefault();
    topNews.innerHTML = '';

    let myResponse = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=13c5993f3cc84e6d81c069e76007ef89");
    console.log(myResponse.data);

    /////    Output the API Response    \\\\\
    const article = [ myResponse.data.articles]
    console.log(article);
    for (let i = 0; i < article.length; i++) {
        fillTopNews.topArticle = article[i];        
    }    
    // fillTopNews.topArticle[0]. = author = article.author
    // fillTopNews.topArticle[1].title = article.title
    // fillTopNews.topArticle[2].description = article.description
    // fillTopNews.topArticle[3].url = article.url;
    // fillTopNews.topArticle[4].urlToImage = article.urlToImage
    // fillTopNews.topArticle[5].content = article.content;
    console.log(fillTopNews.topArticle[0].author)
    
    topNews.innerHTML = `
    <p> ${fillTopNews.topArticle[0].author}</p>
    <p> ${fillTopNews.topArticle[0].title}</p>
    <p> ${fillTopNews.topArticle[0].description}</p>
    <p> ${fillTopNews.topArticle[0].url}</p>
    <img src= ${fillTopNews.topArticle[0].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[0].publishDate}</p>
    <p> ${fillTopNews.topArticle[0].content}</p>

     
    <p> ${fillTopNews.topArticle[1].author}</p>
    <p> ${fillTopNews.topArticle[1].title}</p>
    <p> ${fillTopNews.topArticle[1].description}</p>
    <p> ${fillTopNews.topArticle[1].url}</p>
    <img src= ${fillTopNews.topArticle[1].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[1].publishDate}</p>
    <p> ${fillTopNews.topArticle[1].content}</p>
    
    
    <p> ${fillTopNews.topArticle[2].author}</p>
    <p> ${fillTopNews.topArticle[2].title}</p>
    <p> ${fillTopNews.topArticle[2].description}</p>
    <p> ${fillTopNews.topArticle[2].url}</p>
    <img src= ${fillTopNews.topArticle[2].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[2].publishDate}</p>
    <p> ${fillTopNews.topArticle[2].content}</p> `


}
sendMe();


//console.log(fillTopNews.title);


//newsInfo.addEventListener('click', sendMe);

// for (let i = 0; i < 10; i++) {
// }
