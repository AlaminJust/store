import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { DetailComponent } from '../detail/detail.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
