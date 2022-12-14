import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html"
})
export class ServerComponent{
    public serverID: number = 15987;
    private serverStatus: String = "Online";

    public getServerStatus() {
        return this.serverStatus;
    }

    public getServerID() {
        return this.serverID;
    }
}