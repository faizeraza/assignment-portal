import { Injectable } from '@angular/core';
import { environment } from '../environments/environmet';
// 

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(msg: string): void {
    if (!environment.production) {
      console.log(msg);
    }
  }
}