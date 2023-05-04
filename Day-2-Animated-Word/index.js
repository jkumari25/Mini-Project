const swapChars = ['o', 'o', 'o', 'o', 'o', 'o', '😇', '🥳', '🤩',  '🤯', '😃', '🤪', '🦖'];

const swapClass = 'letter--swapped';
const animationSpeed = 500;
const initialDelay = 2000;

const os = document.querySelectorAll('.letter--o');

function swapCharacters() {
  os.forEach((o) => {
    const newChar = getRandomFromArray(swapChars)
    o.textContent = newChar;
    newChar === 'o' 
      ? o.classList.remove(swapClass)
      : o.classList.add(swapClass);
  });
  setTimeout(swapCharacters, animationSpeed);
}


function getRandomFromArray(items) {
  return items[Math.floor(Math.random() * items.length)];
}
setTimeout(swapCharacters, initialDelay);