import { expect, it } from '@jest/globals';
import { decodeEventName } from '../src/util/ProgressionUtils';

it('decodeEventName', () => {
  expect(decodeEventName('R221 E337 Womens Open K-1 1000m-Direct Final', 'R221')).toEqual({
    eventName: 'E337 Womens Open K-1 1000m',
    bracket: 'FA',
    bracketType: 'FA',
  });

  expect(decodeEventName('12A Boys 1st Freshman 8+ Petite Final', '12A')).toEqual({
    eventName: 'Boys 1st Freshman 8+',
    bracket: 'FB',
    bracketType: 'FB',
  });

  expect(decodeEventName('12A Girls 4th Varsity 8+ Race for Lanes', '12A')).toEqual({
    eventName: 'Girls 4th Varsity 8+',
    bracket: 'TT1',
    bracketType: 'TT',
  });

  expect(decodeEventName('12A Girls Freshman 4+ Semi', '12A')).toEqual({
    eventName: 'Girls Freshman 4+',
    bracket: 'SAB1',
    bracketType: 'SAB',
  });

  expect(decodeEventName('12A Mens Varsity 8+ Semi', '12A')).toEqual({
    eventName: 'Mens Varsity 8+',
    bracket: 'SAB1',
    bracketType: 'SAB',
  });

  expect(decodeEventName('R221 E337 Womens Open K-1 1000m-H1', 'R221')).toEqual({
    eventName: 'E337 Womens Open K-1 1000m',
    bracket: 'H1',
    bracketType: 'H',
  });

  expect(decodeEventName('1 Womens 2-H1', '1')).toEqual({
    eventName: 'Womens 2-',
    bracket: 'H1',
    bracketType: 'H',
  });

  expect(decodeEventName('1 Womens 2- H1', '1')).toEqual({
    eventName: 'Womens 2-',
    bracket: 'H1',
    bracketType: 'H',
  });
});
