import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { MtgComponent } from './components/games/mtg/mtg.component';

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "games/mtg", component: MtgComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
