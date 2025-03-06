import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-login-form-reactive",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: "./login-form-reactive.component.html",
  styleUrl: "./login-form-reactive.component.scss",
})
export class LoginFormReactiveComponent {
  // services
  _fb = inject(FormBuilder);

  // typed form group
  loginForm = this._fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
  });

  get emailCtrl() {
    return this.loginForm.get("email");
  }

  get passwordCtrl() {
    return this.loginForm.get("password");
  }

  onSubmit(): void {
    console.log("Form: ", this.loginForm);
  }

  reset() {
    this.loginForm.reset();
  }
}
