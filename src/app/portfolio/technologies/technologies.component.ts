import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

  showOverlay: boolean = false;

  icons = [
    {'path': 'icon_5.png', 'name': 'HTML'},
    {'path': 'icon_3.png', 'name': 'CSS'},
    {'path': 'icon_7.png', 'name': 'JavaScript'},
    {'path': 'icon_8.png', 'name': 'Material Design'},
    {'path': 'icon_10.png', 'name': 'TypeScript'},
    {'path': 'icon_1.png', 'name': 'Angular'},
    {'path': 'icon_4.png', 'name': 'Firebase'},
    {'path': 'icon_6.png', 'name': 'GIT'},
    {'path': 'icon_2.png', 'name': 'Rest-Api'},
    {'path': 'icon_9.png', 'name': 'Scrum'},
  ]

  showGrowthOverlay() {
      this.showOverlay = true;
  }

  hideOverlay() {
    this.showOverlay = false;
  }

}
