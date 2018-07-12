// collect listing articles
var articles = document.querySelectorAll(".showcase article, .featured article, .index main article, .archive main article")

// set click event for search

articles.forEach( article => {
  if (article.dataset.url) {
    article.addEventListener("click", function(e) {
      location.href = article.dataset.url;
    })
  }
})

// var showcases = document.querySelectorAll(".showcase article, .index main article")
//
// // set click event for search
//
// articles.forEach( article => {
//   if (article.dataset.url) {
//     article.addEventListener("click", function(e) {
//       location.href = article.dataset.url;
//     })
//   }
// })
