import { Component, OnInit } from '@angular/core';
import { NgbDate } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-test',
  templateUrl: './datepicker-test.component.html',
  styleUrls: ['./datepicker-test.component.css']
})
export class DatepickerTestComponent implements OnInit {
  date: NgbDate;
  constructor() { }

  ngOnInit() {
  }
  onSelect(event){
    console.log(event)
    this.date=event
  }

}
