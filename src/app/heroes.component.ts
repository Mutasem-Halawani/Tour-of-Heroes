import { Component } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';

import { Router } from '@angular/router'

@Component({
    selector:'my-heroes',
    templateUrl:'./heroes.component.html', 
    styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent{

    constructor(
        private heroService: HeroService,
        private router:Router
    ){}

    ngOnInit(): void{
        this.getHeroes();
    }
    
    selectedHero: Hero;
    heroes: Hero[];

    onSelect(hero: Hero): void{
        this.selectedHero = hero;
    }

    getHeroes(): void{
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    gotoDetail(){
        this.router
            .navigate(['/detail',this.selectedHero.id]);
    }

}
