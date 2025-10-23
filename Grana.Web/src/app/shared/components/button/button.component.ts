import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() variant: 'default' | 'icon' = 'default';
  @Input() disabled: boolean = false;
}
