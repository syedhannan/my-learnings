/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  // const response = `sending response from worker ${data}`;
  let sum = 0;
  for (let i = 0; i <= 10000000000; i++) {
    sum = sum + i;
  }
  postMessage(sum);
});
