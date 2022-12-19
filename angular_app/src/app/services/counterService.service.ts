export class CounterService {
    activeToInactive: number = 0;
    inactiveToActive: number = 0;

    incrementActiveToInactive() {
        this.activeToInactive++;
        console.log("No. of times changed: " + this.activeToInactive);
    }

    incrementInactiveToActive() {
        this.inactiveToActive++;
        console.log("No. of times changed: " + this.inactiveToActive);
    }
}