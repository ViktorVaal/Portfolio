import { Component } from '@angular/core';

@Component({
  selector: 'app-moving-banner',
  standalone: true,
  imports: [],
  templateUrl: './moving-banner.component.html',
  styleUrl: './moving-banner.component.scss'
})
export class MovingBannerComponent {
bannerItems: string[] = [
  'Frontend Developer',
  'Available for remote work',
  'Open to work',
  'Based in Wörth am Main'
]
}
