window.addEventListener('load', function() {
    fetchNews();
});

$('#loading').show();
            

$.ajax({
    url: newsUrl,
    method: 'GET',
    dataType: 'json',
    success: function(response) {
        
        if (response.status === 'ok' && response.articles && response.articles.length > 0) {
            displayNews(response.articles);
        }
    }
});

function fetchNews() {
    const apiKey = '936c39a5749d49a7a3e001af8436a02f';
    const category = 'technology';
    const newsUrl = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&pageSize=10`;
    
    document.getElementById('loading').style.display = 'block';
    
    console.log("Fetching news from API...");
    
    fetch(newsUrl, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
}
function displayNews(articles) {
    const newsContainer = document.getElementById('news-articles');
    articles.slice(0, 10).forEach((article, index) => {
        console.log(`Processing article ${index + 1}: ${article.title}`);

        const articleCol = document.createElement('div');
        articleCol.className = 'col-md-6 mb-4';
    
    }
    )
};