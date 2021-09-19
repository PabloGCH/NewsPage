'use strict'
import NewsGrid from "./news-grid.js";
import HeaderButtons from "./header-buttons.js";
import SearchBar from "./search-bar.js";

$(document).ready(function() {
	var newsGrid = new NewsGrid();
	var searchBar = new SearchBar(newsGrid);
	var headerButtons = new HeaderButtons(newsGrid);
	newsGrid.loadNews("general");		
});











