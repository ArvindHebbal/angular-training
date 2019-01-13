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
  // Variable to show or hide image
  private showImage: boolean = false;
  // Error message to diplay if any error occurs
  private errorMessage: string = '';
  // String used to filter message
  private listFilterString: string = '';
  // List of products after filtering
  private filteredProducts: IProduct[] = [];
  // List of products
  private products: IProduct[] = [];

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    // Fetch products list
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }
  
  /**
   * used to find list filter
   * @returns {string} returns list filter
   */
  get listFilter(): string {
    return this.listFilterString;
  }
  
  /**
   * used to set list filter
   * @returns {array} filteredProducts array of products which gets filtered
   */
  set listFilter(value: string) {
    this.listFilterString = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  /*
   * Edit message when clicked on message
   * @params {string} message page title to be replaced when clicked on rating
   */
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  /**
   * Display those products which has filter string
   * @params {String} filterBy string used to filter products
   * @returns {Array} returns array of products obtained after filtering data
   */
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
  /**
   * Alternatively hides and show image on executed
   */
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
