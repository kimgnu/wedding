function addClickListenerOnImage() {
  [].forEach.call(document.getElementsByClassName('year-photo'), function (el) {
    el.addEventListener('click', function (event) {
      location.href = el.src;
    });
  });
}

function adjustsize() {
  [].forEach.call(
    document.getElementsByClassName('fullscreen-on-load'),
    function (el) {
      el.style.height = window.innerHeight + 'px';
    }
  );
}

function changeButtonsVisiblity() {
  let information = document.getElementById('information');
  let buttons = document.getElementById('buttons');
  if (
    document.body.scrollTop >
      information.offsetTop + information.scrollHeight ||
    document.documentElement.scrollTop >
      information.offsetTop + information.scrollHeight
  ) {
    buttons.style.display = 'block';
  } else {
    buttons.style.display = 'none';
  }
}

function scrollToTop() {
  let source = document.documentElement.scrollTop;
  if (source === 0) return;
  let delta = source / 10;
  let i = source - delta;
  let interval = setInterval(function () {
    if (i < delta) i = 0;
    window.scrollTo(0, i);
    i -= delta;
    if (i < 0) clearInterval(interval);
  }, 20);
}

function scrollToBottom() {
  let footerTop = document.getElementById('footer').offsetTop;
  let source = document.documentElement.scrollTop;
  if (source >= footerTop) return;
  let delta = (footerTop - source) / 10;
  let i = source + delta;
  let interval = setInterval(function () {
    if (i + delta > footerTop) i = footerTop;
    window.scrollTo(0, i);
    i += delta;
    if (i > footerTop) clearInterval(interval);
  }, 20);
}

window.onload = function () {
  adjustsize();
};

window.onresize = function () {
  adjustsize();
};

window.onscroll = function () {
  changeButtonsVisiblity();
};
