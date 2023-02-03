import { sharedReducer } from './shared/shared.recuder';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedState } from './shared/shared.state';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  // posts: EmployeeAttendancePostsState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
  // posts: postsReducer,
};
