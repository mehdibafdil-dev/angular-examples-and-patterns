import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { PerformanceMonitoringService } from '../services/monitoring.service';

@Injectable()
export class PerformanceInterceptor implements HttpInterceptor {
    constructor(private monitor: PerformanceMonitoringService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const startTime = performance.now();
        return next.handle(req).pipe(
            finalize(() => {
                const endTime = performance.now();
                this.monitor.logMetric('http_request_duration', endTime - startTime);
            })
        );
    }
}