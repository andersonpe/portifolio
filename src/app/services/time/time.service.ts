import { Injectable, inject } from '@angular/core';
import { Utils } from '../../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

    getCurrentDate() {
        return new Date();
    }

    getCurrentTime(timezone: string, format: string = 'pt-BR',  baseTime: Date | null = null) {
        const date = Utils.isNullOrUndefined(baseTime) ? this.getCurrentDate() : baseTime; 
        return date.toLocaleTimeString(format, { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    }

}
