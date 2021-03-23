import { getExtension } from 'util';
import { readFileSync } from 'fs';

/**
 * 
 * @param {string} configFilePath 
 * @returns 
 */
const readFile = filePath => {
  try {
    const fo = readFileSync(filePath, 'utf-8');
    return fo;
  } catch (error) {
    throw error;
  }
};

const readConfigFile = configFilePath => {
  const fileobj = readFile(configFilePath);
};