'use strict';


class ArticleList {
  constructor(container) {
    this.container = container;
    this.storage = localStorage;
    this.articleList = [];
    this.deletedList = JSON.parse(this.storage.getItem('deletedList')) || [];
  }

  addArticle(article) {
    this.articleList.push(article);
  }

  removeArticle(articleTitle,query) {
    const index = this.articleList.findIndex(item => item.title === articleTitle);
    this.articleList.splice(index, 1);
    this.deletedList.push(articleTitle)
    this.storage.setItem('deletedList', JSON.stringify(this.deletedList))
    this.render(query);
  }

  render(query = '') {
    const articleList = this.articleList.filter(item => item.matches(query));
    this.container.innerHTML = '';
    articleList.forEach(item => {
      const section = document.createElement('section');
      const titleHtml = document.createElement('h4');
      const authorHtml = document.createElement('h6');
      const button = document.createElement('button');

      titleHtml.innerText = item.title;
      authorHtml.innerText = item.author;
      button.innerText = 'DELETE';
      button.addEventListener('click', event => {
        const article = event.path[1].firstElementChild.innerText;
        this.removeArticle(article, query);
      })

      section.append(titleHtml);
      section.append(authorHtml);
      section.innerHTML += item.text;
      section.append(button);

      this.container.append(section);
    })
  }
}
