import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html'
})
export class CrudComponent {

  @Input() title = 'Title';
  @Input() columns: Array<String>;
  @Input() createAction = true;
  @Input() readAction = true;
  @Input() updateAction = true;
  @Input() deleteAction = true;
  @Input() editMembersAction = false;
  @Input() buyAction;
  @Output() create = new EventEmitter<any>();
  @Output() read = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() editMembers = new EventEmitter<any>();
  @Output() buy = new EventEmitter<any>();
  dataSource: MatTableDataSource<any>;

  @Input()
  set data(data: any[]) {
    this.dataSource = new MatTableDataSource<any>(data);
  }

  onCreate() {
    this.create.emit();
  }

  onRead(item) {
    this.read.emit(item);
  }

  onUpdate(item) {
    this.update.emit(item);
  }

  onDelete(item) {
    this.delete.emit((item));
  }

  onEditMembers() {
    this.editMembers.emit();
  }

  onBuy(item) {
    this.buy.emit(item);
  }
}
