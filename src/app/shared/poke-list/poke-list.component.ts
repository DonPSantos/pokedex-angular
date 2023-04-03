import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent {
  constructor(private pokeApiService: PokeApiService) {}
  public getAllPokemons: any;
  public apiError: boolean = false;

  private setAllPokemons: any;

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      (res) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      (error) => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return res.name.includes(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
