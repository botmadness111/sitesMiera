function doRegistration() {
    if (document.getElementById("registrationInputPassword").value != "" && document.getElementById("registrationInputLogin").value != "") {
        document.getElementById("registrationInputPassword").value = "";
        document.getElementById("registrationInputLogin").value = "";
        window.location.href = "/sitesMiera/praca/main/Html/main.html";
    }
}

function doRegistrationGoogle() {
    window.location.href = "/sitesMiera/praca/main/Html/main.html";
}