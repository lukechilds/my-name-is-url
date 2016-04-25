import Urls from 'my-name-is-url';
import escape from 'escape-html';

const input = document.querySelector('.input');
const output = document.querySelector('.output');

function checkUrls() {
  const parsedUrls = Urls(escape(input.value)).filter(url => `<span class="url">${url}</span>`);
  output.innerHTML = `${parsedUrls} `;
}
checkUrls();
input.addEventListener('input', checkUrls);
