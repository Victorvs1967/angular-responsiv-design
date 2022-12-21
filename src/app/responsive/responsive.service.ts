import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ScreenSizeType } from './responsive.enum';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  constructor(breakpointObserver: BreakpointObserver) {

  }

  private _screenSize = ScreenSizeType.Unknown;
  public get screenSize(): ScreenSizeType {
    return this._screenSize;
  }

  private readonly screenSizeBreakpoints = new Map([
    [Breakpoints.XSmall, ScreenSizeType.XSmall],
    [Breakpoints.Small, ScreenSizeType.Small],
    [Breakpoints.Medium, ScreenSizeType.Medium],
    [Breakpoints.Large, ScreenSizeType.Large],
    [Breakpoints.XLarge, ScreenSizeType.XLarge],
  ]);

  private checkScreenSize(): void {
    
  }
}
