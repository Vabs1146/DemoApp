import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

@NgModule({
imports:[MatSliderModule,MatToolbarModule,MatIconModule,MatButtonModule,MatSidenavModule,MatListModule,MatTableModule ],
exports:[MatSliderModule,MatToolbarModule,MatIconModule,MatButtonModule,MatSidenavModule,MatListModule,MatTableModule ]
})
export class MaterialModule{}