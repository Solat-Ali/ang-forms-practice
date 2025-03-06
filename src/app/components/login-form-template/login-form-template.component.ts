import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-login-form-template",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: "./login-form-template.component.html",
  styleUrl: "./login-form-template.component.scss",
})
export class LoginFormTemplateComponent {
  email: string = "";
  password: string = "";

  onSubmit(formEl: NgForm): void {
    console.log("Form: ", formEl.form);
  }

  reset(formEl: NgForm) {
    formEl.reset();
    formEl.resetForm();
  }
}
