import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatSortModule,
  MatIconModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
