import { timeStampFormat } from './formatters';

describe('formatters',() => {
  it('formats isoDateStrings', () => {
    const isoDate = '2010-06-09T15:20:00Z';
    const expected = 'Wed, 09 Jun 2010 15:20:00 GMT' ;
    expect(timeStampFormat(isoDate)).toEqual(expected);
  })
});