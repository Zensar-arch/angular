import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  message : string= "welcome to greeting component";
  textColor="text-color";//textColor is the property of component class
  textBgColor="text-bgcolor";
  isColorChanged = false;

  greetingStyle=[
    this.textColor,
    this.textBgColor
  ]
  constructor() { }

  ngOnInit() {
  }
  sayGreet(event){
    console.log(event);
    this.message="good morning"+ event.type+ " "+ event.target.value;
  }
  
 

toggleColor(test) {
    this.isColorChanged = !this.isColorChanged;
    
}

getFgColor() {
    if(this.isColorChanged) {
    return 'blue'}
    else{
    return 'red'}
}
getBgColor() {
  if(this.isColorChanged){
    return 'red'
  }
  else{
    return 'blue'
  }

}

}