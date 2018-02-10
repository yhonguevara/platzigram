let yo = require('yo-yo');

module.exports = (picture) => {

  let el;

  function render(picture) {
    return yo`
      <div class="card ${picture.liked ? 'liked' : ''}"">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${picture.url}">
        </div>
        <div class="card-content">
          <a href="/user/${picture.user.username}" class="card-title">
            <img src="${picture.user.avatar}" class="avatar" />
            <span class="username">${picture.user.username}</span>
          </a>
          <small class="right time">Hace 1 día</small>
          <p>
            <a class="left" href="#" onclick=${like.bind(null, true)}><i class="far fa-heart" aria-hidden="true"></i></a>
            <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fas fa-heart" aria-hidden="true"></i></a>
            <span class="left" likes>${picture.likes} me gusta</span>
          </p>
        </div>
      </div>
    `;
  }

  function like(liked) {
    picture.liked = liked;
    picture.likes += liked ? 1 : -1;
    
    let new_el = render(picture);
    
    yo.update(el, new_el);

    return false;
  }

  el = render(picture);
  return el;
}