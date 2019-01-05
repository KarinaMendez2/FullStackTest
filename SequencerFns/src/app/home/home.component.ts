import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  factorialSeq(fact: number) {
  	var factorial:number = 1;
  	var num:number = fact; 
	 
	while(num >=1) { 
	   factorial = factorial * num; 
	   num--; 
	} 
	console.log("The factorial  is "+factorial); 

	return factorial;
  }

}
