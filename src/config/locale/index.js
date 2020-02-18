const date = new Date('2018-11-25');

// Use English as it's used in the USA
new Intl.DateTimeFormat('en-US').format(date); // "11/25/2018"

// Use the Japanese calendar in date and time formatting:
// Btw, we can omit 'new' keyword
Intl.DateTimeFormat('ja-JP-u-ca-japanese').format(date); //"30/11/25"

// Use German as it's used in Germany
new Intl.DateTimeFormat('de').format(date); // "25.11.2018"

// Use traditional Chinese as it's used in China
new Intl.DateTimeFormat('zh-CN').format(date); // "2018/11/25"

// Use Arabic as it's used in Oman
new Intl.DateTimeFormat('ar-om').format(date); // "٢٥‏/١١‏/٢٠١٨"

const date = new Date('2018-11-25');
const locale = 'zh-Hans-CN-bauddha-u-nu-hanidec';
const formatter = new Intl.DateTimeFormat(locale);
const formattedDate = formatter.format(date); // "二〇一八/一一/二五"

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  weekday: 'long',
  hour12: true,
  timeZone: 'America/Los_Angeles'
};

// "Wednesday, February 6, 2019, 2:15:01 AM"
new Intl.DateTimeFormat('en-US', options).format(new Date());

new Intl.NumberFormat('en-US').format(1234567890); // "1,234,567,890"
new Intl.NumberFormat('hi').format(1234567890); // "1,23,45,67,890"
new Intl.NumberFormat('de-DE').format(1234567890); // "1.234.567.890"
new Intl.NumberFormat('ru-RU').format(1234567890); // "1 234 567 890"

// could be better than 0.43 * 100 + '%' because of the space is different:
new Intl.NumberFormat('en', { style: 'percent' }).format(0.43); // "43%"
new Intl.NumberFormat('fr', { style: 'percent' }).format(0.43); // "43 %"

const pr = new Intl.PluralRules('en-US', {
  type: 'ordinal'
});

pr.select(1); // "one"
pr.select(2); // "two"
pr.select(3); // "few"
pr.select(4); // "other"

const suffixes = {
  one: 'st',
  two: 'nd',
  few: 'rd',
  other: 'th'
};

const formatOrdinals = n => `${n}${suffixes[pr.select(n)]}`;

formatOrdinals(0); // '0th'
formatOrdinals(1); // '1st'
formatOrdinals(2); // '2nd'
formatOrdinals(3); // '3rd'
formatOrdinals(4); // '4th'
formatOrdinals(20); // '20th'
formatOrdinals(82); // '82nd'
