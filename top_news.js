const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0f9c65ad91eb43bf822ec55c5ec18982`;

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // let headImage = document.getElementById("headA");
    // let img = document.createElement("img");
    // img.src = jsObject.articles[0].urlToImage;
    // headImage.appendChild(img);

    // document.getElementById("header-article").textContent =
    //   jsObject.articles[0].title;
    // document.getElementById("header-desc").textContent =
    //   jsObject.articles[0].description;

    let news = jsObject.articles;
    for (let i = 0; i < 6; i++) {
      let num = Math.floor(1 + i);
      let story = document.querySelector(`.story-${num}`);
      let img = document.createElement("img");
      img.src =
        news[i].urlToImage ||
        "https://static.vecteezy.com/system/resources/previews/013/775/788/original/breaking-news-3d-text-3d-typography-illustration-free-png.png";
      story.appendChild(img);

      let title = document.querySelector(`#article-link-${num}`);
      title.textContent = news[i].title;

      //   let desc = document.querySelector(`#article-desc-${num}`);
      //   desc.textContent = news[i].description;
      //   document.article.append(desc);
      //   let title = document.querySelector(`article-link-${num}`);
      //   title.textContent = news[i].title;
      //   title.src = news[i].url;
      //   story.appendChild(title);
    }
    // let h2 = document.createElement("h2");
    // let headA = document.getElementById("headA");
    // h2.textContent = jsObject.articles[0].title;
    // headA.appendChild(h2);
  });
