import { Injectable, EventEmitter } from "@angular/core";
import { UserData } from "../common_storage/userData.model";
import { LoggingService } from "./loggingService.service";

@Injectable()
export class AccountsService {
    userData: UserData[] = [
        new UserData('Naveen', 'Active'), 
        new UserData('Anjali', 'Active'),
    ];

    statusUpdate = new EventEmitter<string>();

    constructor(private LoggingService: LoggingService) {}

    addNewUser(userName: string, userStatus: string) {
        this.userData.push(new UserData(userName, userStatus));
        this.LoggingService.logUserAdded(userName, userStatus);
    }

    updateStatus(id: number, status: string) {
        this.userData[id].userStatus = status;
        this.LoggingService.logStatus(status);
    }
}