let yo = require('yo-yo');

module.exports = (content) => {
  return yo`
  <div>
    <nav class="header">
      <div class="nav-wrapper">
        <div class="container">
          <div class="row">
            <div class="col s12 m6 offset-m1">
              <a href="/" class="brand-logo platzigram">Platzigram</a>
            </div>
            <div class="col s2 push-s9 m2 push-m3">
              <a href="#" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
                <i class="fa fa-user" area-hidden="true"></i>
              </a>
              <ul id="drop-user" class="dropdown-content">
                <li><a href="#">Salir</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="content">
      ${content}
    </div>
  </div>
`;
}