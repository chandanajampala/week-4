import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { SkillPageComponent } from './pages/skill-page/skill-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes:Routes = [
  {path : '',redirectTo:'/landing',pathMatch:'full'},
  {path:'landing',component: LandingPageComponent},
  {path:'skill',component: SkillPageComponent},
  {path:'contact',component: ContactPageComponent},
  
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

  })
export class AppRoutingModule { }
