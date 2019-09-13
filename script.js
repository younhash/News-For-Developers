


//// Can I use string interposlation with link line 39 0r 47 ? \\\\\\\



const topNews = document.querySelector('.top-news');
const fillTopNews = {};
let submit;
let update;
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
    
    topNews.innerHTML = ` <div class="article">
    <h3> ${fillTopNews.topArticle[0].title}</h3>
    <p> ${fillTopNews.topArticle[0].description}</p>
    <p> <a href= ${fillTopNews.topArticle[0].url}>${fillTopNews.topArticle[0].url}</a></p>
    <img src= ${fillTopNews.topArticle[0].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[0].content}</p> </div>
    <hr>

    <div class="article"> 
    <h3> ${fillTopNews.topArticle[1].title}</h3>
    <p> ${fillTopNews.topArticle[1].description}</p>
    <p> <a href= ${fillTopNews.topArticle[1].url}>${fillTopNews.topArticle[1].url}</a></p>
    <img src= "${fillTopNews.topArticle[1].urlToImage}" width="300">
    <p> ${fillTopNews.topArticle[1].content}</p></div>
    <hr>
    
    <div class="article">
    <h3> ${fillTopNews.topArticle[2].title}</h3>
    <p> ${fillTopNews.topArticle[2].description}</p>
    <p> <a href= ${fillTopNews.topArticle[2].url}>${fillTopNews.topArticle[2].url}</a></p>
    <img src= ${fillTopNews.topArticle[2].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[2].content}</p></div>
    <hr> 
    
    <div class="article">
    <h3> ${fillTopNews.topArticle[3].title}</h3>
    <p> ${fillTopNews.topArticle[3].description}</p>
    <p> <a href= ${fillTopNews.topArticle[3].url}>${fillTopNews.topArticle[3].url}</a></p>
    <img src= ${fillTopNews.topArticle[3].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[3].content}</p></div>
    <hr>

    <div class="article">
    <h3> ${fillTopNews.topArticle[4].title}</h3>
    <p> ${fillTopNews.topArticle[4].description}</p>
    <p> <a href= ${fillTopNews.topArticle[4].url}>${fillTopNews.topArticle[4].url}</a></p>
    <img src= ${fillTopNews.topArticle[4].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[4].content}</p></div>
    <hr>

    <div class="article">
    <h3> ${fillTopNews.topArticle[5].title}</h3>
    <p> ${fillTopNews.topArticle[5].description}</p>
    <p> <a href= ${fillTopNews.topArticle[5].url}>${fillTopNews.topArticle[5].url}</a></p>
    <img src= ${fillTopNews.topArticle[5].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[5].content}</p></div>
    <hr>

    <div class="article">
    <h3> ${fillTopNews.topArticle[6].title}</h3>
    <p> ${fillTopNews.topArticle[6].description}</p>
    <p> <a href= ${fillTopNews.topArticle[6].url}>${fillTopNews.topArticle[6].url}</a></p>
    <img src= ${fillTopNews.topArticle[6].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[6].content}</p></div>
    <hr>

    <div class="article">
    <h3> ${fillTopNews.topArticle[7].title}</h3>
    <p> ${fillTopNews.topArticle[7].description}</p>
    <p> <a href= ${fillTopNews.topArticle[7].url}>${fillTopNews.topArticle[7].url}</a></p>
    <img src= ${fillTopNews.topArticle[7].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[7].content}</p></div>
    <hr>

    <div class="article">
    <h3> ${fillTopNews.topArticle[8].title}</h3>
    <p> ${fillTopNews.topArticle[8].description}</p>
    <p> <a href= ${fillTopNews.topArticle[8].url}>${fillTopNews.topArticle[8].url}</a></p>
    <img src= ${fillTopNews.topArticle[8].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[8].content}</p></div>
    <hr>

    <div class="article">
    <h3> ${fillTopNews.topArticle[9].title}</h3>
    <p> ${fillTopNews.topArticle[9].description}</p>
    <p> <a href= ${fillTopNews.topArticle[9].url}>${fillTopNews.topArticle[9].url}</a></p>
    <img src= ${fillTopNews.topArticle[9].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[9].content}</p></div>
     `
}
//sendMe();


// Search for one
const searchMe = async (event) => {
    event.preventDefault();
    topNews.innerHTML = '';
    let theSearchQuery = document.querySelector('#search').value;

    let myResponse = await axios.get(`https://newsapi.org/v2/everything?q=${theSearchQuery}&apiKey=13c5993f3cc84e6d81c069e76007ef89`);
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
    
    topNews.innerHTML = ` <div class="article">
    <h3> ${fillTopNews.topArticle[0].title}</h3>
    <p> ${fillTopNews.topArticle[0].description}</p>
    <p> <a href= ${fillTopNews.topArticle[0].url}>${fillTopNews.topArticle[0].url}</a></p>
    <img src= ${fillTopNews.topArticle[0].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[0].content}</p> </div>
    <hr>
    

    <div class="article"> 
    <h3> ${fillTopNews.topArticle[1].title}</h3>
    <p> ${fillTopNews.topArticle[1].description}</p>
    <p> <a href= ${fillTopNews.topArticle[1].url}>${fillTopNews.topArticle[1].url}</a></p>
    <img src= ${fillTopNews.topArticle[1].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[1].content}</p></div>
    <hr>
    
    <div class="article">
    <h3> ${fillTopNews.topArticle[2].title}</h3>
    <p> ${fillTopNews.topArticle[2].description}</p>
    <p> <a href= ${fillTopNews.topArticle[2].url}>${fillTopNews.topArticle[2].url}</a></p>
    <img src= ${fillTopNews.topArticle[2].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[2].content}</p></div>
    <hr> 
    
    <div class="article">
    <h3> ${fillTopNews.topArticle[3].title}</h3>
    <p> ${fillTopNews.topArticle[3].description}</p>
    <p> <a href= ${fillTopNews.topArticle[3].url}>${fillTopNews.topArticle[3].url}</a></p>
    <img src= ${fillTopNews.topArticle[3].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[3].content}</p></div>
    <hr>

    <div class="article">
    <h3> ${fillTopNews.topArticle[4].title}</h3>
    <p> ${fillTopNews.topArticle[4].description}</p>
    <p> <a href= ${fillTopNews.topArticle[4].url}>${fillTopNews.topArticle[4].url}</a></p>
    <img src= ${fillTopNews.topArticle[4].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[4].content}</p></div>
    <hr>

    <div class="article">
    <h3> ${fillTopNews.topArticle[5].title}</h3>
    <p> ${fillTopNews.topArticle[5].description}</p>
    <p> <a href= ${fillTopNews.topArticle[5].url}>${fillTopNews.topArticle[5].url}</a></p>
    <img src= ${fillTopNews.topArticle[5].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[5].content}</p></div>
    <hr>

    <div class="article">
    <h3> ${fillTopNews.topArticle[6].title}</h3>
    <p> ${fillTopNews.topArticle[6].description}</p>
    <p> <a href= ${fillTopNews.topArticle[6].url}>${fillTopNews.topArticle[6].url}</a></p>
    <img src= ${fillTopNews.topArticle[6].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[6].content}</p></div>
    <hr>

    <div class="article">
    <h3> ${fillTopNews.topArticle[7].title}</h3>
    <p> ${fillTopNews.topArticle[7].description}</p>
    <p> <a href= ${fillTopNews.topArticle[7].url}>${fillTopNews.topArticle[7].url}</a></p>
    <img src= ${fillTopNews.topArticle[7].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[7].content}</p></div>
    <hr>

    <div class="article">
    <h3> ${fillTopNews.topArticle[8].title}</h3>
    <p> ${fillTopNews.topArticle[8].description}</p>
    <p> <a href= ${fillTopNews.topArticle[8].url}>${fillTopNews.topArticle[8].url}</a></p>
    <img src= ${fillTopNews.topArticle[8].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[8].content}</p></div>
    <hr>

    <div class="article">
    <h3> ${fillTopNews.topArticle[9].title}</h3>
    <p> ${fillTopNews.topArticle[9].description}</p>
    <p> <a href= ${fillTopNews.topArticle[9].url}>${fillTopNews.topArticle[9].url}</a></p>
    <img src= ${fillTopNews.topArticle[9].urlToImage} width="300">
    <p> ${fillTopNews.topArticle[9].content}</p></div>
     `
}

// Update News
update = document.querySelector('#update');
update.addEventListener('click', sendMe);

// Update News
form = document.querySelector('form');
form.addEventListener('submit', searchMe);


//console.log(fillTopNews.title);


//newsInfo.addEventListener('click', sendMe);

// for (let i = 0; i < 10; i++) {
// }
