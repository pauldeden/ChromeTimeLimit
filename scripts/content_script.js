function get(key, callback) {
    chrome.runtime.sendMessage({func: "get", "key": key}, function(response) {
        callback(response.response);
    });
}

function save(key, value) {
    chrome.runtime.sendMessage({func: "save", "key": key, "value": value}, function(response) {});
}

function milli2min(milli) {
    return milli / 1000 / 60;
}

function blockPage() {
    document.head.innerHTML = "";
    document.body.innerHTML = "<center><h3>Time's up!  Go and clean something.</h3></center>";
}

// get the vars from storage and start the timer
get("timerMinutes", function(res) {
    timerMinutes = Number(res);
    if (!timerMinutes) timerMinutes = 30;
    get("active", function(res) {
        active = !!res;
        if (active) {
            var startTime = new Date();
            var stopKey = setInterval(function() {
                var currentTime = new Date();
                if (milli2min(currentTime - startTime) >= timerMinutes) {
                    blockPage(); 
                }
            }, 1000);
        }
    });
});




clearInterval(stopKey);
