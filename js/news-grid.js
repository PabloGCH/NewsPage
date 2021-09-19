'use strict'
import NewsBox from "./news-box.js"
const KEY = "Insert NewsAPI key here";
export default class NewsGrid{
	
	#fillGrid(url){
		var grid = this.grid;
		var loading = this.loading;
		loading.css("z-index", "2");
		fetch(url)
		.then(function(response){
			return response.json();
		})
		.then(function(response){
			var jsonFile = response;
			jsonFile.articles.forEach(element => {
				var description = element.description;
				if(description == null){
					description = " ";
				}else if(description.length > 100){
					description = description.slice(0, 50);
					description = description + "..";
				}
				var box = new NewsBox(element.urlToImage, element.title, description, element.url);
				grid.append(box.getObject());
			});
		})
		.then(function(){
			setTimeout(function(){loading.css("z-index", "0");}, 500);
		});
	}
	constructor(){
		this.grid = $("#news-grid");
		this.loading = $("#loading");
		this.URL = "https://newsapi.org/v2/top-headlines?country=us&";
		this.SEARCH_URL = "https://newsapi.org/v2/everything?language=en&"
	}
	loadNews(subject){
		var url = this.URL + "category=" + subject + "&apikey=" + KEY;
		var req = new Request(url);
		var grid = this.grid;
		var loading = this.loading;
		this.#fillGrid(url);
	}
	searchNews(string){
		var newstr = "+" + string;
		while(newstr.charAt(newstr.length - 1) == " "){
			newstr = newstr.slice(0, -1);
		}
		for(var i = 0; i < newstr.length; i++){
			newstr = newstr.replace(' ', '+');
		}
		newstr = encodeURIComponent(newstr);
		var searchUrl = this.SEARCH_URL + "q=" + newstr + "&apikey=" + KEY;
		console.log(searchUrl);
		var req = new Request(searchUrl);
		this.#fillGrid(req);
	}
	
	removeAll(){
		this.grid.empty();
	}
}

