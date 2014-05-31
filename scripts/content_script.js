function milli2min(milli) {
    return milli / 1000 / 60;
}

function blockPage() {
    document.head.innerHTML = "";
    document.body.innerHTML = "<center><h3>Time's up!  Go and clean something. :-)</h3></center>";
}

function checkPage() {
    get("timerMinutes", function(res) {
        var timerMinutes = Number(res);
        if (!timerMinutes) timerMinutes = 30;
        get("active", function(res) {
            var active = (res === "true") ? true : false;
            if (active) {
                get("startTime", function(res) {
                    var startTime = new Date(res);
                    var currentTime = new Date();
                    if (milli2min(currentTime - startTime) >= timerMinutes) {
                        blockPage();
                    }
                });
            }
        });
    });
}

checkPage(); // so we don't wait a minute before running it the first time.
var stopKey = setInterval(function() {
    checkPage();
}, 60000);

