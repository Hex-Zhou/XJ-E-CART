import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { BACKPACK_HI } from "src/app/_hi-point/shared/backpack.class";
import { SwiperComponent } from "swiper/angular";
@Component({
	selector: "app-block-newest-photos",
	templateUrl: "./block-newest-photos.component.html",
	styleUrls: ["./block-newest-photos.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class BlockNewestPhotosComponent implements OnInit {
	@ViewChild("swiper", { static: false }) swiper?: SwiperComponent;
	imgList = BACKPACK_HI.enums.pic;
	constructor() {}
	ngOnInit(): void {}
	//
	prevPic() {
		this.swiper?.swiperRef.slidePrev();
	}
	nextPic() {
		this.swiper?.swiperRef.slideNext();
	}
}
