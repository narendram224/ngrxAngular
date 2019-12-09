import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.mode';

export const login  = createAction(
    "[Login Page] User Login",
    props<{user:User}>()
    );
