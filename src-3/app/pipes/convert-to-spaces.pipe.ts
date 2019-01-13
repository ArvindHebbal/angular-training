/*===============================================================================*/
/*********************************************************************************/
/**
 * @fileOverview Edits star rating character
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

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {

/**
 * Used to transform the string passed through the pipe. Replaces
 * specified character with pipe
 * @params {string} value value for which the pipe is applied
 * @params {string} character parameter passed to pipe
 * @returns {string} Transformed value
 */
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
