import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMessageComponent } from './create-message.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateMessageRoutingModule } from './create-message-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CREATE_POST_STATE } from './state/ctrmessage.selectors';
import { CreatePostsEffects } from './state/ctrmessage.effects';
import { createPostsReducer } from './state/ctrmessage.reducer';

@NgModule({
  declarations: [CreateMessageComponent],
  imports: [
    CommonModule,
    CreateMessageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(CREATE_POST_STATE, createPostsReducer),
    EffectsModule.forFeature([CreatePostsEffects]),
  ]
})
export class CreateMessageModule { }
