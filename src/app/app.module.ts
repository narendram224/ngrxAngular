import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './reducers/todo-reducer';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ReadComponent } from './components/read/read.component';
import { reducer } from './reducers/Tutorial.reducer';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './shared/auth.service';
import { environment } from 'src/environments/environment';
import { ShoppingReducer } from './reducers/shopping.reducer';
import { ApiService } from './shared/api.service';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingEffect } from './effect/shoping.effect';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent,
    ReadComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule,FormsModule,EffectsModule.forRoot([ShoppingEffect]),
    AppRoutingModule,StoreModule.forRoot({shopping:ShoppingReducer}),
    StoreDevtoolsModule.instrument({maxAge:25,logOnly:environment.production})
  ],
  providers: [AuthService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
