let yo = require('yo-yo');
let landing = require('../landing');

let box = yo`
  <div class="col s12 m7">
    <div class="row">
      <div class="signup-box">
        <h1 class="platzigram">Plazigram</h1>
        <form class="signup-form">
          <div class="selection">
            <a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
            <a class="btn btn-fb hide-on-med-and-up"><i class="fab fa-facebook" area-hidden="true"></i> Iniciar sesión</a>
          </div>
          <div class="divider"></div>
          <div class="section">
            <input type="text" name="username" placeholder="Nombre de usuario" />
            <input type="password" name="password" placeholder="Contraseña" />
            <button class="btn waves-effect waves-light btn-signup" type="submit">Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="login-box">
        ¿No tienes una cuenta? <a href="/signup">Regístrate</a>
      </div>
    </div>
  </div>
`;

module.exports = landing(box);
