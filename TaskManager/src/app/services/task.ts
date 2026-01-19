import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Task } from "../models/task";

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http:HttpClient){}

  // GET
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.apiUrl}`);
  }

  // GET BY ID
  getTaskById(id:number): Observable<Task>{
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  // POST
  createTask(task:Task):Observable<Task>{
    return this.http.post<Task>(`${this.apiUrl}`, task);
  }

  // PUT
  updateTask(id:number, task:Task):Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  // DELETE
  deleteTask(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}