import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MessageService } from 'src/app/service/message.service';
import { AppState } from 'src/app/store/app.state';
import {
  setErrorMessage,
  setLoadingSpinner,
} from 'src/app/store/shared/shared.action';
import { loadPosts, loadPostsSuccess } from './message.action';

@Injectable()
export class GetPostsEffects {
  constructor(
    private actions$: Actions,
    private messageService: MessageService,
    private appStore: Store<AppState>
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      mergeMap((action) => {
        return this.messageService.getMessages().pipe(
          map((getMessage) => {
            return loadPostsSuccess({ getMessage });
          }),
          catchError((errResp) => {
            console.log(errResp);
            this.appStore.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.messageService.getErrorMessage(
              errResp.error.error.message
            );
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });
}
