
function rotateAnimation(el,speed){

    var looper;
    var degrees = 0;
    var elem = document.getElementById(el);
    window.alert("hello kid")
	if(navigator.userAgent.match("Chrome")){
        elem.style.WebkitTransform = "rotate("+degrees+"deg)";
    }

	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
    document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}