import Urls from 'my-name-is-url';

const testText = document.querySelector('.test-text');

function checkUrls() {
  const urls = Urls(testText.innerText).get();
  console.log(urls);
}
checkUrls();
testText.addEventListener('input', checkUrls);
