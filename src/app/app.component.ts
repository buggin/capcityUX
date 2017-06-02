import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
const mdcTabs = require('@material/tabs');

@Component({
	selector: 'my-app',
	template: `
		<h1 class="mdc-typography--display1">{{title}}</h1>
		<nav id="dinamyc-tab-bar" class="mdc-tab-bar mdc-tab-bar--indicator-accent">
  		<a class="mdc-tab" routerLink="/products" routerLinkActive="mdc-tab--active">Products</a>
  		<a class="mdc-tab" routerLink="/dashboard" routerLinkActive="mdc-tab--active">Dashboard</a>
 			<span class="mdc-tab-bar__indicator"></span>
		</nav>
   	<router-outlet></router-outlet>
	`
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