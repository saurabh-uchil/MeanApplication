import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  player :any = []
  users :any[] = []
  errorMsg = ''
  showSpinner: boolean = true
  constructor(private details : DetailsService) { }

  ngOnInit(): void {
    this.users = this.details.getEmployees()
    this.details.getPlayers().subscribe((data) =>{
      this.showSpinner = false
      this.player = data
    },(error)=>{this.errorMsg = error})

  }

}
