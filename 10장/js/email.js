const email = document.querySelector("#userEmail");
const btn = document.querySelector("button");
const result = document.querySelector("#result");

btn.addEventListener("click", function() {
    let username, domain, half;

    if (email.value !== "") {
        username = email.value.split("@")[0];
        half = username.length/2;
        username = username.substring(0, (username.length - half));
        domain = email.value.split("@")[1];
        result.innerText = `${username}...@${domain}`;
        email.value = "";
    }
});