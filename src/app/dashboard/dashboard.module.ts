import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
  ],
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent]
})
export class DashboardModule { }
