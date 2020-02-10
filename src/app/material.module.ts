import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
    MatCardModule, MatDialogModule, MatTableModule, MatButtonModule, MatToolbarModule,
    MatFormFieldModule, MatInputModule, MatRippleModule, MatProgressSpinnerModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

const modules = [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    FormsModule
];

@NgModule({
    imports: [modules],
    exports: [modules],
})
export class CustomMaterialModule { }