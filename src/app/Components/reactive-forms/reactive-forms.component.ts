import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  
  mobilePattern = '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$';
  myForm: FormGroup = new FormGroup({
    fname: new FormControl(null, [
      Validators.required,
      Validators.maxLength(20),
    ]),
    lname: new FormControl(null, [
      Validators.required,
      Validators.maxLength(20),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.maxLength(50),
    ]),
    mob: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(this.mobilePattern),
    ]),
    msg: new FormControl(null, [Validators.maxLength(150)]),
  });

  formData: any[] = [];

  onSubmit() {
    if (this.myForm.valid) {
      const formValue = this.myForm.value;
      console.log('Form Data:', this.myForm.value);
      localStorage.setItem('formData', JSON.stringify(formValue));
      this.formData.push(formValue); 
    }
  }
}
