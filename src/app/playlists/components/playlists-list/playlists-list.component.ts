import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() selectedIdChange = new EventEmitter<Playlist['id']>();

  select(id: string) {
    this.selectedIdChange.emit(id);
  }
}
