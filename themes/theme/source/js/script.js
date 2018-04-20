// collect listing articles
var articles = document.querySelectorAll(".featured article, .index main article")


// set click event for search

articles.forEach( article => {
  if (article.dataset.url) {
    article.addEventListener("click", function(e) {
      location.href = article.dataset.url;
    })
  }
})
