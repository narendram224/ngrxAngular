import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { ReadComponent } from './components/read/read.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{path:'todo',component:ReadComponent},
{path:'',redirectTo:'todo',pathMatch:'full'},
{path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
