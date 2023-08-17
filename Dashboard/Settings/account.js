let documentHTML = document.documentElement;

const bodyOverlay = document.querySelector(".body-overlay");
const bodyOverlayAppendDiv = document.querySelector(".body-overlay-append-div");

function changingEmail() {
    addBodyOverlay();
    bodyOverlayAppendDiv.innerHTML = `<aside class="invite-users-aside white-bg position-fixed top-50 left-50 translate-50 padding-3x border-radius-2x transition-0-3s">
    <section class="account-section">
        <div class="margin-bottom"><h1>Change your email</h1></div>   
        <div class="margin-bottom-3x"><p>Change your email by entering the information below</p></div> 
        <div class="accounts-divs"><label>Your new email</label><div><input type="email"></div></div>
        <div class="accounts-divs"><label>Confirm your new email</label><div><input type="text" value="youremail@gmail.com"></div></div>
        <div class="accounts-divs"><label>Enter your password</label><div><input type="password" value="userpassword"></div></div>
        <div class="account-button-div"><button id="closeChangeEmail">Close</button><button>Send email</button></div>
    </section>
</aside>`;
document.getElementById("closeChangeEmail").onclick = removeBodyOverlay;
}
document.getElementById("changeEmail").onclick = changingEmail;


function addBodyOverlay() {
    documentHTML.classList.add("position-fixed");
    documentHTML.classList.add("overflow-hidden");
    documentHTML.classList.add("full-width");
    documentHTML.classList.add("full-height-vh");

    bodyOverlay.classList.remove("opacity", "pointer-event-none");
}
function removeBodyOverlay() {
    documentHTML.classList.remove("position-fixed");
    documentHTML.classList.remove("overflow-hidden");
    documentHTML.classList.remove("full-width");
    documentHTML.classList.remove("full-height-vh");

    bodyOverlay.classList.add("opacity", "pointer-event-none");
}


function changingPassword() {
    addBodyOverlay();
    bodyOverlayAppendDiv.innerHTML = `<aside class="invite-users-aside white-bg position-fixed top-50 left-50 translate-50 padding-3x border-radius-2x transition-0-3s">
    <section class="password-section">
       <div><h1>Change your password</h1></div>
       <div><br></div>
       <div><p>You are going to receive a password reset link to your email</p>
       <span>youremail@gmail.com</span></div>
       <div><br></div>
       <div class="float-right"><button id="closeChangingPassword">Close</button><button>Send email</button></div>
    </section>
</aside>`;
    document.getElementById("closeChangingPassword").onclick = removeBodyOverlay;
}
document.getElementById("changePassword").onclick = changingPassword;