import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessageState } from './ctrmessage.state';

export const CREATE_POST_STATE = 'posts';

const createPostsState = createFeatureSelector<MessageState>(CREATE_POST_STATE);

export const createPosts = createSelector(createPostsState, (state) => {
  return state;
});
