import { createAction, props } from '@ngrx/store';
import { IMessageData } from 'src/app/interface/IMessage';

export const ADD_MESSAGE_POST = '[message posts page] add message posts';
export const ADD_MESSAGE_POST_SUCCESS =
  '[message posts page] add message posts success';

export const addMessagePost = createAction(
  ADD_MESSAGE_POST,
  props<{ addMessage: IMessageData }>()
);

export const addMessagePostSuccess = createAction(
  ADD_MESSAGE_POST_SUCCESS,
  props<{ addMessage: any; }>()
);
