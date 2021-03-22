#!/usr/bin/env node

import parseCommandLine from './parseCommandLine';

try {
  // コマンドライン引数のパース
  const argv = parseCommandLine();
  console.log(argv);
} catch (error) {
  console.error(error);
}