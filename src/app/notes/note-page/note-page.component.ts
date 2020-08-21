import {Component, OnInit} from '@angular/core';
import {NotesComponent} from '../notes.component';
import {Note} from '../note.model';
import {NotesService} from '../../service/notes.service';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.css']
})
export class NotePageComponent implements OnInit {
  title: string;
  text: string;


  constructor(public notesComp: NotesComponent, public notesService: NotesService) {
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
