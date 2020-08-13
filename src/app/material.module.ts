import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
imports:[MatSliderModule,MatToolbarModule,MatIconModule,MatButtonModule,MatSidenavModule,MatListModule,MatTableModule,MatInputModule,MatSelectModule,MatFormFieldModule ],
exports:[MatSliderModule,MatToolbarModule,MatIconModule,MatButtonModule,MatSidenavModule,MatListModule,MatTableModule,MatInputModule,MatSelectModule,MatFormFieldModule ]
})
export class MaterialModule{}