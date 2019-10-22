import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<h5>&copy;Zensar Online Shopee</h5>
  <h6>All rights reserved</h6>`,
  styles: ['h5 { color: blue;}','h6 {color : pink;}']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
