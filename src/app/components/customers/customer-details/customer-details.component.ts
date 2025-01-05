import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
declare const tt : any;

@Component({
  selector: 'app-customer-details',
  imports: [],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit(): void {
    // Ensure that the address is formatted correctly for Google Maps
    this.data.address = this.data.address.replace(',', ', ');
    console.log(this.data.address);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Initialize the map
    const map = tt.map({
      key: 'Nwa8Az7MFfMHLGCGkqXAoL8X7h4YiCeU',
      container: 'map',
      center: [0, 0], // Initial center
      zoom: 14
    });

    // Geocode the address and set the map view
    this.geocodeAddress(this.data.address).then(coordinates => {
      map.setCenter(coordinates);
      new tt.Marker().setLngLat(coordinates).addTo(map);
    });
  }

  private geocodeAddress(address: string): Promise<number[]> {
    const url = `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(address)}.json?key=Nwa8Az7MFfMHLGCGkqXAoL8X7h4YiCeU`;
    console.log(url);
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const position = data.results[0].position;
        console.log([position.lon, position.lat]);
        return [position.lon, position.lat];
      });
  }
   
}
