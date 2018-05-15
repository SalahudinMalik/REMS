import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerComponent } from './roles/owner/owner.component'
import { MemberComponent } from './roles/member/member.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Setups'
    },
    children: [
      {
        path: 'owner',
        component: OwnerComponent,
        data: {
          title: 'Owner'
        }
      },
      {
        path: 'member',
        component: MemberComponent,
        data: {
          title: 'Member'
        }
      }
      
    ]
 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
