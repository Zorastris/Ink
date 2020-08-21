import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NoteListComponent} from './notes/note-list/note-list.component';
import {LogInComponent} from '../log-in/log-in.component';
import {NotesComponent} from './notes/notes.component';
import {NotePageComponent} from './notes/note-page/note-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {NotesService} from './service/notes.service';

const config = {
  apiKey: 'AIzaSyBTUV5760Wkn8J1D2Eyiif0EGvph7TfIYI',
  authDomain: 'ink-note.firebaseapp.com',
  databaseURL: 'https://ink-note.firebaseio.com',
  projectId: 'ink-note',
  storageBucket: 'ink-note.appspot.com',
  messagingSenderId: '1019291825311',
  appId: '1:1019291825311:web:a7f3151b9518bbd316deaa',
  measurementId: 'G-5LM98RKN30'


};

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
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    NotesComponent,
    NotesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
