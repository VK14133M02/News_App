document.getElementById('country').addEventListener("change",newsFunc);
let page = 1;

async function newsFunc(){
    let country = document.getElementById('country').value;
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=53d1eb58481b4e7ea9a375db7919134b&page=${page}`);
    let data = await res.json();

    console.log('data',data);
    append(data.articles);
    return data.articles;
}

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

let indiaNews = async () =>{
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=53d1eb58481b4e7ea9a375db7919134b&page=${page}`);
    let data = await res.json();
    append(data.articles);
    return data.articles;
}

indiaNews();


let getNews = async ()=>{
    let companey = document.getElementById('tesla').value;

    let res = await fetch(`https://newsapi.org/v2/everything?q=${companey}&sortBy=publishedAt&apiKey=53d1eb58481b4e7ea9a375db7919134b&page=${page}`);
    let data = await res.json();

    if(companey == ""){
        alert('Enter Companey name');
    }
    else{
        append(data.articles);
    }  
    return data.articles;  
}


let previous = async ()=>{
    if(page===1){
        return;
    }
    page--;
    let data1 = await indiaNews();
    append(data1);    
}


let next = async ()=>{
    // if(page===4){
        
    // }
    page++;
    let data1 = await indiaNews();
    append(data1);
}