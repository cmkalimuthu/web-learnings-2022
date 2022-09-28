import { Injectable } from '@angular/core';
import {Task} from 'src/app/Task'
import { TASKS } from 'src/app/mock-tasks';
import {Observable,of} from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'

const httpOptions={
  headers:
    new HttpHeaders({
      'Content-Type':'application/json'
    })
  
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL ='http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks() : Observable<Task[]>{
    // const tasks=of(TASKS)
    // return tasks;
    return this.http.get<Task[]>(this.apiURL)
  }

  deleteTask(task:Task):Observable<Task>{
    const delUrl=`${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(delUrl)
  }
  updateTaskReminder(task:Task):Observable<Task>{
    const url=`${this.apiURL}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions)
  }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiURL,task,httpOptions)
  }
}

