import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from 'src/app/models/interfaces/user';

import { Table } from 'primeng/table';

@Component({
    selector: 'app-user-list-page',
    templateUrl: './user-list-page.component.html',
    styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

    users: IUser[] = []

    countries: string[] = []

    loading: boolean = false;

    @ViewChild('user_table') user_table: Table | undefined;

    constructor() { }

    ngOnInit(): void {
    }

    applyFilterGlobal($event: any, stringVal: any) {
        this.user_table!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    }

    clear(table: Table) {
        table.clear();
    }
}
