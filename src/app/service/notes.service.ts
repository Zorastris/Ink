import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private firestore: AngularFirestore) {
  }

  form = new FormGroup({
    noteTitle: new FormControl(''),
    noteBody: new FormControl(''),
    createNote: new FormControl(''),
    completed: new FormControl(false)
  })
  getNotes() {
    return this.firestore.collection("notes").snapshotChanges();
  }

  createNotes(data) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
        .collection("notes")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }
}
