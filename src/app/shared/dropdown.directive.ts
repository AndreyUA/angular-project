import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
} from '@angular/core';

// Toggle when click ONLY on element
// @Directive({
//   selector: '[appDropdown]',
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen: boolean = false;

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//   }
// }

// Open if click on element, close if click on element or on document
@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }

  constructor(private elRef: ElementRef) {}
}
