import { Component, AfterViewInit } from '@angular/core';
const {tabs: mdcTabs} = require('node_modules/material-components-web/dist/material-components-web.js');

@Component({
	selector: 'my-app',
	template: `
		<h1 class="mdc-typography--display1">{{title}}</h1>
		<nav id="basic-tab-bar" class="mdc-tab-bar">
  		<a class="mdc-tab mdc-tab--active" routerLink="/products">Products</a>
  		<a class="mdc-tab " >Dashboard</a>
 			<span class="mdc-tab-bar__indicator"></span>
		</nav>
   	<router-outlet></router-outlet>
	`
})
export class AppComponent implements AfterViewInit {
	title = "NGA Products";
	ngAfterViewInit(): void{
		mdcTabs.MDCTabBar.attachTo(document.querySelector('#basic-tab-bar'));
	}
}