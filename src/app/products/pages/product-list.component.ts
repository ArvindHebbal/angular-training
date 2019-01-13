/*===============================================================================*/
/*********************************************************************************/
/**
 * @fileOverview Obtains all the products and handles filtering
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
import { IProduct } from '../../model/product';
import { ProductService } from '../services/product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  // Title of page
  private pageTitle: string = 'Product List';
  // Width of image
  private imageWidth: number = 50;
  // Margin for image
  private imageMargin: number = 2;
  // Error message to diplay if any error occurs
  private errorMessage: string = '';
  // List of products
  private products: IProduct[] = [];

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    // Fetch products list
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
      },
      error => this.errorMessage = <any>error
    );
  }

  /*
   * Edit message when clicked on message
   * @params {string} message page title to be replaced when clicked on rating
   */
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
