import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent} from './welcome.component';
import { HomeComponent} from './home/home.component';

const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: WelcomeComponent.URL},
  // {path: WelcomeComponent.URL, component: WelcomeComponent},
  {
    path: HomeComponent.URL, component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static COMPONENTS = [
    HomeComponent,
    WelcomeComponent
  ];
}
