document.addEventListener("DOMContentLoaded",()=>{
	const output = document.getElementById("output");

	output.innerHTML = `<tr><td colspan = "2">Loading...</td></tr>`;

	function createPromise(index){
		return new Promise((resolve,reject)=>{
			const timeTaken = (Math.random()*2+1).toFixed(3);
			setTimeout(()=>{
				resolve({PromiseName:`Promise ${index}`,Timetaken: parseFloat (timeTaken)}),timeTaken * 1000);
		
		});
	}
const Promises =[createPromise(1),createPromise(2),createPromise(3)];	
Promise.all(Promises).then((result)=>{
	output.innerHTML ="";

	let maxTime = 0;

	result.forEach(({PromiseName,Timetaken})=>{
		output.innerHTML +=`<tr><td>${PromiseName}</td><td>${Timetaken.toFixed(3)}</td></tr>`;
		if(time > maxTime) maxTime = time;
	});

	output.innerHTML += `<tr><td>Total</td><td>${maxTime.toFixed(3)}</td></tr>`;
	
  });
});		
		
		


						   
