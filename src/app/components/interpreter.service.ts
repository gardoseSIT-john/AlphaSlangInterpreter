import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InterpretResponse {
  original: string;
  translation: string;
  matches: string[];
}

@Injectable({ providedIn: 'root' })
export class InterpreterService {
  private http = inject(HttpClient);

  interpret(text: string): Observable<InterpretResponse> {
    return this.http.post<InterpretResponse>('/api/interpret', { text });
  }

  slangify(text: string): Observable<InterpretResponse> {
    return this.http.post<InterpretResponse>('/api/slangify', { text });
  }
}