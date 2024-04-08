import { Component, Input } from '@angular/core';
import { Playlist } from './Playlist';
import { PlaylistsViewComponent } from '../../containers/playlists-view/playlists-view.component';

@Component({
  selector: 'app-playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrl: './playlists-list.component.scss',
})
export class PlaylistsListComponent {
  @Input('items') playlists: Playlist[] = [];

  @Input() selectedId = '';

  select(id: string) {
    // this.selectedId = id; // Nono!
    this.parent.selectPlaylistById(id);
  }

  // Low cohesion, high coupling 
  constructor(private parent: PlaylistsViewComponent) {}

  // No provider for PlaylistsViewComponent!
}
