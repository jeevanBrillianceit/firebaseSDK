import { loadPostsSuccess } from './message.action';
import { initialState } from './message.state';
import { createReducer, on } from '@ngrx/store';

const _postsReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, action) => {
    return {
      ...state,
      getMessage: action.getMessage
    };
  }),
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
