import { Injectable } from '@angular/core';
import {
  addDoc,
  collectionData,
  doc,
  Firestore,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { IMessageData } from '../interface/IMessage';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private fs: Firestore) {}

  addMessage(message: any) {
    message.id = doc(collection(this.fs, 'id')).id;
    return addDoc(collection(this.fs, 'Message'), message);
  }

  getMessages(): Observable<IMessageData[]> {
    let messageRef = collection(this.fs, 'Message');
    return collectionData(messageRef, { idField: 'id' }) as Observable<
      IMessageData[]
    >;
  }

  getErrorMessage(message: string) {
    switch (message) {
      case 'MESSAGE_NOT_FOUND':
        return 'message Not Found';
      default:
        return 'Unknown error occurred. Please try again';
    }
  }
}
