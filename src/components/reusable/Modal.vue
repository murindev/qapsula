<template>
    <transition name="fade">
        <div class="modal" v-if="open">
            <div class="modal-wrapper">
                <a href="javascript:" class="modal-close" @click="close()"/>
                <div class="modal-inner">

                    <slot></slot>

                </div>
            </div>

        </div>
    </transition>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {bus} from '@/bus';
    import {IModal} from '@/types/common';

    @Component
    export default class Modal extends Vue {
        @Prop(name) public name!: string;

        public open: boolean = false;

        public close() {
            bus.$emit('modal', {
                name: this.name,
                state: false,
            });
        }

        public mounted() {
            bus.$on('modal', (payload: IModal) => {
                if (payload.name === this.name) {
                    this.open = payload.state;
                    setTimeout(() => {
                        document.getElementsByTagName('body')[0].style.overflowY = this.open ? 'hidden' : 'auto';
                   },  1000);
                }
            });
        }

    }
</script>

