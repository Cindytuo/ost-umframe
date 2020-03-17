/**
 * 请求域名处理环境判断
 */
var reqHostName = function () {
  let _origin
  if(window.location.hostname === 'localhost' || window.location.hostname === 'spcare.medbanks-test.cn'){
    _origin = 'http://spcare-api.medbanks-test.com'
  } else if(window.location.hostname === 'spcare.medbanks-test.com'){
    _origin = 'http://spcare-api.medbanks-test.com'
  } else {
    _origin = 'https://gateway.ytbxjj.com'//生产域名 https://gateway.ytbxjj.com
  }
    return _origin;
}
export default reqHostName;  