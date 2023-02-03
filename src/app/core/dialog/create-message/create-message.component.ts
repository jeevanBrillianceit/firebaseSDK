import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { MessageService } from 'src/app/service/message.service';
import { AppState } from 'src/app/store/app.state';
import { addMessagePost } from './state/ctrmessage.action';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss'],
})
export class CreateMessageComponent {
  createMessageForm!: FormGroup;
  currentDate = new Date();

  constructor(
    private messageService: MessageService,
    public dialogRef: MatDialogRef<CreateMessageComponent>,
    private fb: FormBuilder,
    private appStore: Store<AppState>,
    private fs: Firestore
  ) {
    this.messageForm();
  }

  ngOnInit(): void {}

  messageForm() {
    this.createMessageForm = this.fb.group({
      name: [undefined, [Validators.required]],
      message: [undefined, [Validators.required]],
      date: [this.currentDate],
    });
  }

  createMessageAction() {
    const { value } = this.createMessageForm;

    const data: any = {
      id: '',
      name: value.name,
      message: value.message,
      date: value.date,
    };

    // this.messageService.addMessage(data).then((message) => {
    //   if (message) {
    //     alert('Note Added Successfull');
    //   }
    // });
    this.appStore.dispatch(addMessagePost(data));
  }
}
