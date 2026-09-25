import { Component, input, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeService } from '../../services/time/time.service';
// import { ThemeMode } from '../types';

@Component({
  selector: 'apds-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  private timeService = inject(TimeService);

  timeOlinda = signal('');
  timeJoaoPessoa = signal('');
  timeVancouver = signal('');
  currentYear = new Date().getFullYear();

  theme = input<any>('dark');

  

  email = '';
  subscribed = signal(false);

  private timerId: any;

  ngOnInit() {
    this.updateClocks();
    this.timerId = setInterval(() => this.updateClocks(), 1000);
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  updateClocks() {
    const now = new Date();
    const northeast = this.timeService.getCurrentTime('America/Recife', 'pt-BR', now);

    this.timeOlinda.set(northeast);
    this.timeJoaoPessoa.set(northeast);
    this.timeVancouver.set(this.timeService.getCurrentTime('America/Vancouver', 'pt-BR', now));
  }

  subscribe() {
    if (this.email) {
      this.subscribed.set(true);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
