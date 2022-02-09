import {evenBrackets} from './evenbrackets';

describe('Even brackets', () => {
    test('only open', () => {
        expect(evenBrackets("(")).toBe(false);
    });
    test('only open and close', () => {
        expect(evenBrackets("()")).toBe(true);
    });
    test('open and close in reverse order', () => {
        expect(evenBrackets(")(")).toBe(false);
    });
    test('only open and close with content', () => {
        expect(evenBrackets("(content)")).toBe(true);
    });
    test('multiple even number of brackets', () => {
        expect(evenBrackets("([{}])")).toBe(true);
    });
    test('multiple even number of brackets wrong order', () => {
        expect(evenBrackets("([{]})")).toBe(false);
    });
    test('multiple even number of brackets', () => {
        expect(evenBrackets("([{}])()[][({{{}}})]")).toBe(true);
    });
    test('multiple even number of brackets', () => {
        expect(evenBrackets("([{}])()[][({{{}}})]}")).toBe(false);
    });
});