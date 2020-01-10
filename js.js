// JavaScript Document
var n=1;
var pics=document.getElementById("pics")
setInterval(function(){
	if(n>4) n=1;
	
	pics.innerHTML="<img src='a ("+n+").jpg'>";
	n++;
},2000);