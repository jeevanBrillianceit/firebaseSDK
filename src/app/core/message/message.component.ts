import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMessageData } from 'src/app/interface/IMessage';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import { getLoading } from 'src/app/store/shared/shared.selector';
import { CreateMessageComponent } from '../dialog/create-message/create-message.component';
import { loadPosts } from './state/message.action';
import { getMessagePosts } from './state/message.selectors';

const ELEMENT_DATA: IMessageData[] = [];
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'name', 'message', 'date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  loading: Observable<boolean>;
  constructor(public dialog: MatDialog, private appStore: Store<AppState>) {}
  ngOnInit(): void {
    this.getMessage();
    this.loading = this.appStore.select(getLoading);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  getMessage() {
    this.appStore.dispatch(setLoadingSpinner({ status: true }));
    this.appStore.select(getMessagePosts).subscribe((message) => {
      if (message.getMessage.length) {
        this.dataSource.data = message.getMessage;
        this.appStore.dispatch(setLoadingSpinner({ status: false }));
      }
    });

    this.dataSource.sortingDataAccessor = (data: any, property: any) => {
      switch (property) {
        case 'id':
          return data.id;
        case 'name':
          return data.name;
        case 'message':
          return data.message;
        case 'date':
          return data.date;
        default:
          return data[property];
      }
    };
    this.dataSource.sort = this.sort;
    this.appStore.dispatch(loadPosts());
  }

  createMessageDialog() {
    this.appStore.dispatch(setLoadingSpinner({ status: true }));
    const dialogRef = this.dialog.open(CreateMessageComponent, {
      width: '650px',
    });
    dialogRef.afterOpened().subscribe((result) => {
      this.appStore.dispatch(setLoadingSpinner({ status: true }));
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.appStore.dispatch(setLoadingSpinner({ status: false }));
    });
  }
}
