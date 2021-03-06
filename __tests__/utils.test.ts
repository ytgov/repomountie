//
// Copyright © 2018, 2020 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Created by Jason Leach on 2018-10-04.
//

import { extractMessage, isJSON, loadTemplate } from '../src/libs/utils';

jest.mock('fs');

describe('Utility functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('A template can be loaded', async () => {
    const data = await loadTemplate('some-file');
    expect(data).not.toBeUndefined();
  });

  it('A file with no read access throws', async () => {
    await expect(loadTemplate('no-file-access')).rejects.toThrow(Error);
  });

  it('A non-existent template throws', async () => {
    await expect(loadTemplate('no-file')).rejects.toThrow(Error);
  });

  it('API error message extracted from Error message', () => {
    const err = new Error('{"message": "Hello World"}');
    const message = extractMessage(err);
    expect(message).toEqual('Hello World');
  });

  it('A string response is in JSON fromat', () => {
    const result = isJSON(JSON.stringify({ animal: 'cat' }));

    expect(result).toBeTruthy();
  });

  it('A string response is not in JSON format', () => {
    const result = isJSON('Hello World');

    expect(result).not.toBeTruthy();
  });

  it('A string response is extracted', () => {
    const error = new Error('A Message');
    const result = extractMessage(error);

    expect(result).toMatchSnapshot();
  });

  it('A JSON response is extracted', () => {
    const error = new Error(JSON.stringify({ message: 'A Message' }));
    const result = extractMessage(error);

    expect(result).toMatchSnapshot();
  });
});
