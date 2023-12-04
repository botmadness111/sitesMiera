function doRegistration() {
    if (document.getElementById("registrationInputPassword").value != "" && document.getElementById("registrationInputLogin").value != "") {
        document.getElementById("registrationInputPassword").value = "";
        document.getElementById("registrationInputLogin").value = "";
        window.location.href = "../../main/Html/index.html";
    }
}

function doRegistrationGoogle() {
    window.location.href = "../../main/Html/index.html";
}