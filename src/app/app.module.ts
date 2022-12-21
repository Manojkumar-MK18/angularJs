import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Task/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/Task/tasks/tasks.component';
import { TasksItemComponent } from './components/Task/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/Task/add-task/add-task.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { ReducerComponent } from './components/reducer/reducer.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/reducer/reducers';
import { MovieappComponent } from './components/movieapp/movieapp.component';
import { LoginComponent } from './components/movieapp/login/login.component';
import { MoviepageComponent } from './components/movieapp/moviepage/moviepage.component';
import { MovieHeaderComponent } from './components/movieapp/movie-header/movie-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    MainHeaderComponent,
    ReducerComponent,
    MovieappComponent,
    LoginComponent,
    MoviepageComponent,
    MovieHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      count: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
