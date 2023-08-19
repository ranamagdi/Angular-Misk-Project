import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component'
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { ToursComponent } from './Components/tours/tours.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { LiveboardComponent } from './Components/liveboard/liveboard.component';
import { OffersComponent } from './Components/offers/offers.component';
import { DestinationsComponent } from './Components/destinations/destinations.component';
import { BookSectionComponent } from './Components/book-section/book-section.component';
import { AccommdationComponent } from './Components/accommdation/accommdation.component';
import { PrevDirective } from './prev.directive';
import { NextDirective } from './next.directive';
import { SwiperModule } from 'swiper/angular';
import { SphereComponent } from './Components/sphere/sphere.component';
import { SphereFooteComponent } from './Components/sphere-foote/sphere-foote.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    ToursComponent,
    ClientsComponent,
    LiveboardComponent,
    OffersComponent,
    DestinationsComponent,
    BookSectionComponent,
    AccommdationComponent,
    PrevDirective,
    NextDirective,
    SphereComponent,
    SphereFooteComponent,





  ],
  imports: [
    BrowserModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
