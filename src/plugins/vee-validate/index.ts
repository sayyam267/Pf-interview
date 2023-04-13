import Vue from 'vue';
import {ValidationProvider, extend} from 'vee-validate';
import {required, email, max, min, confirmed, size, ext, digits} from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);

extend('required', {
    ...required,
    message: 'This field is required.'
});

extend('email', {
    ...email,
    message: 'Email must be valid.'
});

extend('password', {
    validate: (value: string) => new RegExp(/^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/).test(value),
    message: `Password should contain at least one digit, one lower case, one upper case character
  `
});
extend('address', {
    validate: (value: string) => new RegExp(/^[ A-Za-z0-9-./]*$/).test(value),
    message: `Address can contain only alphanumeric and . - / characters only 
  `
});
extend('streetaddress', {
    validate: (value: string) => new RegExp(/^[ A-Za-z0-9-#/]*$/).test(value),
    message: `Street Address can contain only alphanumeric and # - / characters only 
  `
});
extend('noleadingzero', {
    validate: (value: string) => (value?.length > 1 ? new RegExp(/^([1-9][0-9]*)$/).test(value) : true),
    message: `The first number should not be zero`
});
extend('price_greater_than_zero', {
    validate: (value: string) => {
        return parseInt(value[0]) > 0;
    },
    message: `The value must be greater than zero.`
});

extend('true', {
    validate: value => value === true,
    message: 'This is requried.'
});

extend('anytrue', {
    validate: value => {
        console.log(value);
        return value && value.length && value.indexOf('True') !== -1;
    },
    message: 'At least one value is required.'
});

extend('phone', {
    validate: value => new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/).test(value),
    message: 'Phone must be in xxx-xxx-xxxx format.'
});
extend('alphabetic', {
    params: ['fieldName'],
    validate: value => new RegExp(/^[a-zA-Z ]+$/).test(value),

    message: (field, {fieldName}: any) => {
        return `${fieldName ?? 'This field'} can only contain alpha characters.`;
    }
});
extend('numeric', {
    // validate: value => new RegExp(/^[-]?[0-9]+$/).test(value),
    validate: value => new RegExp(/^-?\d*\.?\d+$/).test(value),

    message: 'This field should only contains numbers'
});
extend('numeric-comma', {
    // validate: value => new RegExp(/^[-]?[0-9]+$/).test(value),
    validate: value => new RegExp(/^-?(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/).test(value),

    message: 'This field should only contains numbers'
});
extend('whole-numeric-comma', {
    // validate: value => new RegExp(/^[-]?[0-9]+$/).test(value),
    validate: value => new RegExp(/^-?(\d+|\d{1,3}(,\d{3})*)?$/).test(value),

    message: 'This field should only contains whole numbers.'
});
extend('whole-numeric', {
    // validate: value => new RegExp(/^[-]?[0-9]+$/).test(value),
    validate: value => new RegExp(/^-?(\d+)?$/).test(value),

    message: 'This field should only contains whole numbers.'
});
extend('positive-numeric', {
    // validate: value => new RegExp(/^[-]?[0-9]+$/).test(value),
    validate: value => new RegExp(/^\d*\.?\d+$/).test(value),

    message: 'This field should only contains numbers 0 or greater.'
});
extend('url', {
    validate: value => new RegExp(/((http|https):\/\/)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)/).test(value),

    message: 'Not a valid URL.'
});
extend('special-characters', {
    params: ['fieldName'],
    validate: (value: string) => new RegExp(/^[ A-Za-z0-9-.,&/]*$/).test(value),
    message: (field, {fieldName}: any) => {
        return `${fieldName ?? 'This field'} can contain only alphanumeric . - , / & characters only.`;
    }
});
extend('company-name', {
    params: ['fieldName'],
    validate: (value: string) => new RegExp(/^[ A-Za-z0-9-.,&/]*$/).test(value),
    message: (field, {fieldName}: any) => {
        return `${fieldName ?? 'This field'} can contain only alphanumeric . - / & characters only.`;
    }
});
extend('zipcode', {
    params: ['fieldName'],
    validate: (value: Array<number>) => value.length > 0 && value.length == 5,
    message: `Please enter a valid 5 digit zip code.`
});
extend('max', {
    ...max,
    message: 'This field must not be greater than {length} characters!'
});

extend('min', {
    ...min,
    message: 'This field must be at least {length} characters!'
});
extend('minValue', {
    params: ['minValue'],
    validate: (value: string, args: any) => {
        value = value.replace(/,/g, '');
        return +Number(value) > +Number(args.minValue);
    },
    message: `The value must be greater than minimum value`
});
extend('greater_than_zero', {
    validate: (value: number) => {
        return value > 0;
    },
    message: `The value must be greater than zero.`
});

extend('confirmed', {
    ...confirmed,
    message: "{target} confirmation doesn't match!"
});

extend('size', {
    ...size,
    message: 'File must not be greater than {size}KB!'
});

extend('positive_float', {
    validate: value => +value >= 0,
    message: 'The value must not be negative.'
});
extend('decimal', {
    params: ['digits'],
    validate: (value: any, {digits}: any) => {
        value = value?.toString().replaceAll(',', '');
        // console.log(digits, value);
        value = parseFloat(value);
        if (value % 1 != 0) {
            if (value.toString().length >= value.toFixed(digits).length) {
                return value.toString() === value.toFixed(digits);
            } else {
                return true;
            }
        } else {
            return true;
        }
    },
    message: 'The digits after decimal point must not be greater than {digits}'
});

extend('excel_files', {
    ...ext,
    message: 'File must be of these extensions: xls, xlsx, csv.'
});
extend('doc_files', {
    ...ext,
    message: 'File must be of these extensions: pdf'
});

extend('mask', {
    params: ['identifier'],
    validate: (value: string, {identifier}: any) => {
        if (Array.isArray(identifier)) {
            return (identifier as Array<string>)
                .reduce((acc: Array<boolean>, curr: string) => {
                    acc.push(!!value.match(new RegExp(`^${curr.replace(/#/g, '\\d')}$`))?.length);
                    return acc;
                }, [])
                .some((x: boolean) => x);
        }
        return !!value.match(new RegExp(`^${(identifier as string).replace(/#/g, '\\d')}$`))?.length;
    },
    message: (field, {identifier}: any) => {
        return `This field must match ${
            Array.isArray(identifier) ? (identifier as Array<string>).reduce((acc, curr) => (acc += acc.length > 0 ? ` or ${curr}` : curr), '') : identifier
        } format.`;
    }
});
extend('social-media', {
    params: ['identifier'],
    validate: (value: string, {identifier}: any) => {
        switch (identifier) {
            case 'YouTube':
                return new RegExp(/(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/).test(value) as any;
            case 'Facebook':
                return new RegExp(
                    /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w-]*)?/
                ).test(value) as any;
            case 'Twitter':
                return new RegExp(/(?:http:\/\/)?(?:www\.)?twitter\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w-]*\/)*([\w-]*)/).test(value) as any;
            case 'LinkedIn':
                return new RegExp(/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile|company)/gm).test(value) as any;
        }
    },
    message: (field, {identifier}: any) => {
        return `This field must match ${
            Array.isArray(identifier) ? (identifier as Array<string>).reduce((acc, curr) => (acc += acc.length > 0 ? ` or ${curr}` : curr), '') : identifier
        } format.`;
    }
});
extend('phone-mask', {
    validate: (value: string, {identifier}: any) => {
        return !!value.match(new RegExp(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/))?.length;
    },
    // message: (field, {identifier}: any) => {
    //     return `This field must match (###) ###-#### format.`;
    // }
    message: `This field must match (###) ###-#### format.`
});
