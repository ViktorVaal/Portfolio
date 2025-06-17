import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  references = [
    { name: 'H. Janik - Team Partner', comment: 'It was a pleasure to work with him.' },
    { name: 'H. Daniela - Team Partner', comment: 'Highly professional and focused.' },
    { name: 'M. Alex - Developer', comment: 'A great collaborator and problem solver.' }
  ];

  currentReference = 0;

  previousReference() {
    this.currentReference = (this.currentReference - 1 + this.references.length) % this.references.length;
  }

  nextReference() {
    this.currentReference = (this.currentReference + 1) % this.references.length;
  }

  getLeftIndex(): number {
    return (this.currentReference - 1 + this.references.length) % this.references.length;
  }

  getRightIndex(): number {
    return (this.currentReference + 1) % this.references.length;
  }
}
