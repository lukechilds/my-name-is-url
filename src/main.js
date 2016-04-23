import Urls from 'my-name-is-url';

const testText = document.querySelector('.test-text');

testText.addEventListener('input', () => {
  const urls = Urls(testText.innerText).get();
  console.log(urls);
});
