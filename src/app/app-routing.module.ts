import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent} from './welcome.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { FriendsComponent } from './friends/friends.component';
import { PaymentsComponent } from './payments/payments.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
   // {path: '', pathMatch: 'full', redirectTo: WelcomeComponent.URL},
   // {path: WelcomeComponent.URL, component: WelcomeComponent},
   {
    path: HomeComponent.URL, component: HomeComponent,
    children: [
      {path: EventsComponent.URL, component: EventsComponent},
      {path: FriendsComponent.URL, component: FriendsComponent},
      {path: PaymentsComponent.URL, component: PaymentsComponent},
      {path: RequestsComponent.URL, component: RequestsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static COMPONENTS = [
    EventsComponent,
    FriendsComponent,
    HomeComponent,
    PaymentsComponent,
    RequestsComponent,
    WelcomeComponent
  ];
}
