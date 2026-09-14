var view = document.querySelector(".viewport");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
function step() {
  var card = view.querySelector(".web-card");
  var gap = parseFloat(getComputedStyle(view.firstElementChild).columnGap) || 0;
  return card.getBoundingClientRect().width + gap;
}
function render() {
  var max = view.scrollWidth - view.clientWidth;
  prev.hidden = view.scrollLeft <= 2;
  next.hidden = view.scrollLeft >= max - 2;
}
prev.addEventListener("click", function () { view.scrollBy({left: -step()}); });
next.addEventListener("click", function () { view.scrollBy({left: step()}); });
view.addEventListener("scroll", render, {passive: true});
window.addEventListener("resize", render);
render();
