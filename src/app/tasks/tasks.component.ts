import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({required: true}) name!: string;
  tasks = [
    {
      id: 't1',
      userId : 'u1',
      title: 'Master Angular',
      summary: 'Learn basic & advanced features of Angular and how to apply them.',
      dueDate: '2025-12-31'
    }
  ];

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId)
  }
}
