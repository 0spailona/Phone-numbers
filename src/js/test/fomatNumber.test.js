import formatNumber from "../formatNumber";

const numberList = [
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+86 000 000 0000', '+860000000000']
]
const handlerForFormatNumber = test.each(numberList);
handlerForFormatNumber('should format phone number %s', (number, expected) => {
    expect(formatNumber(number)).toBe(expected);
})