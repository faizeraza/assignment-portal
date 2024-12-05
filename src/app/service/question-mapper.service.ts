import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionMapperService {
  private questionsMapUrl = './assets/questionsData.json'; // Path to the JSON file

  constructor(private http: HttpClient) {}

  getAnswer(questionNumber: string): Observable<string> {
    return this.http.get<Record<string, string>>(this.questionsMapUrl).pipe(
      map((questionsMap) => {
        if (questionNumber in questionsMap) {
          return questionsMap[questionNumber];
        } else {
          throw new Error('Question number not found');
        }
      }),
      catchError((error) => {
        console.error('Failed to load questions data:', error);
        return throwError(() => new Error('Error fetching question data'));
      })
    );
  }
}
