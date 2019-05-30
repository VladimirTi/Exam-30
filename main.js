'use strict';
const nodeList = []
document.addEventListener('DOMContentLoaded', () => {
fetch('http://my-json-server.typicode.com/mate-academy/literary-blog/articles')
  .then(response => response.json())
  .then(listOfArticle => {
    const list = new ArticleList(document.querySelector('#article-list'))
    
    listOfArticle.forEach(item => {
      const oneArticle = new Article(item.title, item.author, item.text)
      list.addArticle(oneArticle)
    });

    list.render()

  })
});