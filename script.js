
// Visit the page
cy.visit(baseUrl + "/main.html");

// Check if the loading text appears
cy.get("tr#loading", { timeout: 10000 }).should("be.visible");
cy.get("tr#loading td").invoke("text").should("equal", "Loading...");

// Create a Promise that simulates the asynchronous operation
let promises = [1, 2, 3].map(i => 
  new Promise(resolve => {
    let time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
    setTimeout(() => resolve({ name: `Promise ${i}`, time }), time * 1000);
  })
);

// Wrap the Promise with Cypress to wait for all promises to resolve
cy.wrap(Promise.all(promises)).then(results => {
  
  // Ensure the loading row is no longer present
  cy.get("tr#loading").should("not.exist");

  // Validate the number of rows in the output table (3 promises + 1 total = 4)
  cy.get("#output").find("tr").should("have.length", 4);

  // Iterate through each row and validate the results
  cy.get("#output > tr > td:nth-child(1)").each(($elm, index) => {
    const text = $elm.text();

    // Validate each Promise row
    if (text.includes("Promise")) {
      cy.get("#output > tr > td:nth-child(1)")
        .eq(index)
        .next()
        .invoke("text")
        .then(parseFloat)
        .should("be.within", 1, 3);
    }

    // Validate the "Total" row
    if (text.includes("Total")) {
      cy.get("#output > tr > td:nth-child(1)")
        .eq(index)
        .next()
        .invoke("text")
        .then(parseFloat)
        .should("be.within", 3, 9);
    }
  });
});

  // Add the total row with the correct sum
  output.innerHTML += `<tr><td>Total</td><td>${totalTime.toFixed(3)}</td></tr>`;
});
