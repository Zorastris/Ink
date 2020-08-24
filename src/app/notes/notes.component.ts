import {Component, OnInit} from '@angular/core';
import {Note} from './note.model';
import {NotesService} from '../service/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [
    new Note('Usage Guide', 'Start a note by clicking the plus sign below'),
    new Note('Hello world', 'Bla bla'),
    new Note('Lorem Ipsum', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      ' Donec efficitur neque non lectus bibendum, sed elementum odio facilisis. Suspendisse eu pharetra nibh. Su' +
      'spendisse finibus tincidunt eleifend. Ut ut ligula vel eros gravida accumsan at sit amet nulla. Nulla pharetra tri' +
      'stique efficitur. Vestibulum pretium magna ipsum, in di' +
      'gnissim mauris varius nec. Integer pulvinar tellus ante, id facilisis leo porttitor' +
      ' tristique. In quis justo eros. Integer sit a'
    )];

  constructor(private noteService: NotesService) {
  }

  ngOnInit(): void {
  }


  newNote = [];


  addNote = note => this.newNote.push(note);

  removeNote = Note => {
    let index = this.newNote.indexOf(Note);
    if (index > -1) {
      this.newNote.splice(index, 1);
    }
  };


  onSubmit() {
    this.noteService.form.value.newNote = this.newNote;
    let data = this.noteService.form.value;
    this.noteService.createNewNote(data).then(res => {
      /*do something here....
      maybe clear the form or give a success message*/
    });
  }


}
