import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistsViewComponent } from './containers/playlists-view/playlists-view.component';
import { PlaylistsListComponent } from './components/playlists-list/playlists-list.component';
import { PlaylistsDetailsComponent } from './components/playlists-details/playlists-details.component';
import { PlaylistsEditorComponent } from './components/playlists-editor/playlists-editor.component';

import { CheckboxModule } from 'primeng/checkbox';
import { SharedModule } from '../shared/shared.module'
@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistsViewComponent,
    PlaylistsListComponent,
    PlaylistsDetailsComponent,
    PlaylistsEditorComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    SharedModule
  ]
})
export class PlaylistsModule { }
