import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayersComponent } from './add-players/add-players.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  {path:'players',component:PlayersComponent},
  {path:'addPlayers',component:AddPlayersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
