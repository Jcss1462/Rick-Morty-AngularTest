import { Component } from '@angular/core';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { Character } from '../../interfaces/character';
import { RicknmortyapiService } from '../../services/ricknmortyapi.service';

@Component({
  selector: 'CharactersTable',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './characters-table.component.html',
  styleUrl: './characters-table.component.css'
})
export class CharactersTableComponent {
  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;
  characters: Character[] = [];

  constructor(private api: RicknmortyapiService) { }

  ngOnInit(): void {
    this.fetchNextPage();
  }

  fetchNextPage(): void {
    this.api.getNextPage().subscribe(
      response => {
        this.characters = response.results;
        this.hasNextPage = response.hasNextPage;
        this.hasPreviousPage = response.hasPreviousPage;
      },
      error => {
        console.error('Error fetching next page:', error);
      },
      () => {
        console.log('Next page fetch completed');
      }
    );
  }

  fetchPreviousPage(): void {
    this.api.getPreviousPage().subscribe(
      response => {
        this.characters = response.results;
        this.hasNextPage = response.hasNextPage;
        this.hasPreviousPage = response.hasPreviousPage;
      },
      error => {
        console.error('Error fetching next page:', error);
      },
      () => {
        console.log('Next page fetch completed');
      }
    );
  }
}
