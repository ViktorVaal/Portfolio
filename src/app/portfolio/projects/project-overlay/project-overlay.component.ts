import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-project-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-overlay.component.html',
  styleUrl: './project-overlay.component.scss'
})
export class ProjectOverlayComponent {

  @Input() projectIndex: number = 0;
  @Output() close = new EventEmitter<void>();

  overlayProjects = [
    {
      name: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: [
        { iconName: 'HTML', iconPath: 'icon_5.png' },
        { iconName: 'CSS', iconPath: 'icon_3.png' },
        { iconName: 'Firebase', iconPath: 'icon_4.png' },
        { iconName: 'JavaScript', iconPath: 'icon_7.png' },
      ],
      imagepath: 'join-overlay.png'
    },
    {
      name: 'El Pollo Loco',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: [
        { iconName: 'HTML', iconPath: 'icon_5.png' },
        { iconName: 'CSS', iconPath: 'icon_3.png' },
        { iconName: 'JavaScript', iconPath: 'icon_7.png' },
      ],
      imagepath: 'epl-overlay.png'
    },
    {
      name: 'DA Bubble',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      technologies: [
        { iconName: 'HTML', iconPath: 'icon_5.png' },
        { iconName: 'CSS', iconPath: 'icon_3.png' },
        { iconName: 'Angular', iconPath: 'icon_1.png' },
        { iconName: 'Firebase', iconPath: 'icon_4.png' },
        { iconName: 'TypeScript', iconPath: 'icon_10.png' },
      ],
      imagepath: 'da-bubble-overlay.png'
    }
  ];

  get project() {
    return this.overlayProjects[this.projectIndex];
  }

  closeOverlay() {
    this.close.emit();
  }

  nextProject() {
    this.projectIndex++
    if (this.projectIndex === 3) {
      this.projectIndex = 0;
    }
  }

}
