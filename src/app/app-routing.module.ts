import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent} from './welcome.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './home/events/events.component';
import { FriendsComponent } from './home/friends/friends.component';
import { PaymentsComponent } from './home/payments/payments.component';
import { RequestsComponent } from './home/requests/requests.component';
import { EventsCreateDialogComponent } from './home/events/events-create-dialog/events-create-dialog.component';
import { GiftsComponent } from './home/events/gifts/gifts.component';
import {GiftsCreateDialogComponent} from './home/events/gifts/gifts-create-dialog/gifts-create-dialog.component';
import {MembersDialogComponent} from './home/events/members-dialog/members-dialog.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: WelcomeComponent.URL},
    {path: WelcomeComponent.URL, component: WelcomeComponent},
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
    GiftsComponent,
    HomeComponent,
    PaymentsComponent,
    RequestsComponent,
    WelcomeComponent
  ];

  static DIALOGS = [
    EventsCreateDialogComponent,
    GiftsCreateDialogComponent,
    MembersDialogComponent
  ];
}
