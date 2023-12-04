function doRegistration() {
    if (document.getElementById("registrationInputPassword").value != "" && document.getElementById("registrationInputLogin").value != "") {
        document.getElementById("registrationInputPassword").value = "";
        document.getElementById("registrationInputLogin").value = "";
        window.location.href = "../../index.html";
    }
}

function doRegistrationGoogle() {
    window.location.href = "../../index.html";
}