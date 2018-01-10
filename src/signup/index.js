let page = require('page');
let empty = require('empty-element');
let template = require('./template');
let title = require('title');

page('/signup', (ctx, next) => {
  title('Platzigram - Sign Up');
  let main = document.getElementById('main-container');
  empty(main).appendChild(template);
});
