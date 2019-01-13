/*===============================================================================*/
/*********************************************************************************/
/**
 * @fileOverview Obtains product, products and handles errors.
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProduct } from '../../model/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl: string = 'api/products/products.json';

  constructor(private http: HttpClient) { }
  
  /**
   * Fetches all products
   * @returns {array} array of products fetched
   */
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  /**
   * Fetches details of single product based on id.
   * @params {number} id id of product whose details are to be fetched
   */
  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    );
  }

  /**
   * If an error occurs while getting product details, this handles error
   * by providing appropriate message to user
   * @params {reponse} err error to be handles
   */
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handled it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
