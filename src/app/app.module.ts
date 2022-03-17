import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UsersService,
             PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
