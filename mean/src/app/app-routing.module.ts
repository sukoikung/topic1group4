import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';
import { PopularPlaceComponent } from './popular-place/popular-place.component';
import { PlaceComponent } from './place/place.component';
import { PostComponent } from './post/post.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { TravelComponent } from './travel/travel.component';
import { MytravelComponent } from './mytravel/mytravel.component';
import { TraveldetailComponent } from './traveldetail/traveldetail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'popular',
    component: PopularPlaceComponent,
  },
  {
    path: 'place',
    component: PlaceComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'createpost',
    component: CreatepostComponent,
  },
  {
    path: 'travel',
    component: TravelComponent,
  },
  {
    path: 'mytravel',
    component: MytravelComponent,
  },
  {
    path: 'traveldetail/:id',
    component: TraveldetailComponent,
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
