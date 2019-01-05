import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partial-sum',
  templateUrl: './partial-sum.component.html',
  styleUrls: ['./partial-sum.component.scss']
})
export class PartialSumComponent implements OnInit {
	num_list = [];
	result: number = 0;
	last_position:number = 0;

  	constructor() { }

  	ngOnInit() {
  	}

  	pushList(n:number){
  		this.num_list.push(n);
  		console.log(this.num_list);
  	}

  	partialSum(){
  		this.result = this.result + parseInt(this.num_list[this.last_position]);
  		this.last_position++;
  	}

  	clearList() {
  		this.num_list = [];
  	}

}
