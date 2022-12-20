import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReducerComponent } from './components/reducer/reducer.component';

const routes: Routes = [{ path: 'reducer', component: ReducerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
