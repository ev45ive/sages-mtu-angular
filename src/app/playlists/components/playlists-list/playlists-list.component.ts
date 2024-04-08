import { Component } from '@angular/core';

@Component({
  selector: 'app-playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrl: './playlists-list.component.scss',
})
export class PlaylistsListComponent {
  playlists = [
    {
      id: '123',
      name: 'Playlist 123',
      public: false,
      description: 'Ala ma kota',
    },
    {
      id: '234',
      name: 'Playlist 234',
      public: true,
      description: 'super  kota',
    },
    {
      id: '34',
      name: 'Playlist 34',
      public: false,
      description: 'Ala ma kota',
    },
  ];
}
