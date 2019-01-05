import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.scss']
})
export class FactorialComponent implements OnInit {
	
  	constructor() { 
  	}

  	ngOnInit() {
  	}

  	next(fact: number){
  		return factorialSeq(fact);	
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
