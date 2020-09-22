'use strict';

(function () {})();

function adjustsize() {
  [].forEach.call(
    document.getElementsByClassName('fullscreen-on-load'),
    function (el) {
      el.style.height = window.innerHeight + 'px';
    }
  );
}

window.onload = function () {
  adjustsize();
};

window.onresize = function () {
  adjustsize();
};
