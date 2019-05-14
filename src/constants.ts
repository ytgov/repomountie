//
// Repo Mountie
//
// Copyright © 2018 Province of British Columbia
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
// Created by Jason Leach on 2018-10-01.
//

export const SCHEDULER_DELAY: number = 24 * 60 * 60 * 1000; // one day

export const COMMENT_TRIGGER_WORD = 'help';

export const GITHUB_ID = 'repo-mountie';

export const REPO_CONFIG_FILE = 'rmconfig.json';

export const HELP_DESK = {
  LICENSE_SUPPORT_USERS: ['jleach', 'kelpisland'],
};

export const PR_TITLES = {
  ADD_LICENSE: 'Add missing license',
};

export const BRANCHES = {
  ADD_LICENSE: 'fix/add-license',
};

export const TEMPLATES = {
  CONDUCT: 'templates/CODE_OF_CONDUCT.md',
  CONTRIBUTE: 'templates/CONTRIBUTING.md',
  LICENSE: 'templates/LICENSE',
  README: 'templates/README.md',
};

export const VALID_LICENSES = {
  APACHE: 'apache-2.0',
};

export const TEXT_FILES = {
  HOWTO_PR: 'templates/howto_pull_request.md',
  WHY_LICENSE: 'templates/why-license.md',
  STALE_COMMENT: 'templates/stale_issue_comment.md'
};

export const COMMANDS = {
  IGNORE: '/bot-ignore-length',
};

export const ALLOWED_INSTALLATIONS = ['bcgov'];

export const ALLOWED_SSO_CLIENTS = ['reggie-api'];
