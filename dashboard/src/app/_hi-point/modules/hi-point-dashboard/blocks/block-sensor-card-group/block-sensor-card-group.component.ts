import { BACKPACK_HI } from "../../../../shared/backpack.class";
import { ViewChild, ViewEncapsulation } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
import { FakeSensorDataList } from "../../../../shared/data/sensor-card.data";

@Component({
	selector: "app-block-sensor-card-group",
	templateUrl: "./block-sensor-card-group.component.html",
	styleUrls: ["./block-sensor-card-group.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class BlockSensorCardGroupComponent implements OnInit {
	svgList = BACKPACK_HI.enums.svg;
	@ViewChild("swiper", { static: false }) swiper?: SwiperComponent;
	sensorCardList = [...FakeSensorDataList, ...FakeSensorDataList, ...FakeSensorDataList];
	constructor() {}
	ngOnInit(): void {}
	//
	prevSwiper() {
		this.swiper?.swiperRef.slidePrev();
	}
	nextSwiper() {
		console.log(this.swiper);
		this.swiper?.swiperRef.slideNext();
	}
}
