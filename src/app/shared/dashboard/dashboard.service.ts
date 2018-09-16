import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private breakpointObserver: BreakpointObserver) {}

  public drawCardsLayout() {
    return this.breakpointObserver.observe(Breakpoints.Handset);
  }
}
