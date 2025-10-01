console.log("colorbox.js is working");

const boxItems = document.querySelectorAll('.box-item');

boxItems.forEach(item => {
  const box = item.querySelector('.box');
  const button = item.querySelector('button');

  button.addEventListener('click', () => {
    if (box.classList.contains('yellow-box')) {
      box.style.backgroundColor = 'orange';
      box.querySelector('p').textContent = 'YELLOW';
    } 
    else if (box.classList.contains('green-box')) {
      box.style.backgroundColor = 'red';
      box.querySelector('p').textContent = 'GREEN';
    } 
    else if (box.classList.contains('blue-box')) {
      box.style.backgroundColor = 'pink';
      box.querySelector('p').textContent = 'BLUE';
    }
    else if (box.classList.contains('purple-box')) {
      box.style.backgroundColor = 'brown';
      box.querySelector('p').textContent = 'PURPLE';
    }
    else if (box.classList.contains('black-box')) {
      box.style.backgroundColor = 'red';
      box.querySelector('p').textContent = 'BLACK';
    }
    else if (box.classList.contains('red-box')) {
      box.style.backgroundColor = 'blue';
      box.querySelector('p').textContent = 'RED';
    }
  });
});
