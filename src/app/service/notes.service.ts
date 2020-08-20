import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private firestore: AngularFirestore) {
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
