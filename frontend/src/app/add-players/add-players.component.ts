import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {
  players: any = []

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(player: any){
    
    //this.players.push(player)
    this.http.post("http://localhost:3000/addPlayers",player)
    .subscribe((result)=>{
      console.warn(result)
    })
    console.log(player)
    alert("Player added")

  }
}
