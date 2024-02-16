import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  games!: string[];

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.games = ["Magic the Gathering"];
  }

  navigate(gameName: string): void {
    let gameUrl: string = "";

    switch(gameName) {
      case "Magic the Gathering":
        gameUrl = "mtg";
        break;
    };

    this.router.navigate([`/games/${gameUrl}`]);
  }

}
