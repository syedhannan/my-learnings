import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-web-worker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-worker.component.html',
  styleUrl: './web-worker.component.css',
})
export class WebWorkerComponent {
  isBackroundAqua: boolean = true;

  changeColor() {
    this.isBackroundAqua = !this.isBackroundAqua;
  }

  addNumbers() {
    let sum = 0;

    for (let i = 0; i <= 10000000000; i++) {
      sum = sum + i;
    }
    window.alert('sum is ' + sum);
  }

  addNumbersWithWebWorker() {
    // window.alert('sum is ' + sum);
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(
        new URL('./web-worker.worker', import.meta.url)
      );
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
        window.alert('sum is ' + data);
      };
      worker.postMessage('hannan');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
