import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from '../../../../shared/directives/autofocus.directive';

@Component({
  selector: 'app-input',
  imports: [FormsModule, AutofocusDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  public value = input<string>();
  public valueChange = output<string>();
}
