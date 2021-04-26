'use strict';
let isMobile = {
	Android: function () {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function () {return navigator.userAgent.match(/BlackBerry/i);},
	IOS: function () {return navigator.userAgent.match(/IPhone|IPad|IPod/i);},
	Opera: function () {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function () {return navigator.userAgent.match(/IEMobile/i);},
	any: function () {return (isMobile.Android()|| isMobile.BlackBerry()|| isMobile.IOS()|| isMobile.Opera()|| isMobile.Windows());}};
if (isMobile.any()){
function changeStyle(){
              document.getElementByClassName('.mainlink').style.color = 'red';
           }}
