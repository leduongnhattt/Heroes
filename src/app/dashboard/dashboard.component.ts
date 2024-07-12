import { HeroService } from './../hero.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  heroes: Hero [] = []
  constructor(private heroService: HeroService) {

  }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes = () => {
    this.heroService.getHeroes().subscribe((hero) => {
      this.heroes = hero.slice(1, 5);
  })
}

}
