import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectOverlayComponent } from './project-overlay/project-overlay.component'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectOverlayComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  selectedProjectIndex: number | null = null;

  projects = [
    {name: 'Join', technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase']},
    {name: 'El-Pollo-Loco', technologies: [ 'HMTL', 'CSS', 'JavaScript']},
    {name: 'DA-Bubble', technologies: ['HTML', 'CSS', 'Angular', 'Firebase', 'TypeScript']}
  ]

  openProjectOverlay(index: number) {
    this.selectedProjectIndex = index;
    document.body.style.overflow = 'hidden';
  }
  
  closeProjectOverlay() {
    this.selectedProjectIndex = null;
    document.body.style.overflow = '';
  }
}
