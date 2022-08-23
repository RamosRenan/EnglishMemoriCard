import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditWordsComponent } from './edit/edit-words/edit-words.component';
import { ListWordsComponent } from './list/list-words/list-words.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistryWordComponent } from './registry-word/registry-word.component';
import { StartGameComponent } from './start-game/start-game/start-game.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  {path:'home', component:StartPageComponent},
  {path:'start', component:StartGameComponent},
  {path:'registry-word', component:RegistryWordComponent},
  {path:'list-word', component:ListWordsComponent},
  {path:'edit-word/:id', component:EditWordsComponent},
  {path:'**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
