#!/usr/bin/env node
// Copyright 2017-2022 @polkadot/dev authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { execNode } from './execute.mjs';

execNode('polkadot-dev-exec-rollup', 'rollup/dist/bin/rollup');
