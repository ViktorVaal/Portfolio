import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  privacyPolicyChecked: boolean = false;
  fullName: boolean = false;
  email: boolean = false;
  message: boolean = false;
  
  onSubmit() {
    console.log('läuft');
    
  }

  toggleCheckBox() {
    if (this.privacyPolicyChecked === false) {
      this.privacyPolicyChecked = true;
    } else {
      this.privacyPolicyChecked = false;
    }
  }
}
