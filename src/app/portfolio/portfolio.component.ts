import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AbouteMeComponent } from "./aboute-me/aboute-me.component";
import { MovingCursorShadowComponent } from "../moving-cursor-shadow/moving-cursor-shadow.component";
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    LandingPageComponent,
    AbouteMeComponent,
    MovingCursorShadowComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ContactMeComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
