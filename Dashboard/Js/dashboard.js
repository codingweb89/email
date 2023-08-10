

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


import { ElementAppend, removeClasses, documentRemove, addClasses, toggleClasses } from "../../Exports/export.js";

const inviteUsersAside = document.querySelector(".invite-users-aside");
let documentHTML = document.documentElement;

const rightShiftX1X2 = document.querySelectorAll(".right-shift-x-x2");
rightShiftX1X2.forEach(eachx => {
    const rightShiftX1X2Anchors = eachx.querySelectorAll("a");
    rightShiftX1X2Anchors.forEach(a => {
    a.addEventListener("click", (e) => {
        e.preventDefault();
        let currentTarget = e.currentTarget;
        let currentTargetClasslists = currentTarget.classList;
        if(currentTargetClasslists.contains("invite-users-a")) {
            documentHTML.classList.add("position-fixed");
            documentHTML.classList.add("overflow-hidden");
            documentHTML.classList.add("full-width");
            documentHTML.classList.add("full-height-vh");
            removeClasses(bodyOverLay, "opacity");
            removeClasses(bodyOverLay, "pointer-event-none");
            removeClasses(inviteUsersAside, ["scale-0"])
        }else if(currentTargetClasslists.contains("users-notification")) {
            console.log("Users Notification")
        }else if(currentTargetClasslists.contains("users-account")) {
            console.log("Users account")
        }
    })
})
})


const bodyOverLayFirstChild = document.querySelector(".body-overlay-x-x1");
bodyOverLayFirstChild.onclick = function() {
    addClasses(bodyOverLay, ["opacity"]);
    addClasses(bodyOverLay, ["pointer-event-none"]);

    documentHTML.classList.remove("position-fixed");
    documentHTML.classList.remove("overflow-hidden");
    documentHTML.classList.remove("full-width");
    documentHTML.classList.remove("full-height-vh");
}


const exitEventModex1y1 = document.querySelectorAll(".exit-event-mode-x1-y1");
exitEventModex1y1.forEach(close => {
    close.addEventListener("click", e => {
        addClasses(bodyOverLay, ["opacity"]);
        addClasses(bodyOverLay, ["pointer-event-none"]);

        documentHTML.classList.remove("position-fixed");
        documentHTML.classList.remove("overflow-hidden");
        documentHTML.classList.remove("full-width");
        documentHTML.classList.remove("full-height-vh");
    } )
})


const settingTab = document.querySelector(".setting_tab");
const settingTabRelative = document.querySelector(".setting_tab_relatives");

settingTab.onclick = function(e) {
    toggleClasses(settingTabRelative, "none_block");
}


"invite-users-a, users-notification, users-account"