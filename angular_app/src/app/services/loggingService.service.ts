import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService {
    logStatus(status: string) {
        console.log('This account is now set to ' + status);
    }

    logUserAdded(userName: string, userStatus: string) {
        console.log("A user with name '" + userName + "' is added. And status set to '" + userStatus + "'");
    }
}