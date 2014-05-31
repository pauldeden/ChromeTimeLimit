chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.func == "save") {
        save(request.key, request.value);
        sendResponse({response: "saved"});
    } else if (request.func == "get") {
        var response = get(request.key);
        sendResponse({response: response});
    }
});

/* generic helper functions */

function get(key) {
  return localStorage.getItem(key);
}

function save(key, value) {
  localStorage.setItem(key, value);
}
