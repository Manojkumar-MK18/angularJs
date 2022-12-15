import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksProsp } from '../moct.test';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  URL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getData(): Observable<TasksProsp[]> {
    return this.http.get<TasksProsp[]>(this.URL);
  }
}
