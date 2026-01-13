import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, I18nSelectPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, AsyncPipe, KeyValuePipe, PercentPipe, I18nSelectPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();

  price = 2000;

  Fruits = ["Apple", "Orange", "Grape", "Mango", "Kiwi", "Pomegranate"];

  decimalNum1 = 8.7589623;
  decimalNum2 = 5.43;

  time$ = interval(1000).pipe(
    map(val => new Date())
  );

  staff: {[key: number]: string} = {1: 'Micah', 2: 'Mae', 3: 'Max'};

  accomplishedWork: number = 0.532;
  repeatingClients: number = 0.652;

  logMap: any = {'logged in': 'Present', 'not logged': 'Absent', 'other': 'Visitor'};
  log: string = 'logged in';
}
