import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true
})
export class FooterComponent {

  public footerText = 'Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico';
}
