import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../presentation/pages/home/home.component';
import { ContentsComponent } from '../presentation/pages/contents/contents.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contents/:id',
    component:ContentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
