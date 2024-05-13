// Progression 1: create a function and fetch the api using axios
const fetchNews=async() =>{
  try{
    const response=await axios.get("https://gnews.io/api/v4/top-headlines?country=in&token=64aa819547a44b1bc879c4339fbc1dec");
    return response.data.articles;
  } catch(error){
    console.error("error fetching news:",error.message);
    return[];
  }
};

const displayNews= async ()=>{
  const newsContainer=document.getElementById('newsContainer');
  const newsData=await fetchNews();
  newsData.forEach(article=>{
    const newsCard=document.createElement('div');
    newsCard.classList.add("news-card");
    newsCard.innerHTML=
    `<img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <p>Source: ${article.source.name}</p>`;
    newsContainer.appendChild(newsCard);
  });
};
document.addEventListener('DOMContentLoaded', async () => {
  await displayNews();
});
