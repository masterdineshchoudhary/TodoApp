import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  mobilePattern = '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$';
  emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  myForm: FormGroup = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern(this.emailPattern),
    ]),
    mob: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(this.mobilePattern),
    ]),
    msg: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(150),
    ]),
  });
  onSubmit() {
    console.log(this.myForm.value);
  }
}
