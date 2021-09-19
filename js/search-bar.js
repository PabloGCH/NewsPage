'use strict'
import NewsGrid from "./news-grid.js";
export default class SearchBar{
	constructor(grid){
		this.searchBox = $("#search-box");
		this.searchBar = $("#search-bar");
		var searchBox = this.searchBox;
		var searchBar = this.searchBar;
		searchBar.focus(function() {
			searchBox.css("background", "gray");
		});
		searchBar.blur(function() {
			searchBox.css("background", "#687477");
		});
		searchBox.keypress(function() {
			if(event.which == 13){
				grid.removeAll();
				grid.searchNews(searchBar.val());
			}
		});
		
	}
}
