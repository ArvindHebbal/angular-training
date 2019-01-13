/*===============================================================================*/
/*********************************************************************************/
/**
 * @fileOverview Fetch details of single product by id
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../model/product';
import { ProductService } from '../services/product.service';

@Component({
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  
  // Title of the page
  private pageTitle: string = 'Product Detail';
  // Error message to diplay if any error occurs
  private errorMessage: string = '';
  // Instance of a product
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
  }

  ngOnInit() {
    // Get id from angular route
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      // Get product details from id
      this.getProduct(id);
    }
  }

  /**
   * Get and store single product details
   * @params {number} id id of the product whose details are to be fetched
   */
  getProduct(id: number) {
    // Get product details from service
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  /*
   * Navigates user to products list page
   */
  onBack(): void {
    // Navigate back to 'products' route
    this.router.navigate(['/products']);
  }

}
