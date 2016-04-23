import Urls from 'my-name-is-url';

const input = document.querySelector('.input');
const output = document.querySelector('.output');

function checkUrls() {
  const parsedUrls = Urls(input.innerText).filter(url => `<span>${url}</span>`);
  output.innerHTML = parsedUrls;
}
checkUrls();
input.addEventListener('input', checkUrls);
