
const table = document.getElementById("table");

function createDeleteOnHover() {
	const tableBody = table.querySelector("tbody");
	const tableBodyTr = tableBody.querySelectorAll("tr");
	let div = document.createElement("div");
	div.className = "table-delete";
	div.innerHTML = `<button><i class="fa fa-trash-o fa-lg red-color cursor-pointer"></i></button>`;

	tableBodyTr.forEach(tr => {
		tr.addEventListener("mouseover", e => {
			let currentTr = e.currentTarget;
			currentTr.append(div);
			div.onclick = e => {
				currentTr.remove();
				console.log("Clicked")
			}
		})
	
		tr.addEventListener("mouseleave", e => {
			let currentTr = e.currentTarget;
			currentTr.removeChild(div);
		})
	})
}


let process = document.querySelector(".process");
function checkEmailValidity() {
	process.style.display = "block";
	process.style.color = "black";
	const inputVerifier = document.getElementById("input-verifier");
	if(!inputVerifier.value) return;
	process.textContent = "Loading..."
	const emailTarget = inputVerifier.value;
	const url = "https://api.apilayer.com/email_verification/" + emailTarget;
	const myHeaders = new Headers();
	myHeaders.append("apikey", "qviLRBxh3MBJIAdL1YS70YoVktDgIFm9");

	const options = {
  		method: 'GET',
  		redirect: 'follow',
  		headers: myHeaders
	};
	newEmailValidator(url, options).catch(err => {
		process.textContent = "ERROR: " + err;
		process.style.color = "red";

		document.getElementById("fetch-acess").textContent = "FALSE";
		document.getElementById("fetch-error").textContent = "REQUEST FAILED";
		document.getElementById("fetch-error").style.color = "red";

		setTimeout(e => {
			process.style.display = "none";
			process.style.color = "black";
		}, 5000);
	})
}


async function newEmailValidator(url, options) {
    const response = await fetch(url, options);
	if(response.ok) {
		const result = await response.json();

	console.log(result);
	document.getElementById("fetch-acess").textContent = "TRUE";
	document.getElementById("fetch-error").textContent = "NO ERROR";
	process.textContent = "Loaded";
	process.style.color = "green";
	setTimeout(e => {
		process.style.display = "none";
		process.style.color = "black";
	}, 5000);
	const tableBody = table.querySelector("tbody");
	const { is_disposable, email, user, mx_records, syntax_valid, domain, score } = result;
		let tr = tableBody.insertRow(table.length);
		let cell0 = tr.insertCell(0);
		let cell1 = tr.insertCell(1);
		let cell2 = tr.insertCell(2);
		let cell3 = tr.insertCell(3);
		let cell4 = tr.insertCell(4);
		let cell5 = tr.insertCell(5);
		let cell6 = tr.insertCell(6);
		
		//assign values;
		cell0.textContent = email;
		cell1.textContent = is_disposable;
		cell2.textContent = user;
		cell3.textContent = mx_records;
		cell4.textContent = syntax_valid;
		cell5.textContent = domain;
		cell6.textContent = score;

		//call delete on hover
		createDeleteOnHover();
	}else {
		process.textContent = "ERROR:";
		process.style.color = "red";

		document.getElementById("fetch-acess").textContent = "FALSE";
		document.getElementById("fetch-error").textContent = "REQUEST FAILED";
		document.getElementById("fetch-error").style.color = "red";

		setTimeout(e => {
			process.style.display = "none";
			process.style.color = "black";
		}, 5000);
	}
}


const checkValidityBtn = document.getElementById("checkValidity");
checkValidityBtn.addEventListener("click", e => {
	e.preventDefault();
	checkEmailValidity();
	document.getElementById("input-verifier").value = "";
	checkValidityBtn.setAttribute("disabled", "true");
	function runFetchTime() {
		checkValidityBtn.removeAttribute("disabled");
	}
	setTimeout(runFetchTime, 5000)
})
let footerArray = [
	{
		title: "Phone Verification",
		image: "../images/phone-icon.png",
		description: "This validate, and check if a phone number is valid",
		anchor: "Verify Phone"
	},
	{
		title: "Vat Verification",
		image: "../images/tag-icon.png",
		description: "This verifies your vat information",
		anchor: "Verify Vat"
	},
	{
		title: "IBM Verification",
		image: "../images/bank-icon.png",
		description: "This verifies users bank IBM to check validity",
		anchor: "Verify IBM"
	}
]
for(var i = 0; i < footerArray.length; i++) {

	//create document element
	let h3 = document.createElement("h3");
	let img = document.createElement("img");
	let p = document.createElement("p");
	let a = document.createElement("a");

	a.href = "";

	//assign values to created elements
	h3.textContent = footerArray[i].title;
	img.src = footerArray[i].image;
	p.textContent = footerArray[i].description;
	a.textContent = footerArray[i].anchor;

	let div = document.createElement("div");
	div.append(h3, img, p, a);
	document.querySelector(".selecting-apis").appendChild(div)
}

function addTableRow() {
	const tableBody = table.querySelector("tbody");
	let tableRow = tableBody.insertRow(table.length);

		let cell0 = tableRow.insertCell(0)
		let cell1 = tableRow.insertCell(1);
		let cell2 = tableRow.insertCell(2);
		let cell3 = tableRow.insertCell(3);
		let cell4 = tableRow.insertCell(4);
		let cell5 = tableRow.insertCell(5);
		let cell6 = tableRow.insertCell(6);
		
		//assign values;
		cell0.textContent = "email";
		cell1.textContent = "is_disposable";
		cell2.textContent = "user";
		cell3.textContent = "mx_records";
		cell4.textContent = "syntax_valid";
		cell5.textContent = "domain";
		cell6.textContent = "score";

		//call delete on hover
		createDeleteOnHover();

		//change cursor on hover


		//apply attribute contenteditable;
		let tableCell = tableRow.querySelectorAll("td");
		tableCell.forEach(td => {
			td.setAttribute("contenteditable", "true");
		})

		console.log(tableRow)
}
document.getElementById("AddRow").onclick = addTableRow;



function saveTableRow() {
	const tableBody = table.querySelector("tbody");
	console.log(tableBody)
	const tableCell = tableBody.querySelectorAll("td");
	tableCell.forEach(td => {
		td.removeAttribute("contenteditable")
	})
	let sessionSave = sessionStorage.setItem("tbody", JSON.stringify(tableBody.innerHTML));

	tableBody.innerHTML = JSON.parse(sessionStorage.getItem("tbody"))
	window.location.reload();
	addTableValue4rmLocalStorage()

	// window.addEventListener("load", e => {
	// 	console.log(e)
	// 	console.log("LOADED")
	// 	console.log(JSON.parse(sessionStorage.getItem("tbody")))
	// })
}
document.getElementById("saveRow").onclick = saveTableRow;


function addTableValue4rmLocalStorage() {
	const tableBody = table.querySelector("tbody");
	tableBody.innerHTML = JSON.parse(sessionStorage.getItem("tbody"))
}
addTableValue4rmLocalStorage();

createDeleteOnHover();