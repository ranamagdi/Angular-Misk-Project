import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el:ElementRef) { }
  @HostListener('click')
  prevFunc(){
   var elem=this.el.nativeElement.parentElement.parentElement.children[0];
   var item=elem.getElementsByClassName("item")
   elem.prepend(item[item.length-1])
   console.log(elem)
  }

}
