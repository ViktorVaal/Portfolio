import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {name: 'Join', technologies: ['Angular', 'TypeScript', 'HMTL', 'CSS', 'Firebase']},
    {name: 'El-Pollo-Loco', technologies: [ 'HMTL', 'CSS', 'JavaScript']},
    {name: 'DA-Bubble', technologies: [ 'Angular', 'Firebase', 'TypeScript']}
  ]

  openProjectOverlay($index: number) {
    
  }
}
