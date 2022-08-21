import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistryWordComponent } from './registry-word/registry-word.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  {path:'', component:StartPageComponent},
  {path:'registry-word', component:RegistryWordComponent},
  {path:'**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
