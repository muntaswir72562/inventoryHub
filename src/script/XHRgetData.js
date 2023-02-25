export function getXHRData(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          callback(null, xhr.response);
        } else {
          callback('Error: ' + xhr.status, null);
        }
      }
    };
    xhr.send();
  }  
