import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import {AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-ticket-prices';
  distance = 1;
  age = 1;
  weight = 1;
  @ViewChild("aero_eco") aero_eco: ElementRef;
  @ViewChild("aero_pro") aero_pro: ElementRef;
  @ViewChild("aero_lux") aero_lux: ElementRef;
  @ViewChild("rzd_eco") rzd_eco: ElementRef;
  @ViewChild("rzd_pro") rzd_pro: ElementRef;
  @ViewChild("rzd_lux") rzd_lux: ElementRef;
  calcPrices() {
    let priceCounter = 0;
    //aero_eco
    if (this.distance>0 && this.weight>=0 && this.weight<=20) {
      priceCounter = this.distance * 4 + (this.weight > 5 ? 4000 : 0);
      this.aero_eco.nativeElement.style.display="inline"
      this.aero_eco.nativeElement.innerHTML = priceCounter;
    } else {this.aero_eco.nativeElement.style.display="none"}
    //aero_pro
    if (this.distance>0 && this.age>0 && this.weight>=0 && this.weight<=50) {
      priceCounter = this.distance * 8 * (this.age <= 7 ? 0.7 : 1) + (this.weight > 20 ? 5000 : 0);
      this.aero_pro.nativeElement.style.display="inline"
      this.aero_pro.nativeElement.innerHTML = priceCounter;
    } else {this.aero_pro.nativeElement.style.display="none"}
    //aero_lux
    if (this.distance>0 && this.age>0 && this.weight>=0 && this.weight<=50) {
      priceCounter = this.distance * 15 * (this.age <= 16 ? 0.7 : 1);
      this.aero_lux.nativeElement.style.display="inline"
      this.aero_lux.nativeElement.innerHTML = priceCounter;
    } else {this.aero_lux.nativeElement.style.display="none"}
    
    //rzd_eco
    if (this.distance>0 && this.weight>=0 && this.weight<=50 && this.age>=0) {
      priceCounter = this.distance * 0.5 * (this.age <= 5 ? 0.5 : 1) + this.weight * (this.weight > 15 ? 50 : 0);
      this.rzd_eco.nativeElement.style.display="inline"
      this.rzd_eco.nativeElement.innerHTML = priceCounter;
    } else {this.rzd_eco.nativeElement.style.display="none"}
    //rzd_pro
    if (this.distance>0 && this.age>0 && this.weight>=0 && this.weight<=60) {
      priceCounter = this.distance * 2 * (this.age <= 8 ? 0.7 : 1) + this.weight * (this.weight > 20 ? 50 : 0);
      this.rzd_pro.nativeElement.style.display="inline"
      this.rzd_pro.nativeElement.innerHTML = priceCounter;
    } else {this.rzd_pro.nativeElement.style.display="none"}
    //rzd_lux
    if (this.distance>0 && this.weight>=0 && this.weight<=60) {
      priceCounter = this.distance * 4;
      this.rzd_lux.nativeElement.style.display="inline"
      this.rzd_lux.nativeElement.innerHTML = priceCounter;
    } else {this.rzd_lux.nativeElement.style.display="none"}
  }
}
