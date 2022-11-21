let news = JSON.parse(localStorage.getItem('news'));

let append = ({title,urlToImage,content,description,author}=news)=>{
    let div = document.createElement('div');

    let Title = document.createElement('h3');
    Title.innerText = title;

    let image = document.createElement('img');
    image.src = urlToImage;

    let Content = document.createElement('p');
    Content.innerText = content;

    let Description = document.createElement('h4');
    Description.innerText = description;
    Description.style.color = '#6B8E23';

    let Author = document.createElement('h2');
    Author.innerText = author;
    Author.style.fontStyle = 'italic';

    div.append(image,Title,Description,Content,Author);
    document.getElementById('box').append(div);
}

append({title,urlToImage,content,description,author}=news);