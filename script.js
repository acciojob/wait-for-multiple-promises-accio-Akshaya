Step 1: Create the promises
let promises = [1, 2, 3].map(i => new Promise(resolve => {
  let time = Math.random() * 2 + 1; // random time between 1 and 3 seconds
  setTimeout(() => resolve({name: `Promise ${i}`, time}), time * 1000);
}));

// Step 2: Wait for all promises to resolve
Promise.all(promises).then(results => {
  // Step 3: Populate the table
  let output = document.getElementById('output');
  output.innerHTML = ''; // remove "Loading..." row
  
  // Step 4: Calculate the total time
  let maxTime = Math.max(...results.map(result => result.time));
  
  // Step 5: Update the HTML
  results.forEach(result => {
    output.innerHTML += `<tr><td>${result.name}</td><td>${result.time.toFixed(3)}</td></tr>`;
  });
  output.innerHTML += `<tr><td>Total</td><td>${maxTime.toFixed(3)}</td></tr>`;
});