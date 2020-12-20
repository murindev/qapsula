<template>

    <ValidationObserver v-slot="{ invalid }">

        <form action="javascript:" class="form-fields" @submit="submitForm()">

            <p>
                <slot></slot>
            </p>

            <div class="form-bg" v-if="bg"></div>

            <fieldset>

                <label for="name">
                    <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                        <input id="name" v-model="name" name="name" type="text" placeholder="Ваше имя"
                               :class="setClass(name,errors)"/>
                        <span class="input-popup" v-if="errors.length">{{ errors[0] }}</span>
                    </ValidationProvider>
                </label>

                <label for="phoneOrEmail">
                    <ValidationProvider name="phoneOrEmail" rules="required|phoneOrEmail" v-slot="{ errors }">
                        <input id="phoneOrEmail" type="text" placeholder="Ваш телефон или email"
                               v-model="phoneOrEmail" name="phoneOrEmail" :class="setClass(phoneOrEmail,errors)"
                        />
                        <span class="input-popup" v-if="errors.length">{{ errors[0] }}</span>
                    </ValidationProvider>
                </label>

                <label for="question">
                    <ValidationProvider name="question" rules="required" v-slot="{ errors }">
                        <textarea id="question" name="question" placeholder="Ваш вопрос" v-model="question"
                                  :class="setClass(question,errors)"></textarea>
                        <span class="input-popup" v-if="errors.length">{{ errors[0] }}</span>
                    </ValidationProvider>
                </label>

                <button class="btn" type="submit" :disabled="invalid"><span>Отправить</span></button>

            </fieldset>

            <modal name="success">
                <div class="success">
                    <div class="form-title">
                        <h2>Ваш вопрос <b>успешно отправлен!</b></h2>

                        <p>Мы ответим так быстро, как только сможем. Обычно это происходит в течение одного рабочего
                            дня</p>

                        <button type="button" class="btn wide" @click="closeModal()">
                            Отлично, спасибо!
                        </button>
                    </div>
                </div>
            </modal>


        </form>

    </ValidationObserver>

</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {ValidationProvider, ValidationObserver, extend} from 'vee-validate';
    import {required} from 'vee-validate/dist/rules';
    import Modal from '@/components/reusable/Modal.vue';
    import {bus} from '@/bus';

    extend('required', {
        ...required,
        message: 'Это поле обязательно для заполнения',
    });

    extend('phoneOrEmail', {
        validate(value) {
            const MOBILE = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?$/;
            const EMAIL = /(.*)@(.*)\.[a-z]{2,5}/;
            return EMAIL.test(value) || MOBILE.test(value);
        },
        message: 'Это поле должно содержать валидный email или номер телефона в международном формате',
    });

    @Component({
        components: { Modal, ValidationProvider, ValidationObserver },
    })
    export default class FormComponent extends Vue {
        @Prop() public title!: string;
        @Prop() public bg!: boolean;

        public name: string = '';
        public phoneOrEmail: string = '';
        public question: string = '';

        public setClass(value: string, errors: string[]) {
            if (errors.length) {
                return 'invalid';
            }
            if (value === '') {
                return '';
            } else {
                return 'valid';
            }
        }

        public closeModal() {
            bus.$emit('modal', {name: 'form', state: false});
            bus.$emit('modal', {name: 'success', state: false});
        }

        public submitForm() {
            bus.$emit('modal', {name: 'success', state: true});

        }

    }
</script>
