console.log("colorbox.js is working");

const boxItems = document.querySelectorAll('.box-item');

boxItems.forEach(item => {
  const box = item.querySelector('.box');
  const button = item.querySelector('button');

  button.addEventListener('click', () => {
    if (box.classList.contains('blue-box')) {
      box.classList.remove('blue-box');
      box.classList.add('red-box');
      box.style.backgroundColor = 'red';
      box.querySelector('p').textContent = 'RED';
    } 
    else if (box.classList.contains('red-box')) {
      box.classList.remove('red-box');
      box.classList.add('blue-box');
      box.style.backgroundColor = 'blue';
      box.querySelector('p').textContent = 'BLUE';
    }
    else if (box.classList.contains('green-box')) {
      box.classList.remove('green-box');
      box.classList.add('black-box');
      box.style.backgroundColor = 'black';
      box.querySelector('p').textContent = 'BLACK';
    } 
    else if (box.classList.contains('black-box')) {
      box.classList.remove('black-box');
      box.classList.add('green-box');
      box.style.backgroundColor = 'green';
      box.querySelector('p').textContent = 'GREEN';
    }
    else if (box.classList.contains('yellow-box')) {
      box.classList.remove('yellow-box');
      box.classList.add('purple-box');
      box.style.backgroundColor = 'purple';
      box.querySelector('p').textContent = 'PURPLE';
      box.style.color = 'white'; // text color fix
    } 
    else if (box.classList.contains('purple-box')) {
      box.classList.remove('purple-box');
      box.classList.add('yellow-box');
      box.style.backgroundColor = 'yellow';
      box.querySelector('p').textContent = 'YELLOW';
      box.style.color = 'black'; // text color fix
    }

  });
});
