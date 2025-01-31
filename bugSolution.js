const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(err => {
    console.error(err);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// Placeholder for asynchronous operation
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate success or failure
    const success = Math.random() < 0.8; // 80% chance of success
    setTimeout(() => {
      if (success) {
        resolve({ message: 'Success!' });
      } else {
        reject(new Error('Simulated Error'));
      }
    }, 1000);
  });
}