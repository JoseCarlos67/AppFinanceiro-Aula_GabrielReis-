import { Component, Input, OnInit } from '@angular/core';
import { PaymentData } from '../../interfaces/payment-data.interface';
import { Category } from '../../interfaces/category.interface';
import { categories } from '../../data/categories.data';
import { PaymentMethod } from '../../interfaces/payment-methods.interface';
import { paymentMethods } from '../../data/payment-methods.data';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input({ required: true }) paymentData!: PaymentData;

  category: string = '';
  paymentMethod: string = '';

  categories: Category[] = categories;
  paymentMethods: PaymentMethod[] = paymentMethods;

  ngOnInit(): void {
    this.category = this.getCategoryColor(this.paymentData.categoryId);
    this.paymentMethod = this.getPaymentMethod(this.paymentData.paymentMethodId);
  }

  getCategoryColor(categoryId: number): string {
    return this.categories.find(c => c.id === categoryId)?.color ?? '';
  }

  getPaymentMethod(paymentMethodId: number): string {
    return this.paymentMethods.find(pm => pm.id === paymentMethodId)?.name ?? '';
  }
}
