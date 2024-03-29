import nx from '@jswork/next';

const defaults = {
  method: 'POST',
  headers: {},
  onProgress: nx.noop
};

const getBody = function (inData) {
  if (inData instanceof File) return inData;
  var formData = new FormData();
  nx.each(inData, function (key, item) {
    formData.append(key, item);
  });
  return formData;
};

nx.fileUpload = function (inUrl, inData, inOptions) {
  var xhr = new XMLHttpRequest();
  var body = getBody(inData);
  var options = nx.mix(defaults, inOptions);

  // withCredentials
  xhr.withCredentials = options.withCredentials || false;

  //open data:
  xhr.open(options.method, inUrl, true);

  //set headers:
  nx.each(options.headers, function (key, value) {
    xhr.setRequestHeader(key, value);
  });

  //send
  xhr.send(body);

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

    // show progress:
    xhr.onprogress = function (inEvent) {
      options.onProgress(inEvent);
    };

    //error:
    xhr.onerror = function () {
      reject(xhr);
    };
  });
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.fileUpload;
}

export default nx.fileUpload;
