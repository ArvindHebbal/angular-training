/*===============================================================================*/
/*********************************************************************************/
/**
 * @fileOverview App module file
 * @author Arvind Hebbal, arvind.hebbal@healthasyst.com
 * @copyright Copyright (c) 2018 Elear Solutions Tech Private Limited. All rights
 * reserved.
 * @license To any person (the "Recipient") obtaining a copy of this software and
 * associated documentation files (the "Software"):
 *
 * All information contained in or disclosed by this software is confidential
 * and proprietary information of Elear Solutions Tech Private Limited and all
 * rights therein are expressly reserved. By accepting this material the
 * recipient agrees that this material and the information contained therein is
 * held in confidence and in trust and will NOT be used, copied, modified,
 * merged, published, distributed, sublicensed, reproduced in whole or in part,
 * nor its contents revealed in any manner to others without the express
 * written permission of Elear Solutions Tech Private Limited.
 */
/*********************************************************************************/
/*===============================================================================*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star-component/star.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from '../app/products/pages/product-list.component';
import { ConvertToSpacesPipe } from '../app/pipes/convert-to-spaces.pipe';
import { RoutingModule } from './rating.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StarComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    CommonModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
