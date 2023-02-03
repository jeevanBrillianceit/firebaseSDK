import { addMessagePostSuccess } from './ctrmessage.action';
import { initialState } from './ctrmessage.state';
import { createReducer, on } from '@ngrx/store';

const _createPostsReducer = createReducer(
  initialState,
  on(addMessagePostSuccess, (state, action) => {
    return {
      ...state,
      addMessage: [...state.addMessage],
    };
  })
);

export function createPostsReducer(state: any, action: any) {
  return _createPostsReducer(state, action);
}
