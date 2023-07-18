import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AlbumComponent } from './components/album/album.component';
import { SearchComponent } from './components/search/search.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { FollowingComponent } from './components/following/following.component';

import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
    children: [
      { path: 'collections/:releaseId?', component: CollectionsComponent },
      { path: 'wishlist/:releaseId?', component: WishlistComponent },
      { path: 'following/:releaseId?', component: FollowingComponent },
    ],
  },
  { path: 'album/:releaseId', component: AlbumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
