console.log('start');

setTimeout(() => {
  console.log('Timeout selama 3 detik');
}, 3000);

console.log('End');

let count = 0;

const id = setInterval(() => {
  count++;
  console.log('Tick', count);

  if (count === 3) {
    clearInterval(id);
  }
}, 1000);
