window.onload = function() {
    var button = document.getElementById("login_form");
    button.addEventListener('submit', function(event) {
        checkLogin();
        event.preventDefault();
    });
    var button = document.getElementById("save_button");
    button.addEventListener('click', function(event) {
        saveData();
    });
}
