import { Routes } from '@angular/router';
import { ListComponent } from './feature/payments/list/list.component';
import { CreateComponent } from './feature/payments/create/create.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: '**', redirectTo: '' }
];
