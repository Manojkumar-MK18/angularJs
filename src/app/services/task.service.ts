import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksProsp } from '../moct.test';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  URL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getData(): Observable<TasksProsp[]> {
    return this.http.get<TasksProsp[]>(this.URL);
  }

  deleteTasks(task: TasksProsp): Observable<TasksProsp> {
    const url = `${this.URL}/${task?.id}`;
    return this.http.delete<TasksProsp>(url);
  }

  updateToggleTask(task: TasksProsp): Observable<TasksProsp> {
    const url = `${this.URL}/${task.id}`;
    return this.http.put<TasksProsp>(url, task, httpOptions);
  }

  addNewTask(task: TasksProsp): Observable<TasksProsp> {
    return this.http.post<TasksProsp>(this.URL, task, httpOptions);
  }

}
