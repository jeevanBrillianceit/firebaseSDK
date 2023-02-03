import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessageState } from './message.state';

export const GET_MESSAGE_STATE = 'getposts';

const getPostsState = createFeatureSelector<MessageState>(GET_MESSAGE_STATE);

export const getMessagePosts = createSelector(getPostsState, (state) => {
  return state;
});
