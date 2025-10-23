import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-category-tag',
  imports: [],
  templateUrl: './category-tag.component.html',
  styleUrl: './category-tag.component.scss'
})
export class CategoryTagComponent {
  @Input({ required: true }) category!: Category;
  @Input() selected: boolean = false;

  @Output() categorySelect = new EventEmitter<Category>();
  
  onClick() {
    this.categorySelect.emit(this.category);
  }
}
