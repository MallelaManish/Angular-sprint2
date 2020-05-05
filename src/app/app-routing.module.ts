import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewStatusComponent } from './view-status/view-status.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { LogoutComponent } from './logout/logout.component';
import { BackgroundofficerComponent } from './backgroundofficer/backgroundofficer.component';
import { SearchDocumentComponent } from './search-document/search-document.component';
import { SetStatusComponent } from './set-status/set-status.component';
import { StatusListComponent } from './status-list/status-list.component';

const routes: Routes = [
{ path:'', redirectTo:'/login', pathMatch:'full'},
{ path:'login', component: LoginComponent },
{path:'employee', component: EmployeeComponent,
     children:[
                {path:'viewStatus', component: ViewStatusComponent},
                {path:'UploadDocument', component:UploadDocumentComponent},
              ]
},
{path:'officer',component:BackgroundofficerComponent,
children: [
            {path:'setStatus',component:SetStatusComponent},
            {path:'searchDocument',component:SearchDocumentComponent},
            {path:'statusList',component:StatusListComponent}	
           ]
},
{path:'Logout',component:LogoutComponent },
{ path:"**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
[
LoginComponent,EmployeeComponent,ViewStatusComponent,UploadDocumentComponent,
LogoutComponent,BackgroundofficerComponent,SetStatusComponent,
SearchDocumentComponent,StatusListComponent,PageNotFoundComponent
]