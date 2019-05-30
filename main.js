'use strict';
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://my-json-server.typicode.com/mate-academy/literary-blog/articles')
    .then(response => response.json())
    .then(listOfArticle => {

      const list = new ArticleList(document.querySelector('#article-list'));

      listOfArticle.forEach(item => {
        if (!list.deletedList.includes(item.title)) {
          const oneArticle = new Article(item.title, item.author, item.text);
          list.addArticle(oneArticle);
        }
      });

      list.render();
      const search = document.querySelector('#search');
      search.addEventListener('input', event => {
        list.render(event.target.value);
      })
    })
});
