import { Component } from '@angular/core';
import { mockPlaylists } from '../../components/playlists-list/mockPlaylists';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrl: './playlists-view.component.scss',
})
export class PlaylistsViewComponent {
  mode: 'details' | 'editor' = 'details';

  playlistsData = mockPlaylists;

  selectedId = '234';
  selected = this.playlistsData[0];

  selectPlaylistById(id: string) {
    // this.selectedId = id;
    this.selected = this.playlistsData.find((p) => p.id == id)!;
  }

  showDetails() {
    this.mode = 'details';
  }

  showEditor() {
    this.mode = 'editor';
  }
}
