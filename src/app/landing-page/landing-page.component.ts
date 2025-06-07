import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MovingBannerComponent } from './moving-banner/moving-banner.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, MovingBannerComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  desktop: boolean = true;
  email: string = 'vaal.viktor@web.de';

}
