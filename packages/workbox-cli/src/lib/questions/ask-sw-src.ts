/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

import {prompt, Answers} from 'inquirer';
import {oneLine as ol} from 'common-tags';

// The key used for the question/answer.
const name = 'swSrc';

/**
 * @return {Promise<Object>} The answers from inquirer.
 */
function askQuestion(): Promise<Answers> {
  return prompt([{
    name,
    message: ol`Where's your existing service worker file? To be used with
      injectManifest, it should include a call to
      'self.__WB_MANIFEST'`,
    type: 'input',
  }]);
}

export const askSWSrc = async () => {
  const answers = await askQuestion();
  return answers[name].trim();
};
