import { Component } from '@angular/core';
import { mockPlaylists } from '../../components/playlists-list/mockPlaylists';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrl: './playlists-view.component.scss',
})
export class PlaylistsViewComponent {
  mode: 'details' | 'editor' = 'details';
  
  playlists = mockPlaylists;
  selectedId = '234';

  showDetails() {
    this.mode = 'details';
  }

  showEditor() {
    this.mode = 'editor';
  }
}
