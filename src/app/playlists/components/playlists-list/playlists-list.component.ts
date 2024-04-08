import { Component, Input } from '@angular/core';
import { Playlist } from './Playlist';

@Component({
  selector: 'app-playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrl: './playlists-list.component.scss',
})
export class PlaylistsListComponent {
  
  @Input('items') playlists: Playlist[] = [];
  
  selectedId = '';

  select(id: string) {
    this.selectedId = id;
  }
}
