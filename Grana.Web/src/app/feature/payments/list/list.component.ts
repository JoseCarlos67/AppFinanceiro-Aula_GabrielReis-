import { Component, inject, Input } from '@angular/core';
import { CardSkeletonComponent } from '../../../shared/components/card-skeleton/card-skeleton.component';
import { colorsEmptyList } from '../../../shared/components/data/colors-empty-list.data';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CardSkeletonComponent, ButtonComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private router = inject(Router);

  colorsEmptyList: { id: number; name: string }[] = colorsEmptyList;

  goToCreate() {
    this.router.navigate(['/create']);
  }
}
