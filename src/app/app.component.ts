import { Component } from '@angular/core';
import { faPlus, faTrashAlt, faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo List App';
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;
  faCheck = faCheck;
  faCircle= faCircle;
  filter: 'all' | 'active' | 'done' = 'all';
  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  addItem(description:string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  removeItem(index:number) {
    this.allItems.splice(index, 1);
  }

  checkItem(index:number) {
    this.allItems[index].done = !this.allItems[index].done;
  }

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }
}
