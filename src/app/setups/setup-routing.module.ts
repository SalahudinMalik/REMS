import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerComponent } from './roles/owner/owner.component';
import { MemberComponent } from './roles/member/member.component';
import { AgentComponent } from './roles/agent/agent.component';
import { SupplierComponent } from './roles/supplier/supplier.component';


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
      },
      {
        path: 'agent',
        component: AgentComponent,
        data: {
          title: 'Agent'
        }
      },
      {
        path: 'supplier',
        component: SupplierComponent,
        data: {
          title: 'Supplier'
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
