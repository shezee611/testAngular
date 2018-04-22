import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './_components/home';
import { PostsComponent } from './_components/posts';
import { PostsDetailsComponent } from './_components/postsdetails';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostsDetailsComponent },
  { path: 'posts/:id/:title', component: PostsDetailsComponent }
];


@NgModule({
  exports: [RouterModule],
  imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
