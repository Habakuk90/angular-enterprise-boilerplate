import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './page/blog.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  // { path: ':slug', component: BlogPostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
