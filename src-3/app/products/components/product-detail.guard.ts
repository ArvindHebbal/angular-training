/*===============================================================================*/
/*********************************************************************************/
/**
 * @fileOverview To determine whether the route is valid and 
 * if user can be redirected to next page.
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

import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProductDetailGuard implements CanActivate {

    constructor(private router: Router) {}
    
    // Detarmine whether user can be allowed to move to next route
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const id = +next.url[1].path;
        if (isNaN(id) || id < 1) {
          alert('Invalid product Id');
          this.router.navigate(['/products']);
          return false;
        }
        return true;
    }
}
