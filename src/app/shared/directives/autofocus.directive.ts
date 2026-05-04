import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnInit {
  private elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
  ngOnInit(): void {
    this.elementRef.nativeElement.focus();
  }
}
