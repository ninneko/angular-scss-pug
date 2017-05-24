import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './parent/list/list.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentDetailComponent } from './parent-detail/parent-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, ParentListComponent, ParentDetailComponent]
})
export class ParentModule { }
