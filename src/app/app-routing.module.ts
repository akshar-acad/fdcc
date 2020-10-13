import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { UserResolveServiceService } from './resolvers/user-resolve-service.service';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  
{
  path: '',
component: LoginComponent 
},
{
  path: 'login',
component: LoginComponent               
},
{
  path: 'view-users',
component: ViewUsersComponent,   
canActivate: [AuthGuard]               

},
{
  path: 'modify-user/:user_id',
component: ModifyUserComponent,
canActivate: [AuthGuard],          

resolve: {
  user: UserResolveServiceService
}               
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
