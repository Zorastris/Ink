import {Component, OnInit} from '@angular/core';
import {NotesComponent} from '../notes.component';
import {NotesService} from '../../service/notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  title: string;
  text: string;


  constructor(public notesComp: NotesComponent, private notesService: NotesService) {
  }

  ngOnInit() {
    this.getNotes();
  }

  noteOrders;

  getNotes = () => {
    this.notesService.getNotes().subscribe
    (res => (this.noteOrders = res));
  };

}
