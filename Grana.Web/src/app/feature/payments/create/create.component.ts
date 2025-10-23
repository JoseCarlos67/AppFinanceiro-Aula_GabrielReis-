import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../../shared/interfaces/category.interface';
import { categories } from '../../../shared/data/categories.data';
import { CategoryTagComponent } from '../../../shared/components/category-tag/category-tag.component';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentMethod } from '../../../shared/interfaces/payment-methods.interface';
import { paymentMethods } from '../../../shared/data/payment-methods.data';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, CategoryTagComponent, ButtonComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  private formBuilderService = inject(FormBuilder);
  private router = inject(Router);

  protected form = this.formBuilderService.group({
    categoryId: new FormControl<number | null>(null, [Validators.required]),
    description: new FormControl<string | null>(null, [Validators.required]),
    value: new FormControl<number | null>(null, [Validators.required, Validators.min(0.01)]),
    paymentMethodId: new FormControl<number | null>(null, [Validators.required]),
  });

  categories: Category[] = categories;
  paymentMethods: PaymentMethod[] = paymentMethods;

  selectedCategory: Category | null = null;
  selectedPaymentMethod: number | null = null;


  onSelectCategory(category: Category) {
    this.selectedCategory = category;
    this.form.patchValue({
      categoryId: category.id
    });
  }

  onSelectPaymentMethod(paymentMethodId: number) {
    this.selectedPaymentMethod = paymentMethodId;
    this.form.patchValue({
      paymentMethodId: paymentMethodId
    });
  }

  isChecked(): boolean {
    return this.selectedPaymentMethod === this.form.value.paymentMethodId;
  }

  goToList() {
    this.router.navigate(['']);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value)
    } 
  }
}
