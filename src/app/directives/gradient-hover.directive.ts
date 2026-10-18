import { Directive, HostBinding, HostListener, Input, OnDestroy } from '@angular/core';
import { IGradientConfig } from '../interfaces/IGradientConfig';


@Directive({
  selector: '[GradientHover]',
  standalone: true,
})
export class GradientHoverDirective implements OnDestroy {

  @Input() GradientConfiguration: IGradientConfig = {};

  private hoverTimer: number | null = null;
  private readonly defaultConfiguration: Required<IGradientConfig> = {
    delay: 1000,
    colors: ['red', 'blue', 'yellow'],
    thickness: '2px'
  };

  @HostBinding('class.gradient-active') isGradientActive = false;

  @HostBinding('style.--gradient-thickness')
  get borderThickness(): string {
    if (this.isGradientActive) {
      return this.GradientConfiguration.thickness ?? this.defaultConfiguration.thickness;
    } else {
      return '0px';
    }
  }

  @HostBinding('style.--gradient-colors')
  get gradientColors(): string {
    const colors = this.GradientConfiguration.colors ?? this.defaultConfiguration.colors;
    return colors.join(', ');
  }

  @HostListener('mouseenter')
  onEnter(): void {
    this.hoverTimer = setTimeout(() => {
      this.isGradientActive = true;
      this.hoverTimer = null;
    }, this.GradientConfiguration.delay ?? this.defaultConfiguration.delay)
  }

  @HostListener('mouseleave')
  onLeave(): void {
    if (this.hoverTimer !== null) {
      clearTimeout(this.hoverTimer);
      this.hoverTimer = null;
    }
    this.isGradientActive = false;
  }

  ngOnDestroy(): void {
  if (this.hoverTimer !== null) {
    clearTimeout(this.hoverTimer);
    this.hoverTimer = null;
  }
}
}
