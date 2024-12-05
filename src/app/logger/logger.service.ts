import { Injectable } from '@angular/core';
import { environment } from '../environments/environmet';
// 

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: string): void {
    if (!environment.production) {
      console.log(`[LOG]: ${message}`);
    }
  }

  error(message: string): void {
    console.error(`[ERROR]: ${message}`);
  }

  warn(message: string): void {
    console.warn(`[WARNING]: ${message}`);
  }
}