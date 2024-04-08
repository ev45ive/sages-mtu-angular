import { Component } from '@angular/core';

@Component({
  selector: 'app-playlists-details',
  templateUrl: './playlists-details.component.html',
  styleUrl: './playlists-details.component.scss',
})
export class PlaylistsDetailsComponent {
  playlist = {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Ala ma kota',
  };
}
