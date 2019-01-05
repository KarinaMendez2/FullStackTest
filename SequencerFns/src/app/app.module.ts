import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FactorialComponent } from './factorial/factorial.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { RangeComponent } from './range/range.component';
import { PrimeComponent } from './prime/prime.component';
import { PartialSumComponent } from './partial-sum/partial-sum.component';

import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatSidenavModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FactorialComponent,
    FibonacciComponent,
    RangeComponent,
    PrimeComponent,
    PartialSumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatTabsModule, MatSidenavModule, MatInputModule
  ],
  providers: [HomeComponent, FactorialComponent,
    FibonacciComponent,
    RangeComponent,
    PrimeComponent,
    PartialSumComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
