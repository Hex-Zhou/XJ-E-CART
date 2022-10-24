import { BACKPACK_HI } from "../../../../../../shared/backpack.class";
import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { iiSensorCard } from "../../../../../../shared/models/sensor-card.model";

@Component({
	selector: "app-sensor-card",
	templateUrl: "./sensor-card.component.html",
	styleUrls: ["./sensor-card.component.scss"],
})
export class SensorCardComponent implements OnInit, OnChanges {
	svgList = BACKPACK_HI.enums.svg;
	@Input() color: string = "danger";
	@Input() data: iiSensorCard | null = null;
	constructor() {}
	// * * * * * life * * * * *
	ngOnChanges(changes: SimpleChanges): void {
		if (changes["data"] && changes["data"].isFirstChange()) {
			this.color = (changes["data"].currentValue as iiSensorCard).status ? "primary" : "danger";
		}
	}
	ngOnInit(): void {}
}
