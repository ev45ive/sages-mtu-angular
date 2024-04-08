import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { mockPlaylists } from './mockPlaylists';
import { Playlist } from './Playlist';

@Component({
  selector: 'app-playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrl: './playlists-list.component.scss',
})
export class PlaylistsListComponent {
  // playlists: Playlist[] | undefined
  // playlists?: Playlist[] 
  
  playlists: Playlist[] = []
  selectedId = '';

  select(id: string) {
    this.selectedId = id;
  }
}
