import SpecialNumber from '../../components/SpecialNumber';

describe('SpecialNumber', () => {
  it('should check numbers', async () => {
    expect(new SpecialNumber('1').isSupportedNumber()).toEqual(true);
    expect(new SpecialNumber('123').isSupportedNumber()).toEqual(true);
    expect(new SpecialNumber('12/').isSupportedNumber()).toEqual(false);
    expect(new SpecialNumber('1/2').isSupportedNumber()).toEqual(true);
    expect(new SpecialNumber('-1/-2').isSupportedNumber()).toEqual(true);
    expect(new SpecialNumber('-1/-2/-3').isSupportedNumber()).toEqual(false);
    expect(new SpecialNumber('-1').isSupportedNumber()).toEqual(true);
  });

  it('should parse not fractional', () => {
    const number = new SpecialNumber('1');
    expect(number.getNumerator()).toEqual(1);
    expect(number.getDenominator()).toEqual(1);

    number.update('32134');
    expect(number.getNumerator()).toEqual(32134);
    expect(number.getDenominator()).toEqual(1);
  });

  it('should parse fractional', () => {
    const number = new SpecialNumber('1/1');

    expect(number.getNumerator()).toEqual(1);
    expect(number.getDenominator()).toEqual(1);

    number.update('24234/3423');
    expect(number.getNumerator()).toEqual(24234);
    expect(number.getDenominator()).toEqual(3423);
  });
});
