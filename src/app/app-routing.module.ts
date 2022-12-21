import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieappComponent } from './components/movieapp/movieapp.component';
import { MoviepageComponent } from './components/movieapp/moviepage/moviepage.component';
import { ReducerComponent } from './components/reducer/reducer.component';
import { TasksComponent } from './components/Task/tasks/tasks.component';

const routes: Routes = [
  { path: 'reducer', component: ReducerComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'movie', component: MovieappComponent },
  { path: 'moviePage', component: MoviepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
