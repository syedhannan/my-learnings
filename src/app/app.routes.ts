import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/web-worker', pathMatch: 'full' },
  {
    path: 'web-worker',
    title: 'Web Worker Demo',
    loadComponent: () =>
      import('./components/web-worker/web-worker.component').then(
        (mod) => mod.WebWorkerComponent
      ),
  },
];
