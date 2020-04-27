const form = document.querySelector('.form'),
  comparePrice = form.querySelector('.compare-price'),
  gukbapPrice = form.querySelector('.gukbap-price'),
  button = form.querySelector('button'),
  description = document.querySelector('.description');

function calcPrice(p) {
  result = parseInt(p / gukbapPrice.value);
  description.textContent = `야! 그런 걸 왜 사냐? 그 돈이면 뜨끈~하고 든든~한 국밥 ${result}그릇은 사먹을 수 있겠다!`;
  description.classList.toggle('showing');
}

function handleSubmit(event) {
  event.preventDefault();
  let price = comparePrice.value;
  if (!gukbapPrice.value) {
    return alert('왜 국밥 가격 안 적냐?');
  }
  if (!price) {
    return alert('왜 물건 가격 안 적냐?');
  }
  calcPrice(price);
}

function init() {
  form.addEventListener('submit', handleSubmit);
}

init();
