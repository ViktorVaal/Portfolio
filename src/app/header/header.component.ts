import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  langEnglish: boolean = true;

  constructor() {
  
  }

  toggleLang() {
    if (this.langEnglish) {
      this.langEnglish = false;
    } else {
      this.langEnglish = true;
    }
  }
}
