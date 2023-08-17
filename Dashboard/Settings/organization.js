

const documentHTML = document.documentElement;
const bodyOverLay = document.querySelector(".body-overlay");
const bodyOverlayAppendDiv = document.querySelector(".body-overlay-append-div");
function addBodyOverlay() {
    documentHTML.classList.add("position-fixed");
    documentHTML.classList.add("overflow-hidden");
    documentHTML.classList.add("full-width");
    documentHTML.classList.add("full-height-vh");

    bodyOverLay.classList.remove("opacity", "pointer-event-none");
}
function removeBodyOverlay() {
    documentHTML.classList.remove("position-fixed");
    documentHTML.classList.remove("overflow-hidden");
    documentHTML.classList.remove("full-width");
    documentHTML.classList.remove("full-height-vh");

    bodyOverLay.classList.add("opacity", "pointer-event-none");
}





const inviteUsersBtn = document.getElementById("invite-users-btn");
const inviteUserString = `<aside class="invite-users-aside white-bg position-fixed top-50 left-50 translate-50 padding-3x border-radius-2x transition-0-3s">
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

function inviteUsers() {
    addBodyOverlay();
    bodyOverlayAppendDiv.innerHTML = inviteUserString;
    document.getElementById("closeInviteUsers").onclick = removeBodyOverlay;
}

inviteUsersBtn.onclick = inviteUsers;





