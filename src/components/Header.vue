<template>
    <header>
        <div>
            <div>
                <div class="header">
                    <div class="header-logo">
                        <a href="javascript:">
                            <img src="../assets/img/logo.svg" alt="logo"/>
                        </a>
                    </div>

                    <a class="header-burger" :class="classState" href="javascript:"
                       @click="menuSwitcher()">
                    </a>


                    <nav class="header-menu" :class="classState">

                        <div class="header-bordered">
                            <a class="primary" href="javascript:"><span>Возможности </span></a>
                        </div>

                        <a class="header-link primary" href="javascript:">
                            <span>Условия <template v-if="menu">подключения</template></span>
                        </a>
                        <a class="header-link primary" href="javascript:" v-scroll-to="{ el: '#questionForm' }"><span>Задать вопрос</span></a>
                        <a class="btn header-callback" @click="modal('form',true)">
                            <span>Свяжитесь с нами</span>
                        </a>

                        <div class="header-phone">
                            <a href="javascript:" class="primary">
                                <img src="../assets/img/phone.svg" alt="phone"/>
                                <span>+7 (499) 241 51 37</span>
                            </a>
                        </div>

                        <div class="header-email">
                            <a href="javascript:" class="primary">
                                <img src="../assets/img/mail.svg" alt="email"/>
                                <span>support@qapsula.com</span>
                            </a>
                        </div>

                    </nav>

                </div>
            </div>

        </div>
    </header>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {bus} from '@/bus';

    @Component
    export default class Header extends Vue {

        public menu: boolean = false;
        public classState: string = '';


        public menuSwitcher() {
            this.menu = !this.menu;
            this.classState = this.menu ? 'opened' : '';
            document.getElementsByTagName('body')[0].style.overflowY = this.menu ? 'hidden' : 'auto';
        }

        public modal(name: string, state: boolean) {
            bus.$emit('modal', {
                name, state,
            });
        }

    }
</script>
