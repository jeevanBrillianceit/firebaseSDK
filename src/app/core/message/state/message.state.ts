import { IMessageData } from 'src/app/interface/IMessage';

export interface MessageState {
  getMessage: IMessageData[];
}

export const initialState: MessageState = {
  getMessage: [],
};
