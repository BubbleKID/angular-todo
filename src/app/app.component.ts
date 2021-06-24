import { Component } from '@angular/core';
import { faPlus, faTrashAlt, faCheck, faCircle, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Todo List App';
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;
  faCheck = faCheck;
  faCircle = faCircle;
  faPen = faPen;
  filter: 'all' | 'active' | 'done' = 'all';
  allItems = [
    { description: 'eat', done: true, edit: false },
    { description: 'sleep', done: false, edit: false },
    { description: 'play', done: false, edit: false },
    { description: 'laugh', done: false, edit: false },
  ];
  errorMessage:string = '';

  addItem(description:string) {
    if(description === '') {
      this.errorMessage = 'Please enter your task.'
    } else {
      this.allItems.unshift({
        description,
        done: false,
        edit: false
      });
      this.errorMessage = ''
    }
  }

  removeItem(index:number) {
    this.allItems.splice(index, 1);
  }

  editItem(index:number) {
    this.allItems[index].edit = true;
  }

  saveItem(index:number) {
    this.allItems[index].edit = false;
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
