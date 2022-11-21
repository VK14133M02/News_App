let page = 1;

let technology = async ()=>{
    let res = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=53d1eb58481b4e7ea9a375db7919134b&page=${page}`);
    let data = await res.json();

    console.log('data',data);
    append(data.articles);
    return data.articles;
}

technology();

let append = (data)=>{
    document.getElementById('container').innerHTML = "";
    data.forEach(({title,urlToImage,content,description,author})=>{
        let div = document.createElement('div');

        let Title = document.createElement('h3');
        Title.innerText = title;

        let image = document.createElement('img');
        image.src = urlToImage;

        div.append(image,Title);
        div.addEventListener('click',()=>{
            detailNews(title,urlToImage,content,description,author);
        })
        document.getElementById('container').append(div);
    })
}

let detailNews = (title,urlToImage,content,description,author)=>{
    let details = {
        title,
        urlToImage,
        content,
        description,
        author,
    };
    localStorage.setItem('news',JSON.stringify(details));
    window.location.href = "news.html";
}

let previous = async ()=>{
    if(page===1){
        return;
    }
    page--;
    let data = await technology();
    append(data);    
}


let next = async ()=>{    
    page++;
    let data = await technology();
    append(data);
}