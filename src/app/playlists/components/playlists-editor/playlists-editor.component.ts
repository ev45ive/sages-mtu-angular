import { Component } from '@angular/core';

@Component({
  selector: 'app-playlists-editor',
  templateUrl: './playlists-editor.component.html',
  styleUrl: './playlists-editor.component.scss',
})
export class PlaylistsEditorComponent {
  playlist = {
    id: '123',
    name: 'Playlist 123',
    public: false,
    description: 'Ala ma kota',
  };
}
