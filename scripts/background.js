function savePassword(password) {
  save({'password': password}, function(){});
}

function getPassword(callback) {
  get('password', callback);
}

/* generic helper functions */

function get(itemStr, callback) {
  chrome.storage.local.get(itemStr, function (items) {
    callback(items);                            
  });
}

// savedCB is a function like function () {}
function save(item, savedCB) {
  chrome.storage.local.set(item, savedCB);  
}