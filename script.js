var marginY=0;
var destination=0;
var speed=5;//speed of scroll
var scroller=null;

function scrollToResume(elementId){
	destination=document.getElementById(elementId).offsetTop;
		//console.log(destination);//shows how far below the div is from the top

	scroller=setTimeout(function(){
		scrollToResume(elementId);//this function will be clicked every 1 ms when user clicks the link
	},1);
	marginY=marginY+speed;//increments the margin every 1ms everytime we click
	if (marginY>=destination){
		clearTimeout(scroller);
	}

	window.scroll(0,marginY);
}

function goToTop(){
	scroller=setTimeout(function(){
		goToTop();//this function will be clicked every 1 ms when user clicks the link
	},1);
	marginY=marginY-speed;//increments the margin every 1ms everytime we click
	if (marginY<=0){
		clearTimeout(scroller);
	}

	window.scroll(0,marginY);

}