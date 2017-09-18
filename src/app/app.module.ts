import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { HeroDetailComponent } from './hero-detail.component';
// import { HeroesComponent } from './heroes.component';

// import { HeroService } from './hero.service';

const appRoutes: Routes =[
  // { 
  //   path: 'crisis-center',
  //   component: CrisisListComponent
  // },
  // {
  //   path: 'hero/:id', 
  //   component: HeroDetailComponent
  // },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data:{
  //          title: 'Heroes List'
  //        }  
  // },
  // {
  //   path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent 
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    // HeroDetailComponent,
    // HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes,{enableTracing: true})
  ],
  // providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
