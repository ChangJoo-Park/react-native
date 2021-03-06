/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

function log(stream, module) {
  return function() {
    const message = Array.prototype.slice.call(arguments).join(' ');
    stream.write(module + ': ' + message + '\n');
  };
}

module.exports.out = log.bind(null, process.stdout);
module.exports.err = log.bind(null, process.stderr);
