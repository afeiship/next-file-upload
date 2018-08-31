(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.fileUpload = function (inUrl, inData, inOptions) {
    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    var options = inOptions || {};

    //Build file ajax data:
    nx.each(inData, function (key, item) {
      formData.append(key, item);
    });

    // withCredentials
    xhr.withCredentials = options.withCredentials || false;

    //open data:
    xhr.open('POST', inUrl, true);

    //set headers:
    nx.each(options.headers, function (key, value) {
      xhr.setRequestHeader(key, value);
    });

    //send
    xhr.send(formData);

    //response:
    return new Promise(function (resolve, reject) {
      //onload:
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(xhr);
        }
      };

      //error:
      xhr.onerror = function () {
        reject(xhr);
      };
    });
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fileUpload;
  }

}());
