'use strict'
import NewsGrid from "./news-grid.js"
export default class HeaderButtons{
	#initButtons(grid){
		const category = ["general", "business", "technology", "science", "entertainment"];
		this.buttons.forEach((element, index) => {
			element.click(function() {
				grid.removeAll();
				grid.loadNews(category[index]);
			});
			element.keypress(function() {

				if(event.which == 13){
					grid.removeAll();
					grid.loadNews(category[index]);
				}
			});
		});
	}

	constructor(grid){
		this.buttons = [$("#general-button"), $("#business-button"), $("#technology-button"), $("#science-button"), $("#entertainment-button")];
		this.#initButtons(grid);
	}
}
