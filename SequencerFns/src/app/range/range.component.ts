import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

	/* Default values */
	last_range:number = 1;
	step:number = 2;

	constructor() { }

    ngOnInit() { }

	rangeSeq(n:number ? , step:number ? ){
		
		if(n){
			this.last_range = n;
		}

		if(step) {
			this.step = step;
		}

		this.last_range = this.last_range + this.step;

	}

}
