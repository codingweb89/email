

const toogleSidebar = document.getElementById("toggleSideBar");
const flexSection = document.querySelector(".flex_section");
let flexImg = flexSection.querySelectorAll("img")
function toggleSideBarFunc() {
    flexSection.classList.toggle("increase4rem");
    let toggleWidth = document.querySelectorAll(".toggle_width");
    toggleWidth.forEach(width => {
        //check if the toggle style display is none;
        let windowDisplay = getComputedStyle(flexSection).display;

        width.classList.toggle("width_increase");
        if(width.classList.contains("width_increase")) {
            document.querySelectorAll(".remove_none").forEach(none => {
                none.classList.remove("none");
            })
            document.querySelectorAll(".dotted").forEach(dots => {
                dots.classList.add("none")
            })
            document.querySelectorAll(".div-parentElement").forEach(divs => {
                divs.classList.add("flex_div")
            })
            flexImg.forEach(imgs => {
                imgs.classList.add("icon-style")
            })
        }else {
            document.querySelectorAll(".remove_none").forEach(none => {
                none.classList.add("none");
            })
            document.querySelectorAll(".dotted").forEach(dots => {
                dots.classList.remove("none")
            })
            document.querySelectorAll(".div-parentElement").forEach(divs => {
                divs.classList.remove("flex_div")
            })
            flexImg.forEach(imgs => {
                imgs.classList.remove("icon-style")
            })
        }
    })
}
toogleSidebar.onclick = toggleSideBarFunc;


const bodyOverLay = document.querySelector(".body-overlay");
const bodyOverLayAppendChild = document.querySelector(".body-overlay-append-div");
const shareUsers = `<aside class="invite-users-aside white-bg position-fixed top-50 left-50 translate-50 padding-3x border-radius-2x transition-0-3s">
<section>
    <div class="margin-bottom"><h1>Invite users</h1></div>    
    <div class="margin-bottom-3x width-500"><p class="opacity-4x">Invite users to your Elastic account for free. These users can access API keys, documentation, and billing details. You can invite as many users as you'd like and move remove them at any time.</p></div>
    <div><input type="email" id="inviteUsersEmail" class="padding-2x width-75-percent"></div>
    <div class="margin-top-2x white-bg border width-fit-content add-user-div"><a href="" class="text-decoration-none black-color">Add another user</a></div>
    <div class="float-right">
        <button type="button" id="closeInviteUsers" class="padding-2x border-radius border-none transparent-bg border-grey cursor-pointer exit-event-mode-x1-y1">Close</button>
        <button type="button" id="inviteUsers" class="padding-2x border-radius border-none root-bg white-color cursor-pointer">Invite</button>
    </div>
</section>
</aside>`


import { ElementAppend, removeClasses, documentRemove, addClasses, toggleClasses } from "../../Exports/export.js";

const inviteUsersAside = document.querySelector(".invite-users-aside");
let documentHTML = document.documentElement;
const rightShiftX1X2 = document.querySelectorAll(".right-shift-x-x2");
rightShiftX1X2.forEach(eachx => {
    const rightShiftX1X2Anchors = eachx.querySelectorAll("a");
    rightShiftX1X2Anchors.forEach(a => {
    a.addEventListener("click", (e) => {
        let currentTarget = e.currentTarget;
        let currentTargetClasslists = currentTarget.classList;
        if(currentTargetClasslists.contains("invite-users-a")) {  
            e.preventDefault(); 
            openOverLay();
            bodyOverLayAppendChild.innerHTML = shareUsers;
            document.getElementById("closeInviteUsers").onclick = exitOverLay;
            
        }else if(currentTargetClasslists.contains("users-notification")) {
            console.log("Users Notification")
        }else if(currentTargetClasslists.contains("users-account")) {
            console.log("Users account")
        }
    })
})
})

const bodyOverLayFirstChild = document.querySelector(".body-overlay-x-x1");

function openOverLay() {
    documentHTML.classList.add("position-fixed");
    documentHTML.classList.add("overflow-hidden");
    documentHTML.classList.add("full-width");
    documentHTML.classList.add("full-height-vh");
    removeClasses(bodyOverLay, "opacity");
    removeClasses(bodyOverLay, "pointer-event-none");
}

function exitOverLay() {
    addClasses(bodyOverLay, ["opacity"]);
    addClasses(bodyOverLay, ["pointer-event-none"]);

    documentHTML.classList.remove("position-fixed");
    documentHTML.classList.remove("overflow-hidden");
    documentHTML.classList.remove("full-width");
    documentHTML.classList.remove("full-height-vh");
}
bodyOverLayFirstChild.onclick = exitOverLay;

const settingTab = document.querySelector(".setting_tab");
const settingTabRelative = document.querySelector(".setting_tab_relatives");
settingTab.onclick = function(e) {
    toggleClasses(settingTabRelative, "none_block");
}


"invite-users-a, users-notification, users-account";


// const divParentElement = document.querySelectorAll(".div-parentElement");
// divParentElement.forEach(divs => {
//     divs.addEventListener("click", (e) => {
//         let textContent = e.currentTarget.textContent.trim();
//         switch(textContent) {
//             case "Dashboard":
//                 let path = "Dashboard\dashboard.html"
//                 console.log("Dashboard clicked")
//                 break;
//             case "Email Verification":
//                 console.log("Email Verification clicked");
//                 break;
//             case "Phone Verification": 
//                 console.log("Phone Verification clicked");
//                 break;
//             case "Vat Verification": 
//                 console.log("Vat Verification clicked");
//                 break;
//             case "IBM Verification": 
//                 console.log("IBM Verification clicked");
//                 break;
//             case "IP Geolocation": 
//                 console.log("IP Geolocation clicked")
//         }
//     })
// })