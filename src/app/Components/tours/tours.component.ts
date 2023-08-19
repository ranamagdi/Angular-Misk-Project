import { Component, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar,SwiperOptions,Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Navigation, Pagination, Scrollbar]);


// install Swiper modules


@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
  encapsulation:ViewEncapsulation.None

})



export class ToursComponent {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay:{
      delay: 1000,
      disableOnInteraction: false,
    },
    speed:5000,
    loop:true,
    modules:[Autoplay, Pagination, Navigation]
  };




}
