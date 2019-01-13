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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/pages/product-list.component';
import { ProductDetailComponent } from './products/pages/product-detail.component';
import { ProductDetailGuard } from './products/components/product-detail.guard';

const ROUTES: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  // pathMatch 'full' means whole URL path needs to match and 
  // is consumed by route matching algorithm
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [
      RouterModule
   ] 
})
export class RoutingModule { };