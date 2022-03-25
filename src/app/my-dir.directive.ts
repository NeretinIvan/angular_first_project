import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective implements OnChanges {
  @Input()
  public value: {[key: string]: string} = {};
  constructor(private element: ElementRef<HTMLElement>) { 
  }

  ngOnChanges(): void {
    console.log(this.value);
    for (let key in this.value) {
      this.element.nativeElement.setAttribute(key, this.value[key]);
    }
  }
}
