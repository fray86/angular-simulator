import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[BoldHover]',
  standalone: true,
})
export class BoldHoverDirective {

  @HostBinding('style.fontWeight') fontWeight: string | null = null;

  @HostListener('mouseenter')
  onEnter(): void {
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') 
  onLeave(): void {
    this.fontWeight = null;
  }
}
