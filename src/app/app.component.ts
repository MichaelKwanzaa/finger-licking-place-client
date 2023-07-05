import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finger-licking-place-client';
  @ViewChild('juices') public juices!: ElementRef;
  @ViewChild('menu') public menu!: ElementRef;
  @ViewChild('contact') public contact!: ElementRef;

  isOpen: boolean = false;
  
  constructor(private router: Router){
    this.isOpen = false;
  }

  handleMenu(){
    this.isOpen = !this.isOpen;
  }

  goHome(){
    this.router.navigate(["/"]);
    this.isOpen = false;
  }

  goToJuices(){
    this.juices.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    this.isOpen = false;

  }

  goToMenu(){
    this.menu.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    this.isOpen = false;

  }

  goToContact(){
    this.contact.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    this.isOpen = false;

  }
}
