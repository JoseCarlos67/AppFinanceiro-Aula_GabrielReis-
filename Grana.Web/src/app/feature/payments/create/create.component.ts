import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  private router = inject(Router);

  goToList() {
    this.router.navigate(['']);
  }
}
