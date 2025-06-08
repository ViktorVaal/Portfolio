import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-moving-cursor-shadow',
  template: `<div class="cursor-shadow" [style.left.px]="x" [style.top.px]="y"></div>`,
  styleUrls: ['./moving-cursor-shadow.component.scss'],
  standalone: true,
})
export class MovingCursorShadowComponent {
  x = 0;
  y = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
  }
}
