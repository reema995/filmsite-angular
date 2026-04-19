import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

type ScreenId =
  | 'dashboard'
  | 'projects'
  | 'workers'
  | 'attendance'
  | 'salary'
  | 'approvals'
  | 'reports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  activeScreen: ScreenId = 'dashboard';
  private readonly titles: Record<ScreenId, [string, string]> = {
    dashboard: ['\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645', 'Overview'],
    workers: ['\u0633\u062C\u0644 \u0627\u0644\u0639\u0645\u0627\u0644', 'Workers'],
    attendance: ['\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062D\u0636\u0648\u0631', 'Attendance'],
    salary: ['\u0627\u0644\u0631\u0648\u0627\u062A\u0628', 'Payroll'],
    approvals: ['\u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F\u0627\u062A', 'Approvals'],
    reports: ['\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631', 'Reports'],
    projects: ['\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639', 'Projects'],
  };
  get pageTitle(): string {
    return this.titles[this.activeScreen][0];
  }
  get pageCrumb(): string {
    return this.titles[this.activeScreen][1];
  }
  showScreen(screen: ScreenId): void {
    this.activeScreen = screen;
  }
}
