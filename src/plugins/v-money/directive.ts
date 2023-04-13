import {VNode} from 'vue';
import {DirectiveBinding} from 'vue/types/options';
import {format, setCursor} from './utils';
const OPTIONS = {
    prefix: '$ ',
    thousands: ',',
    decimal: '.',
    precision: 2
};

function run(el: HTMLFormElement, eventName: string, config: typeof OPTIONS) {
    let positionFromEnd = el.value.length - el.selectionEnd;
    el.value = format(el.value, config);
    positionFromEnd = el.value.length - positionFromEnd;
    positionFromEnd = Math.max(positionFromEnd, config.prefix.length + 1); // left
    setCursor(el, positionFromEnd);
    el.dispatchEvent(new Event(eventName));
}

function getInput(el: any) {
    if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
        const els = el.getElementsByTagName('input');
        if (els.length !== 1) throw new Error(`v-money requires 1 input, found ${els.length}`);
        else el = els[0];
    }
    return el;
}

function getConfig(binding: DirectiveBinding) {
    const config = OPTIONS;
    if (binding.value) {
        const {value} = binding;
        if (typeof value.precision === 'number') {
            config.precision = value.precision;
        }

        if (typeof value.prefix === 'string') config.prefix = value.prefix;

        if (typeof value.thousands === 'string') config.thousands = value.thousands;

        if (typeof value.decimal === 'string') config.decimal = value.decimal;
    }
    return config;
}

function bind(el: HTMLFormElement, binding: DirectiveBinding) {
    if (binding.value === false) return;

    el = getInput(el);
    run(el, 'input', getConfig(binding));
}

function componentUpdated(el: HTMLFormElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) {
    if (binding.value === false) return;

    const data = vnode.componentInstance?.$props;
    const oldData = oldVnode.componentInstance?.$props;

    console.log(data, oldData);

    if (data && data.value === oldData?.value) return; // Prevent firing endless events

    el = getInput(el);
    el.value = data ? data.value : el.value;
    run(el, 'input', getConfig(binding));
}

export default {bind, componentUpdated};
