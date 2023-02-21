export function XHRpostData(url){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            console.log(xhr.responseText);
          } else {
            console.log('Error: ' + xhr.status);
          }
        }
      };
      xhr.send();

}