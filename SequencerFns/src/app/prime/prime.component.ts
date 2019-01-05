import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.scss']
})
export class PrimeComponent implements OnInit {
	last_prime:number = 1;

  	constructor() { }

  	ngOnInit() {
  	}

  	primeSeq(n:number ?){
  		if(n >= 0){
  			this.last_prime = n;
  		}

  		var current_number = this.last_prime;
	 
	        while(true) {

	        	current_number++;
	 			
	 			if(this.isPrime(current_number)) {
	          		this.last_prime = current_number
	        		return current_number;
	       		}
	        }
	    
  	}

  	isPrime(value:number) {
	    for(var i = 2; i < value; i++) {
	        if(value % i === 0) {
	            return false;
	        }
	    }
	    return value > 1;
	}

}
