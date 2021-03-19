/**
 * YYYY … 1971 - 2037
 * MM … 01 - 12
 * DD … 01 - 31
 * hh … 00 - 23
 * mm … 00 - 59 
 * Correct Pattern:
 *  - 2021-12-01T13:00
 *  - 2021-12-01 13:00
 *  - 2021-12-01
 *  - 2021/12/01T13:00
 *  - 2021/12/01 13:00
 *  - 2021/12/01
 * Incorrect Pattern:
 *  - 1970/10/01T12:00
 *  - 2021/13/01 12:00
 *  - 2021/01/32
 *  - 2021-02-22T24:00
 *  - 2021-04-01 20:70
 */
const regexpDateTime = {
  'YYYY': '(19(7[1-9]|[8-9][0-9])|20([0-2][0-9]|3[0-7]))',
  'MM': '(0[1-9]|1[0-2])',
  'DD': '(0[1-9]|[1-2][0-9]|3[0-1])',
  'hh': '([0-1][0-9]|2[0-3])',
  'mm': '[0-5][0-9]'
};

const validateFormatDateTime = charDateTime => {
  const r = regexpDateTime;
  return new RegExp(
    '^' +
    `(${r['YYYY']}(\/|-)${r['MM']}(\/|-)${r['DD']}|` + // <YYYY-MM-DD>
    `${r['YYYY']}(\/|-)${r['MM']}(\/|-)${r['DD']}( |T)${r['hh']}:${r['mm']})` + // <YYYY-MM-DD hh:mm> or <YYYY-MM-DDThh:mm>
    '$'
  ).test(charDateTime);
};

export default validateFormatDateTime;