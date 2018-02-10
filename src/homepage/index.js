let page = require('page');
let empty = require('empty-element');
let template = require('./template');
let title = require('title');

page('/', (ctx, next) => {
  title('Platzigram');

  let pictures = [
    {
      user: {
        username: "yhonguevara",
        avatar: "https://scontent.faep4-1.fna.fbcdn.net/v/t1.0-9/11781765_10207436469129109_3826252425984368444_n.jpg?oh=1263dfee30e9acea06ab26552cee15f4&oe=5B159922"
      },
      url: "http://materializecss.com/images/sample-1.jpg",
      likes: 512,
      liked: true
    },
    {
      user: {
        username: "anavasquez",
        avatar: "https://scontent.faep4-1.fna.fbcdn.net/v/t1.0-9/11781765_10207436469129109_3826252425984368444_n.jpg?oh=1263dfee30e9acea06ab26552cee15f4&oe=5B159922"
      },
      url: "http://materializecss.com/images/sample-1.jpg",
      likes: 1024,
      liked: true
    },
  ];

  let main = document.getElementById('main-container');
  empty(main).appendChild(template(pictures));
});
