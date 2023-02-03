import { createAction, props } from '@ngrx/store';
import { IMessageData } from 'src/app/interface/IMessage';

export const LOAD_POSTS = '[posts page] load posts';
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success';


export const loadPosts = createAction(
  LOAD_POSTS,
);

export const loadPostsSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ getMessage:IMessageData[] }>()
);
