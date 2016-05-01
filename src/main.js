import Urls from 'my-name-is-url';
import escape from 'escape-html';
import strictUriEncode from 'strict-uri-encode';

const input = document.querySelector('.input');
const output = document.querySelector('.output');

// Check for data in url hash
const defaultText = 'Text to parse for urls.com';
const hashText = decodeURIComponent(location.hash.substring(1));
input.value = hashText || defaultText;

// Check text input for urls
function checkInput() {

  // Check input for urls
  let parsedUrls = Urls(input.value).filter(url => `!urlMatchStart${url}!urlMatchEnd`);

  // Escape all HTML chars
  parsedUrls = escape(parsedUrls);

  // Wrap matched urls in spans
  parsedUrls = parsedUrls
    .replace(/!urlMatchStart/g, '<span class="url">')
    .replace(/!urlMatchEnd/g, '</span>');

  // Add parsed urls to output
  output.innerHTML = `${parsedUrls} `;

  // Save current state in url hash
  location.replace(`#${strictUriEncode(input.value)}`);
}

// Run on page load
checkInput();

// Run every time content is changed
input.addEventListener('input', checkInput);

// Focus input
input.focus()
