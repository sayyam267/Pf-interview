import {Component, Prop, Watch} from 'vue-property-decorator';
import {ValidationProvider} from 'vee-validate';
import {mask} from 'vue-the-mask';
import BaseInput from '../Input/base-input';
import {makeStr} from '@/globals';

@Component({
    components: {
        ValidationProvider
    },
    directives: {
        mask: (el, binding) => {
            if (!binding.value) return;
            mask(el, binding);
        }
    }
})
export default class BaseTextField extends BaseInput {
    @Prop({
        default: '',
        type: String
    })
    private readonly mask!: string;

    // @Prop({
    //     default: null,
    //     type: String
    // })
    // private readonly type!: 'currency' | null;

    public onBlur() {
        let value = !!this.value && this.$attrs['type'] !== 'password' && typeof this.value === 'string' ? this.value.trim() : this.value;

        if (this.$attrs['add-decimals'] && Number(this.$attrs['add-decimals']) > 0 && value?.toString().indexOf('.') === -1) {
            const str = makeStr(Number(this.$attrs['add-decimals']), '0');
            value = `${value}.${str}`;
        }

        this.$emit('update:value', value);
    }

    public onKeyDown(event: KeyboardEvent) {
        // if (this.keyboardrules?.indexOf('only-whole-numbers')) {
        //     if (!/^\d+$/.test(event.key)) {
        //         event.preventDefault();
        //         return;
        //     }
        // }
    }

    continuousMask(model: any) {
        let mask = '';
        if (model && model.length) {
            for (let i = 0; i < model.length; i++) {
                mask += 'X';
            }
        }
        return mask;
    }

    getErrorMessage(error: string) {
        const msg = this.$attrs['errorMessage'];

        if (msg?.length) {
            return msg;
        } else {
            return error;
        }
    }
}
