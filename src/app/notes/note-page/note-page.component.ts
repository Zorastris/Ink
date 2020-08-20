import {Component, OnInit} from '@angular/core';
import {NotesComponent} from '../notes.component';
import {Note} from '../note.model';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.css']
})
export class NotePageComponent implements OnInit {
  title: string;
  text: string;


  constructor(private notesComp: NotesComponent) {
  }

  ngOnInit(): void {
  }

  saveBtn(title: string, text: string): void {
    if(title === "" ){
      title = "Untitled Note";
      this.notesComp.addNote(new Note(title, text));
    }else if (title !== "" && text !== ""){
      this.notesComp.addNote(new Note(title, text));
    }


  }

  delBtn(): void {

  }
}
