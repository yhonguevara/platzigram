let yo = require('yo-yo');
let layout = require('../layout');

let content = yo`
  <div class="timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        
      </div>
    </div>
  </div>
`;

module.exports = layout(content);