import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent implements OnInit {
	last_fibonacci:number = 1;
	result_fibonacci:number = 1;

	constructor() { }

	ngOnInit() {
	}

	initFibonacci(n){
		this.last_fibonacci = n;
		this.fibonacci(this.last_fibonacci);
	}

  	fibonacci(n ?)
	{
		console.log(this.result_fibonacci);

	    if (n>1){
	       	this.result_fibonacci = this.fibonacci(n-1) + this.fibonacci(n-2);  //recursive function
	    }
	    else if (n==1) {  // default case
	        this.result_fibonacci = 1;

	    }
	    else if (n==0){  // default case
	        this.result_fibonacci = 0;
	    } else { //error
	        console.log("Debes ingresar un tamaño mayor o igual a 1");
	        this.result_fibonacci = -1; 
	    }

	    return this.result_fibonacci;
	}

}
