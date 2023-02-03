import { IMessageData } from 'src/app/interface/IMessage';

export interface MessageState {
  addMessage: IMessageData[];
}

export const initialState: MessageState = {
  addMessage: [],
};
