import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }
  // a window wrapper for easy mocking
  getNativeWindow() {
    return window;
  }
}
