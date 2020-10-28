import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { AllPlaceComponent } from './all-place/all-place.component';
import { PopularPlaceComponent } from './popular-place/popular-place.component';
import { PlaceComponent } from './place/place.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'description/:dataObj',
    component: DescriptionComponent,
  },
  {
    path: 'province/:dataObj',
    component: AllPlaceComponent,
  },
  {
    path: 'popular',
    component: PopularPlaceComponent,
  },
  {
    path: 'travel',
    component: PlaceComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
