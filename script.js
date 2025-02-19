// Get the output element
let output = document.getElementById('output');

// Show the initial loading state
output.innerHTML = `<tr id="loading"><td colspan="2">Loading...</td></tr>`;

// Create promises with random completion times
let promises = [1, 2, 3].map(i => 
  new Promise(resolve => {
    let time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
    setTimeout(() => resolve({ name: `Promise ${i}`, time }), time * 1000);
  })
);

// When all promises are resolved, update the table
Promise.all(promises).then(results => {
  // Clear the loading row
  output.innerHTML = '';

  // Calculate the maximum time (instead of total time)
  let maxTime = Math.max(...results.map(result => result.time));

  // Populate the table with each promise result
  results.forEach(result => {
    output.innerHTML += `<tr><td>${result.name}</td><td>${result.time.toFixed(3)}</td></tr>`;
  });

  // Add the "Total" row with the maximum time
  output.innerHTML += `<tr><td><strong>Total</strong></td><td>${maxTime.toFixed(3)}</td></tr>`;
});

