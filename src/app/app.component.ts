import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
const mdcTabs = require('@material/tabs');

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
	title = "NGA Products";
	constructor(private router:Router) {}

	ngAfterViewInit(): void{
		this.router.events.subscribe(function(event){
		  if (event instanceof NavigationEnd) {
	    	//start the tabs bar only the first time
	    	const tabBar = new mdcTabs.MDCTabBar(document.querySelector('#dinamyc-tab-bar'));
	    	this.unsubscribe();
		  }
		});
	}
}