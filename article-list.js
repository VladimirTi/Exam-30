'use strict';


class ArticleList {
  constructor(container) {
    this.container = container;
    this.storage = localStorage;
    this.nodeList = [];
    this.deletedList = JSON.parse(this.storage.getItem('deletedList')) || [];
  }

  addArticle(article) {
    this.nodeList.push(article);
  }

  removeArticle(event) {
    const string = event.path[1].firstElementChild.innerText;
    const index = this.nodeList.findIndex(item => item.title === string);
    this.nodeList.splice(index, 1);
    this.deletedList.push(string)
    this.storage.setItem('deletedList', JSON.stringify(this.deletedList))
    this.render();
  }

  render(query = '') {
    const nodeList = this.nodeList.filter(item => item.matches(query));
    this.container.innerHTML = '';
    nodeList.forEach(item => {
      const section = document.createElement('section');
      const titleHtml = document.createElement('h4');
      const authorHtml = document.createElement('h6');
      const button = document.createElement('button');

      titleHtml.innerText = item.title;
      authorHtml.innerText = item.author;
      button.innerText = 'DELETE';
      button.addEventListener('click', event => {
        this.removeArticle(event);
      })

      section.append(titleHtml);
      section.append(authorHtml);
      section.innerHTML += item.text;
      section.append(button);

      this.container.append(section);
    })
  }
}
