
function download(){
	var isWeChat = is_weChat();
	if(isWeChat){
		$('.message').removeClass('hidden');
	}else{
		window.open('http://www.73go.cn/download/tp/tptcr.apk');
	}
}

function is_weChat(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
    	return true;
    } else {
    	return false;
    }
}