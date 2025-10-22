import { Component, Input } from '@angular/core';
import { colorsEmptyList } from '../data/colors-empty-list.data';

@Component({
  selector: 'app-card-skeleton',
  imports: [],
  templateUrl: './card-skeleton.component.html',
  styleUrl: './card-skeleton.component.scss'
})
export class CardSkeletonComponent {
  @Input() color: string = '';
}
