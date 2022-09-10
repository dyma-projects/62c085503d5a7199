import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective{

  constructor(private el: ElementRef){ }

  @HostListener("window:keyup", ["$event"]) private onArrowKeyUp(event:KeyboardEvent) {
    this.changeColor(event.key);
  };

  private changeColor(key:string) {
    switch(key) {
      case "ArrowUp":
        this.el.nativeElement.style.color="red";
        break;
      case "ArrowDown":
        this.el.nativeElement.style.color="blue";
        break;
      case "ArrowRight":
        this.el.nativeElement.style.color="#999";
        break;
      case "ArrowLeft":
        this.el.nativeElement.style.color="orange";
        break;
        default:
          this.el.nativeElement.style.color="black";

    }
  }
}



