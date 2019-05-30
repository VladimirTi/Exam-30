'use strict';

class Article {
  constructor(title, author, text) {
    this.title = title;
    this.author = author;
    this.text = text;

  }

  matches(query) {
    return this.title.indexOf(query) > -1 || this.author.indexOf(query) > -1 || this.text.indexOf(query) > -1;
  }
}