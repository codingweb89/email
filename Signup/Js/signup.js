





function emailSignin() {
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

    let form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", oauth2Endpoint);

    let params = {
        "client_id": "595298382705-bi3j8u8he7og8lnr9c75btqdgi04kq28.apps.googleusercontent.com",
        "redirect_uri": "http://127.0.0.1:5501/Dashboard/dashboard.html",
        "response_type": "token",
        "scope": "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly",
        "include_granted_scopes": "true",
        "state": "passed-through-value"
    };

    for(var p in params) {
        let input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", p);
        input.setAttribute("value", params[p]);
        form.appendChild(input);
    }

    document.body.appendChild(form)

    form.submit()
}



document.querySelector(".google_section").onclick = emailSignin;


const showpassword = document.getElementById("showpassword");
const passwordInput = document.getElementById("password");

function showPasswordFunc() {
    if(passwordInput.type === "password") {
        passwordInput.type = "text";
    }else {
        passwordInput.type = "password"
    }
}

showpassword.onclick = showPasswordFunc;

