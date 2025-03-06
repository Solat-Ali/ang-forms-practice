import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormTemplateComponent } from "./components/login-form-template/login-form-template.component";
import { LoginFormReactiveComponent } from "./components/login-form-reactive/login-form-reactive.component";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginFormTemplateComponent, LoginFormReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    { 
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, 
      useValue: { appearance: 'outline' }
    }
  ]
})
export class AppComponent {
  title = 'ang-forms-test';
}
