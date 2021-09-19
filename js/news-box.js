'use strict'
export default class NewsBox {
	constructor(img, title, desc, url){
		var box = document.createElement("a");
		box.setAttribute("href", url);
		box.setAttribute("target", "_blank");
		if(img != null){
			img = `<img class = "news-img" src = "${img}"></img>`;
		} else{
			img = `<div class = "failed-news-image">IMAGE FAILED TO LOAD</div>`;
		}
		box.innerHTML = `
			<div class = "news-box">
				${img}
				<p class = "news-title">${title}</p>
				<p class = "news-desc">${desc}</p>
			</div>
		`;

		this.box = box;
	}
	getObject(){
		return this.box;
	}
}

