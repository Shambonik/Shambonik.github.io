let animItems = [];
function animOnScroll(){
	for (let i = 0; i < animItems.length; i++){
		const animItem = animItems[i];
		if(!animItem.classList.contains("active_anim")){
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 6;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight/animStart;
			}


			if (pageYOffset > animItemOffset - animItemPoint){
				animItem.classList.add("active_anim");
			}
		}
	}
}

function offset(el){
	var rect = el.getBoundingClientRect();
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return {top : rect.top + scrollTop, left: rect.left + scrollLeft};
}

function animetionLoad(){
	animItems= document.querySelectorAll('.anim_item');
}

window.addEventListener("load", animetionLoad);
window.addEventListener("load", animOnScroll);
window.addEventListener("scroll", animOnScroll);
window.addEventListener("resize", animOnScroll);