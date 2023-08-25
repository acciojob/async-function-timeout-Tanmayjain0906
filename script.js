
let text;
let delay;

let button = document.getElementById("btn");
let div = document.getElementById("output");

button.addEventListener("click", () => {

	text = document.getElementById("text").value;
	delay = document.getElementById("delay").value;

	async function getData()
		{
			await new Promise(resolve => setTimeout(resolve, delay*1000));
            div.innerText = text;	
		}
	getData();
})