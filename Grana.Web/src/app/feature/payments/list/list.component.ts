import { Component, inject, Input, OnInit } from '@angular/core';
import { CardSkeletonComponent } from '../../../shared/components/card-skeleton/card-skeleton.component';
import { colorsEmptyList } from '../../../shared/data/colors-empty-list.data';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { Router } from '@angular/router';
import { PaymentData } from '../../../shared/interfaces/payment-data.interface';
import { CardComponent } from '../../../shared/components/card/card.component';
import { Category } from '../../../shared/interfaces/category.interface';
import { categories } from '../../../shared/data/categories.data';
import { CategoryTagComponent } from '../../../shared/components/category-tag/category-tag.component';

@Component({
  selector: 'app-list',
  imports: [CardSkeletonComponent, ButtonComponent, CardComponent, CategoryTagComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  private router = inject(Router);

  colorsEmptyList: { id: number; name: string }[] = colorsEmptyList;
  categories: Category[] = categories;
  selectedCategory: Category | null = null;

 allPayments: PaymentData[] = [
    { 
      id: 1, 
      categoryId: 1,
      description: 'Abobrinha',
      value: 12,
      paymentMethodId: 2,
      createdAt: '22/10/2025'
    },
     { 
      id: 2, 
      categoryId: 3,
      description: 'Abo',
      value: 12,
      paymentMethodId: 2,
      createdAt: '22/10/2025'
    },
    { 
      id: 4, 
      categoryId: 2,
      description: 'Abfdfdao',
      value: 12,
      paymentMethodId: 2,
      createdAt: '22/10/2025'
    }
  ];

  filteredPayments: PaymentData[] = [];

  onSelectCategory(category: Category) {
    this.selectedCategory = this.selectedCategory === category ? null : category;
    this.filterPayments();
  }

  filterPayments() {
    this.filteredPayments = this.allPayments.filter(
      p => this.selectedCategory === null || p.categoryId === this.selectedCategory?.id
    );
  }

  ngOnInit(): void {
    this.filterPayments();
    this.filterCategories();
  }

  filterCategories() {
    this.categories = this.categories.filter(c => this.allPayments.some(p => p.categoryId === c.id));
  }

  goToCreate() {
    this.router.navigate(['/create']);
  }
}
