import Urls from 'my-name-is-url';

const input = document.querySelector('.input');
const output = document.querySelector('.output');

function checkUrls() {
  const parsedUrls = Urls(input.value).filter(url => `<span class="url">${url}</span>`);
  output.innerHTML = parsedUrls;
}
checkUrls();
input.addEventListener('input', checkUrls);
