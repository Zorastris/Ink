import { Component, OnInit } from '@angular/core';
import {NotesComponent} from '../notes.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  title: string;
  text: string;


  constructor(public notesComp: NotesComponent) { }

  ngOnInit(): void {
  }

  // bringNote(note1: Note): void {
  //   this.title = this.Note.title;
  //
  // }
}
