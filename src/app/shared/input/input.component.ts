import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() control: FormControl = new FormControl();
  @Input() type: string = 'text'
  @Input() placeholder: string = '';
  @Input() format: string = ''; //used to disable or enable formatting with ngx-mask. Empty string is disabled

}
