import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-playlists-editor',
  templateUrl: './playlists-editor.component.html',
  styleUrl: './playlists-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // d-.-b
})
export class PlaylistsEditorComponent {
  playlist = {
    id: '123',
    name: 'Playlist 123',
    public: false,
    description: 'Ala ma kota',
  };

  constructor(private cdr:ChangeDetectorRef){
    // this.cdr.markForCheck()
    // this.cdr.detectChanges()
  }
}
