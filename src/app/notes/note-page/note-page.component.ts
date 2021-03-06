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
    this.getNotes();
  }

  saveBtn(): void {
    if (this.title === '') {
      this.title = 'Untitled Note';
      this.notesComp.onSubmit();
    } else if (this.title !== '' && this.text !== '') {
      this.notesComp.onSubmit();
    }
  }

  deleteBtn(): void {


  }

  deleteNote = data => this.notesService.deleteNote(data);

  noteOrders;

  getNotes = () => this.notesService.getNotes()
    .subscribe(res => (this.noteOrders = res));
}
