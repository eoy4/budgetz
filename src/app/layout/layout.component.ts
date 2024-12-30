import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, TopBarComponent, SidebarComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  @ViewChild('offcanvasWrapper', { static: true }) offcanvasWrapper: ElementRef | undefined;

  constructor() { }


  ngOnInit(): void {
    this.offcanvasWrapper?.nativeElement?.classList.add()
  }
}
