import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

NgFor;

const mockPlaylists = [
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
@Component({
  selector: 'app-playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrl: './playlists-list.component.scss',
})
export class PlaylistsListComponent {
  playlists = mockPlaylists;

  selectedId = '234';

  select(id: string) {
    this.selectedId = id;
  }
}
