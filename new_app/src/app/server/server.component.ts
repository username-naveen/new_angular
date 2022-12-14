import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styles: [`
    .online {
        color: white;
    }
    `]
})
export class ServerComponent{
    private serverID: number = 15987;
    private serverStatus: String = "Online";

    public getServerStatus() {
        return this.serverStatus;
    }

    public getServerID() {
        return this.serverID;
    }

    public getColor() {
        return this.serverStatus === "Online" ? 'green' : 'red';
    }

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
    }
}