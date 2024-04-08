import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    CheckboxModule, 
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule
  ],
  exports: [
    CheckboxModule, 
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule
  ],
})
export class SharedModule {}
