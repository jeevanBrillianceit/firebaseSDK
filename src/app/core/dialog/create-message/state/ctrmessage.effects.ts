import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { MessageService } from 'src/app/service/message.service';
import { addMessagePost } from './ctrmessage.action';

@Injectable()
export class CreatePostsEffects {
  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}

  addMessagePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addMessagePost),
      mergeMap((action) => {
        console.log(action);
        return this.messageService.addMessage(action);
        // .pipe(
        //   map((addMessage:IMessageData) => {
        //     return addMessagePostSuccess({ addMessage });
        //   })
        // );
      })
    );
  });
}
