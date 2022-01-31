import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturedModuleModule } from '../feature/featured-module.module';
import { CoursesComponent } from './courses/courses.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'courses',component:CoursesComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent}
]

@NgModule({
  declarations: [
    AboutUsComponent,
    HomeComponent,
    CoursesComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FeaturedModuleModule
  ]

})
export class SharedModule { }
