import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupRoutingModule } from './setup-routing.module';

import { OwnerComponent } from './roles/owner/owner.component';
import { MemberComponent } from './roles/member/member.component';

@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule
  ],
  declarations: [ OwnerComponent, MemberComponent ]
})
export class SetupModule { }
