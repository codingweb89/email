



let params = {};

let regExp = /([^&=]+)=([^&]*)/g, m


while(m = regExp.exec(location.href)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2])
}

if(Object.keys(params).length > 0) {
    localStorage.setItem("authInfo", JSON.stringify(params))
}

window.history.pushState({},document.title,"/" + "Dashboard" + "/" + "dashboard.html");


let info = JSON.parse(localStorage.getItem("authInfo"));

console.log(JSON.parse(localStorage.getItem("authInfo")))
console.log(info)




function logOut() {
    fetch("https://oauth2.googleapis.com/revoke?token=" + info.access_token, 
        {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }
    )
    .then(data => {
        location.href = "http://127.0.0.1:5501/index.html"
    })
}



document.getElementById("logout").onclick = logOut;


"http://127.0.0.1:5501/Dashboard/dashboard.html"