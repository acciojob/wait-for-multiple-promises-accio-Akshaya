let promises = [1, 2, 3].map(i => new Promise(resolve => {
  let time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
  setTimeout(() => resolve({ name: `Promise ${i}`, time }), time * 1000);
}));

Promise.all(promises).then(results => {
  let output = document.getElementById('output');

  if (!output) {
    console.error("❌ Element with id 'output' not found!");
    return; // Exit if the element is missing
  }

  output.innerHTML = ''; // Clear the "Loading..." row

  // Calculate the total time (sum of all promise times)
  let totalTime = results.reduce((sum, result) => sum + result.time, 0);

  // Populate the table with each promise result
  results.forEach(result => {
    output.innerHTML += `<tr><td>${result.name}</td><td>${result.time.toFixed(3)}</td></tr>`;
  });

  // Append the total time row
  output.innerHTML += `<tr><td><strong>Total</strong></td><td>${totalTime.toFixed(3)}</td></tr>`;
});


  // Add the total row with the correct sum
  output.innerHTML += `<tr><td>Total</td><td>${totalTime.toFixed(3)}</td></tr>`;
});
