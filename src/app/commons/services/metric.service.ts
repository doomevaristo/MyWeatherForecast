import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MetricService {
    public changeMetric = new Subject();
}