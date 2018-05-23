import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
  Input
} from "@angular/core";
import { MouseEvent } from "@agm/core";
import { FormControl } from "@angular/forms";
import {} from "googlemaps";
import { MapsAPILoader } from "@agm/core";
import { Local } from "protractor/built/driverProviders";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements OnInit {
  @Input() itiLocal;

  local;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search") public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    this.zoom = 12;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    this.searchControl = new FormControl();

    this.setCurrentPosition();

    if (!this.itiLocal) {
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(
          this.searchElementRef.nativeElement,
          {
            types: ["geocode"]
          }
        );
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
            this.local = autocomplete.getPlace();
          });
        });
      });
    }
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
