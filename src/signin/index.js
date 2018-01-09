let page = require('page');
let empty = require('empty-element');
let template = require('./template');

page('/signin', (ctx, next) => {
  let main = document.getElementById('main-container');
  empty(main).appendChild(template);
});