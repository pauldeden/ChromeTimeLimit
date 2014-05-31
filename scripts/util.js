function get(key, callback) {
    chrome.runtime.sendMessage({func: "get", "key": key}, function(response) {
        callback(response.response);
    });
}

function save(key, value) {
    chrome.runtime.sendMessage({func: "save", "key": key, "value": value}, function(response) {});
}

function checkLogin() {
    get("password", function(password) {
        if (!password) password = "9026";
        var login_password = document.getElementById("login_password").value;
        if (login_password === password) {
            get("timerMinutes", function(timerMinutes) {
                get("active", function(active) {
                    setFormValue("password", password);
                    setFormValue("timerMinutes", timerMinutes);
                    document.getElementById("active").checked = (active === "true") ? true : false;
                    document.getElementById("login_page").style.display = "none";
                    document.getElementById("real_page").style.display = "block";
                });
            });
        }
    });
}

function setFormValue(id, value) {
    document.getElementById(id).value = value;
}

function getFormValue(id) {
    return document.getElementById(id).value;
}

function saveData() {
    var password = getFormValue("password");
    var timerMinutes = getFormValue("timerMinutes");
    var active = document.getElementById("active").checked;
    save("password", password);
    save("timerMinutes", timerMinutes);
    save("active", active);
    var startTime = new Date();
    save("startTime", startTime.toString());
    document.getElementById("message").style.display = "block";
}

