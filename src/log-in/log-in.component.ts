import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logBtn(): void {
    this.router.navigate(['/note-list']);
  }
}
