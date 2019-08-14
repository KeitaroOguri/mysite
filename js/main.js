'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    
    const n = Math.random();
    if (n < 0.15) {
      btn.textContent = '$100'; // 5%
    } else if (n < 0.35) {
      btn.textContent = '$20'; // 15%
    } else {
      btn.textContent = '$1'; // 80%
    }
  });
  btn.addEventListener('mousedown', () => {
    btn.classList.add('pressed');
  });
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pressed');
  });
}