//your JS code here. If required.
const output = document.getElementById("output");

function createPromise(num){
	const time = (Math.random()*2+1);
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(time);
		},time * 1000)
	});
}

const p1 = createPromise(1);
const p2 = createPromise(2);
const p3 = createPromise(3);
Promise.all([p1,p2,p3]).then(values=>{
	output.innerHTML = "";

	values.forEach((time,index)=>{
		const row = document.createElement("tr");

		const nameCell = document.createElement("td");
		nameCell.textContent = `Promise ${index+1}`;

		const timeCell = document.createElement("td");
		timeCell.textContent = time.toFixed(3);

		row.appendChild(nameCell);
		row.appendChild(timeCell);
		output.appendChild(row);
	});
	const totalRow = document.createElement("tr");

	const totalCell = document.createElement("td");
	totalCell.textContent = "Total";

	
    const totalTime = document.createElement("td");
    totalTime.textContent = Math.max(...values).toFixed(3);
	
	totalRow.appendChild(totalCell);
    totalRow.appendChild(totalTime);
    output.appendChild(totalRow);
});