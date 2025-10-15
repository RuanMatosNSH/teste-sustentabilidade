var height;

function sendPostMessage() {
  if (height !== document.getElementById('landing-content').offsetHeight) {
    height = document.getElementById('landing-content').offsetHeight;
    window.parent.postMessage({
      frameHeight: height
    }, '*');

    console.log(height);
  }
}

$(document).ready(function() {

  var is_mobile = true;
  if($('.detect-mobile').css('display') == 'none') {
    is_mobile = false;
  }

  window.onload = sendPostMessage;
  window.onresize = sendPostMessage;

})