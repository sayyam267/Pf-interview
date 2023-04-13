import {AnyObject} from '@/globals';

function toStr(value: any) {
    return value ? value.toString() : '';
}

function onlyNumbers(input: any) {
    return toStr(input).replace(/\D+/g, '') || '0';
}

function numbersToCurrency(numbers: string, precision: number) {
    // const exp = 10 ** precision;
    // const float = parseFloat(numbers) / exp;
    return parseFloat(numbers).toFixed(precision);
}

function addThousandSeparator(integer: string, separator: string) {
    return integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${separator}`);
}

function joinIntegerAndDecimal(integer: string, decimal: string, separator: string) {
    return decimal ? integer + separator + decimal : integer;
}

function format(input = 0, opt: AnyObject) {
    const value = typeof input === 'number' ? input.toFixed(opt.precision) : input || '0';
    const numbers = onlyNumbers(value);
    const currency = numbersToCurrency(numbers, opt.precision);
    const parts = toStr(currency).split('.');
    const [integerDirty, decimal] = parts;
    const integer = addThousandSeparator(integerDirty, opt.thousands);
    return [opt.prefix, joinIntegerAndDecimal(integer, decimal, opt.decimal)].join('');
}

function setCursor(el: HTMLFormElement, position: any) {
    function setSelectionRange() {
        el.setSelectionRange(position, position);
    }
    if (el === document.activeElement) {
        setSelectionRange();
        setTimeout(setSelectionRange, 1);
    }
}

export {format, setCursor};
