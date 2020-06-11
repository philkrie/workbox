/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

import * as assert from 'assert';
import {prompt, Answers} from 'inquirer';
import {oneLine as ol} from 'common-tags';

import {constants} from '../constants';
import {errors} from '../errors';

// The key used for the question/answer.
const name = 'configLocation';

/**
 * @return {Promise<Object>} The answers from inquirer.
 */
function askQuestion(): Promise<Answers> {
  return prompt([{
    name,
    message: ol`Where would you like to save these configuration options?`,
    type: 'input',
    default: constants.defaultConfigFile,
  }]);
}

export const askConfigLocation = async () => {
  const answers = await askQuestion();
  const configLocation: string = answers[name].trim();

  assert(configLocation, errors['invalid-config-location']);

  return configLocation;
};
