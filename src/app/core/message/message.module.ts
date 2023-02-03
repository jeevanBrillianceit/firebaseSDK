import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/material/material.module';
import { MessageTrimPipe } from 'src/app/pipes/messageTrim';
import { CreateMessageModule } from '../dialog/create-message/create-message.module';
import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { GetPostsEffects } from './state/message.effects';
import { postsReducer } from './state/message.reducer';
import { GET_MESSAGE_STATE } from './state/message.selectors';

@NgModule({
  declarations: [MessageComponent, MessageTrimPipe],
  imports: [
    CommonModule,
    MessageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CreateMessageModule,
    StoreModule.forFeature(GET_MESSAGE_STATE, postsReducer),
    EffectsModule.forFeature([GetPostsEffects]),
  ],
  providers: [],
})
export class MessageModule {}
