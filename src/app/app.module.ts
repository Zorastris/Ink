import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NoteListComponent} from './notes/note-list/note-list.component';
import {LogInComponent} from '../log-in/log-in.component';
import {NotesComponent} from './notes/notes.component';
import {NotePageComponent} from './notes/note-page/note-page.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'note-list', component: NoteListComponent},
  {path: 'note-page', component: NotePageComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'log-in', component: LogInComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    LogInComponent,
    NotePageComponent,
    NotesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NotesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
