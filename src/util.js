import { extname } from 'path';

/**
 * affix文字列の先頭と末尾にstrを追加した文字列を返す
 * @param {*} str 
 * @param {*} affix 
 * @returns {string}
 */
const appendAffix = (str, affix) => {
  return `${affix}${str}${affix}`;
};

/**
 * ファイルパスを受け取り、ファイルの拡張子を取得する
 * @param {string} filePath 
 * @returns {string}
 */
const getExtension = filePath => extname(filePath);

export {
  appendAffix,
  getExtension
};