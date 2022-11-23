import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardItem,
  CardTitle,
} from './card/card';
import { MaterialModule } from './material.module';
import { AirComponent } from './components/air/air.component';
import { AudioComponent } from './components/audio/audio.component';
import { TempComponent } from './components/temperature/temp.component';
import { DisplayComponent } from './components/display/display.component';
import { LightComponent } from './components/light/light.component';
import { DigispaceServiceService } from './digispace-service.service';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Card,
    CardActions,
    CardItem,
    CardTitle,
    CardHeader,
    CardContent,
    AirComponent,
    AudioComponent,
    TempComponent,
    DisplayComponent,
    LightComponent,
  ],
  bootstrap: [AppComponent, AirComponent],
  providers: [DigispaceServiceService],
})
export class AppModule {}
