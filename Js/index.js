
// document.addEventListener("click", (e) => {
//     if(e.target.id !== "aside" && e.target.id !== "openbar") {
//         removeClass(document.querySelector("#aside"), "active")
//     }
// })

function addClass(element, classes) {
    element.classList.add(classes)
}

function removeClass(element, classes) {
    element.classList.remove(classes)
}



const navBar = document.querySelector(".hidden_bar");
navBar.onclick = function() {
    addClass(document.querySelector(".first_aside"), "active")
}

document.querySelector(".close_aside").onclick = function() {
    removeClass(document.querySelector(".first_aside"), "active")
}

const button_selector = document.querySelector(".button_selector");
let button_selector_a = button_selector.querySelectorAll("a");
button_selector_a.forEach(a => {
    a.addEventListener("click", (e) => {
        e.preventDefault()
        let firstElement = button_selector.firstElementChild;
        let lastElement = button_selector.lastElementChild;
        let tText = e.target.textContent;
        if(tText === "Starter") {
            firstElement.classList.add("active");
            lastElement.classList.remove("active");
            removeClass(document.querySelector(".starter"), "hide");
            addClass(document.querySelector(".pro"), "hide")
        }else {
            lastElement.classList.add("active");
            firstElement.classList.remove("active");
            addClass(document.querySelector(".starter"), "hide");
            removeClass(document.querySelector(".pro"), "hide")
        }
    })
})



const switchSection = document.querySelector(".switch_section");
let emailMarketing = switchSection.firstElementChild;
let emailAPI = emailMarketing.nextElementSibling;
let emailBorder = switchSection.lastElementChild;

emailAPI.onclick = function() {
    // emailBorder.style.left = "100%";
    emailBorder.classList.add("move");
    removeClass(document.querySelector(".result_2"), "hide");
    addClass(document.querySelector(".result"), "hide")
}

emailMarketing.onclick = function() {
    emailBorder.classList.remove("move");
    addClass(document.querySelector(".result_2"), "hide");
    removeClass(document.querySelector(".result"), "hide")
}


const firstHeader = document.querySelector(".first_header");
let scrollH = document.documentElement.scrollHeight;
let clientH = document.documentElement.clientHeight;
window.addEventListener("scroll", e => {
    // console.log("scrollHeight: ", scrollH)
    // console.log("ClientHeight: ", clientH)
    let calc = scrollH - clientH;
    let result = Math.floor((window.scrollY / calc) * 100);
    if(result >= 8) {
        firstHeader.classList.add("boxshadow");
    }else {
        firstHeader.classList.remove("boxshadow")
    }
})


const testButton = document.getElementById("testButton");
const testInput = document.getElementById("testInput");

const EMAILVALIDATIONAPIKEY = "ema_live_vl8r2oRbRNJVH3yb7nyHMyt36DwW3GPPlgzVHRSc"

// import Emailvalidation from '/node_modules/@everapi/emailvalidation-js/index.js'

// `deliverability: 'DELIVERABLE'`

let errormessage = document.getElementById("error");

let emailCounter = 5;

async function makeRequest() {
    if(!testInput.value) {
        errormessage.style.color = "red"
        errormessage.textContent = "Input must not be empty";
    }else {
        errormessage.style.color = "black"
        errormessage.textContent = "Loading...."
        fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=bd67ba6f26024c8ebcc3fae160cbabb3&email=${testInput.value}`)
        .then(res => res.json())
        .then(value => {
            console.log(value)
            const {email, deliverability} = value
            errormessage.style.color = "green"
            errormessage.textContent = "Loaded";
            let div = document.createElement("div")
            div.className = "validity";
            let user_email = `<div>${email}</div>`
            let deliverabile = ``
            if(deliverability !== "DELIVERABLE") {
                deliverabile = `<div class="invalid">Invalid</div>`
            }else {
                deliverabile = `<div>Valid</div>`
            }

            testInput.value = "";
            div.innerHTML += user_email + deliverabile;
            document.querySelector(".email_result").appendChild(div);


            //Functions for the email Counter
            let testText = testButton.innerHTML;
            let emailNaN = null;
            let emailCounter = 5;

            function emailCounting() {
                if(emailNaN === null) {
                    emailCounter--;
                    let timer = "Wait " + `<span>${emailCounter}</span>`;
                    testButton.innerHTML = "";
                    testButton.innerHTML = timer;
                    testButton.setAttribute("disabled", "disabled");
                    testButton.classList.add("grey")
                    if(emailCounter < 0) {
                        emailCounter = 0;
                        testButton.classList.remove("grey")
                        testButton.removeAttribute("disabled");
                        clearTimeout(emailTimeout);
                        testButton.innerHTML = testText;
                        emailNaN = null;
                    }
                }

            }
            let emailTimeout = setInterval(emailCounting, 1000)

            
        }).catch(err => {
            console.log(err)
            errormessage.style.color = "red"
            errormessage.textContent = err.name + ": " + err.message;
        })
    }
}

testButton.onclick = makeRequest;


// async function validateEmail() {    

//     const client = new Emailvalidation('ema_live_vl8r2oRbRNJVH3yb7nyHMyt36DwW3GPPlgzVHRSc');
//     console.log("Loading...")
//     client.info(`bitokig458@wiemei.com`, {
//         catch_all: 0
//     }).then(response => {
//         const {catch_all, did_you_mean, disposable, domain, email, format_valid, free, mx_found, reason, role, score, smtp_check, state, tag, user} = response;
//         let tValue = ""
//         let table = document.getElementById("result_table")
//         tValue +=
//          `<tr><td>catch_all<td><td>${catch_all}</td></tr>
//          <tr><td>did_you_mean</td><td>${did_you_mean}</td></tr>
//          <tr><td>disposable</td><td>${disposable}</td></tr>
//          <tr><td>domain</td><td>${domain}</td></tr>
//          <tr><td>email</td><td>${email}</td></tr>
//          <tr><td>format_valid</td><td>${format_valid}</td></tr>
//          <tr><td>free</td><td>${free}</td></tr>
//          <tr><td>mx_found</td><td>${mx_found}</td></tr>
//          <tr><td>reason</td><td>${reason}</td></tr>
//          <tr><td>role</td><td>${role}</td></tr>`
//         table.innerHTML += tValue;
//         removeClass(table, "hide")
//         console.log(catch_all)
//         console.log(response)
// });
// }





// fetch("https://google.com")
// .then(response => {
//     if(response.ok && response.status == 200) {

//     }
// })







