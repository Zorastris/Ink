import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LogInComponent} from '../log-in/log-in.component';
import {NoteListComponent} from './notes/note-list/note-list.component';
import {NotePageComponent} from './notes/note-page/note-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'log-in', pathMatch: 'full'},
  {path: 'log-in', component: LogInComponent},
  {path: 'note-list', component: NoteListComponent},
  {path: 'note-page', component: NotePageComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
