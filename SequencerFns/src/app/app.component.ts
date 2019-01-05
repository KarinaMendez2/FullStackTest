import { Component, ViewEncapsulation } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FactorialComponent } from './factorial/factorial.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { RangeComponent } from './range/range.component';
import { PrimeComponent } from './prime/prime.component';
import { PartialSumComponent } from './partial-sum/partial-sum.component';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'SequencerFns';
  result:number = 1;
  last_num:number  = 1;

  def_init:number  = 1;

  /** All basic initializers */

  factorialFn:FactorialComponent ;

  constructor(public homeComponent: HomeComponent,
  	public fibonacci: FibonacciComponent,
  	public partialSum: PartialSumComponent,
  	public range: RangeComponent) {

  	this.factorialFn = new FactorialComponent();
  }

  chooseFn(opt, num ?){

  	if(opt == 'fact'){
  		if(num > 0){
  			this.last_num = num;
  		} else {
  			this.last_num ++;
  		}

  		this.result = this.factorialFn.factorialSeq(this.last_num);
  	}

  }
}
