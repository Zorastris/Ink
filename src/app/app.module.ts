import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NoteListComponent} from './notes/note-list/note-list.component';
import {LogInComponent} from '../log-in/log-in.component';
import {NotesComponent} from './notes/notes.component';
import {NotePageComponent} from './notes/note-page/note-page.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    LogInComponent,
    NotePageComponent,
    NotesComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [NotesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
