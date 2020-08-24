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
    noteOwner: new FormControl('')
  })
  createNewNote(data) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
        .collection("library")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  updateNote(data) {
    return this.firestore
      .collection("library")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }



  getNotes() {
    return this.firestore.collection("library").snapshotChanges();
  }



  deleteNote(data) {
    return this.firestore.collection("library").doc(data.payload.doc.id).delete();
  }
}
