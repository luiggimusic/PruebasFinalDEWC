import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {

  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  searchTerm: string = '';
  loading: boolean = true;
  error: string = '';

  constructor(
    private taskservice: TaskService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadTasks();
  }














  loadTasks(): void {
    this.loading = true;
    this.taskservice.getTasks().subscribe({
      next: (data) => {
        this.tasks = data.slice(0, 20);
        this.filteredTasks = this.tasks;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = 'Error al cargar los datos';
        this.loading = false;
        this.cdr.detectChanges();
        console.error(err);
      }
    })
  }

  filterTasks(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredTasks = this.tasks.filter(task =>
      task.title.toLowerCase().includes(term)
    );
  }


  deleteTask(task: Task): void {
    if (!task.id) return;

    const confirmed = confirm(`¿Eliminar "${task.title}"`);
    if (!confirmed) return;

    this.taskservice.deleteTask(task.id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
        this.filterTasks();
      },
      error: (err) => {
        this.error = 'Error al eliminar la tarea';
        console.error(err);
      }
    })
  }
}