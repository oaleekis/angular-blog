import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  photoCover: string = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
  cardTitle: string = "Title";
  cardDescription: string = "Description";
}
