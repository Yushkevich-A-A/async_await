/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable consistent-return */

import read from './reader';
import json from './parser';

export class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const readResult = await read();
        const jsonResult = await json(readResult);
        return jsonResult;
      } catch (e) {
      }
    })();
  }
}
