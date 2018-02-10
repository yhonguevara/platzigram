let yo = require('yo-yo');
let layout = require('../layout');
let picture = require('../picture-card');

let content = (pictures) => {
  return yo`
    <div class="timeline">
      <div class="row">
        <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${pictures}
        </div>
      </div>
    </div>
`;

}
module.exports = layout(content);