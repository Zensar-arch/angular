import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-test',
  templateUrl: './carousel-test.component.html',
  styleUrls: ['./carousel-test.component.css']
})
export class CarouselTestComponent implements OnInit {
images=[1,2,3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }

}
