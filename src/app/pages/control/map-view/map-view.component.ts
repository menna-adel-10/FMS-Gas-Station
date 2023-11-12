import { Component } from '@angular/core';
import { TileUrlTemplateArgs } from "@progress/kendo-angular-map";
import { ShapeOptions } from "@progress/kendo-drawing";
import urbanAreas from './urban-areas.json';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent {

   center = [31.2, 29.9];

  tileSubdomains = ["a", "b", "c"];
  tileUrl = (e: TileUrlTemplateArgs): string =>
    `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;

  bubbles = urbanAreas;
  bubbleStyle: ShapeOptions = {
    fill: {
      color: "#fb5607",
      opacity: 0.5,
    },
    stroke: {
      width: 1,
      color: "black",
    },
  };
}

