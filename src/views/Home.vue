<template>

    <div class="content">

        <modal name="form">
            <div class="form-title">
                <h2>Мы всегда на связи</h2>
            </div>
            <form-section>
                <slot name="title">
                    Задайте свой вопрос <br/>
                    и мы обязательно свяжемся с вами
                </slot>
            </form-section>
        </modal>

        <section class="technologies">
            <div>
                <div>
                    <div class="technologies-banner">
                        <div class="technologies-text">
                            <p>
                                Телемедицинские технологии
                                <b>Qapsula</b> для фермеров
                            </p>

                            <span>Заявите <em>о себе уже</em> сегодня</span>

                            <img src="../assets/img/screen_1_arr.png" alt="arrow"/>

                            <a class="btn technologies-callback" @click="modal(true)">
                                <span>Свяжитесь с нами</span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="info">
            <div>
                <div>
                    <div class="info-block">
                        <div class="info-circle">
                            <img class="info-img_desktop" src="../assets/img/info-bg.png" alt="image"/>
                            <img class="info-img_mobile" src="../assets/img/phone-bg.png" alt="image"/>
                        </div>
                        <div class="info-text">
                            <h2>82% отрубей</h2>
                            <p>количественный рост <br/>
                                и сфера нашей активности
                            </p>
                            <a class="info-link" href="javascript:">*cnews.ru/link/n477201</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section class="team">
            <div>
                <div>
                    <div class="team-heading">
                        <h2>Команда</h2>
                    </div>
                    <image-accordion :slides="slides"/>
                </div>
            </div>
        </section>

        <section class="question" id="questionForm">
            <div>
                <div>
                    <div class="question-block">
                        <h2>Расскажите нам о своих злаках</h2>
                    </div>
                    <div class="form">
                        <form-section :bg="true">
                            <slot name="title">
                                Задайте свой вопрос <br/>
                                и мы обязательно свяжемся с вами
                            </slot>
                        </form-section>
                    </div>

                </div>
            </div>
        </section>

    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ImageAccordion from '@/components/ImageAccordion.vue';
    import {IAccordionSlide} from '@/types/accordion';
    import Modal from '@/components/reusable/Modal.vue';
    import FormSection from '@/components/reusable/Form.vue';


    @Component({
        components: {ImageAccordion, Modal, FormSection},
        computed: {
            slides: {
                get(): IAccordionSlide[] {
                    return this.$store.getters.slides;
                },
            },
        },
        mounted() {
            this.$store.dispatch('fetchSlides');
        },

    })
    export default class Home extends Vue {


    }
</script>
