var page = require('page');

var main = document.getElementById('main-container');

page('/', (ctx, next) => {
  main
});

page('/signup', (ctx, next) => {

});


// page('', () => {});
// 
page.start();