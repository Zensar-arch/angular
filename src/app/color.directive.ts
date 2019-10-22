import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private ele:ElementRef) { }
changeColor(color:string,col1:string){
  this.ele.nativeElement.style.backgroundColor = color;
  this.ele.nativeElement.style.color = col1;

}
@HostListener('mouseenter')
onMouseEnter(){
  this.changeColor('violet','magenta');

  
}
@HostListener('mouseleave')
onMouseLeave(){
  this.changeColor('black','pink');

}}
