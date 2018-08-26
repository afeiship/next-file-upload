(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.fileUpload = function (inUrl, inData, inOptions) {
    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    var name = inOptions.name || 'file';

    //Build file ajax data:
    nx.each(inData, function (key, item) {
      if ('files' !== key) {
        formData.append(key, item);
      } else {
        nx.each(inData.files, function (_, file) {
          formData.append(name, file);
        });
      }
    });

    xhr.open('POST', inUrl, true);
    xhr.send(formData);

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
