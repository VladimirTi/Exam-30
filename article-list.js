'use strict';

class ArticleList {
  constructor(container) {
    this.container = container;
    this.nodeList = [];
  }

  addArticle(article) {
    this.nodeList.push(article)
  }

  removeArticle(article) {
    console.log(article)

  }

  render(query) {
    this.nodeList.forEach(item => {
      
      const section = document.createElement('section');
      const titleHtml = document.createElement('h4')
      const authorHtml = document.createElement('h6')
      const button = document.createElement('button')

      titleHtml.innerText = item.title;
      authorHtml.innerText = item.author;
      button.innerText = 'DELETE'
      button.setAttribute('onclick', `ArticleList.removeArticle('${item.title}')`)
      

      section.append(titleHtml)
      section.append(authorHtml)
      section.innerHTML += item.text
      section.append(button)

      console.log(section)
      this.container.append(section)
    })
  }
}

