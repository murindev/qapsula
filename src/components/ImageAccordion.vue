<template>

    <div class="team-accordion">

        <div class="team-controls" ref="controls">

            <div class="team-controls_inner">
                <div class="team-controls_arrows">
                    <span class="team-controls_arrowsRight" :class="{rightActive}" @click="right()"></span>
                    <span class="team-controls_arrowsLeft" :class="{leftActive}" @click="left()"></span>

                </div>
            </div>

        </div>

        <div class="team-wrapper" ref="wrapper">
            <div class="team-slides"
                 ref="slidesList"
                 :style="{width: slidesListWidth+'px'}"
                 v-touch:swipe="swipeHandler"

            >
                <div class="team-slide-wrapper" v-for="(i,k) in slides" ref="slide">
                    <div class="team-slide">
                        <div class="team-slide_image">
                            <img src="../assets/img/team-member.jpg" alt="photo"/>
                        </div>

                        <div class="team-slide_text">
                            <p>{{i.name}}
                                <span>{{i.title}} {{i.index}}</span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    </div>


</template>

<script lang="ts">
    import {Component, Vue, Prop, Watch} from 'vue-property-decorator';
    import {IAccordionSlide} from '@/types/accordion';
    import { gsap } from 'gsap';
    import {TimelineLite} from 'gsap';
    import index from '@/store';
    gsap.registerPlugin(TimelineLite);
    @Component
    export default class ImageAccordion extends Vue {
        @Prop() public slides!: IAccordionSlide[];

        public slideWidth: number = 0;
        public slidesListWidth: number = 99999;
        public slidesListLeftPosition: number = 0;
        public viewSlidesCnt: number = 0;
        public slidesCnt: number = 0;
        public currentSlide: number = 0;


        public timeline = new TimelineLite();
        public leftActive = false;
        public rightActive = true;

        public $refs!: {
            slide: HTMLElement[],
            slidesList: HTMLElement,
            wrapper: HTMLElement,
            controls: HTMLElement,
        };

        @Watch('slidesListLeftPosition')
        public onChangePosition(newLeftPosition: number) {
            this.timeline.to(this.$refs.slidesList, .5, {x: newLeftPosition});
        }

        @Watch('currentSlide')
        public onCurrentSlideChange(cnt: number) {
            this.slidesListLeftPosition = cnt * -this.slideWidth;
            this.leftActive = this.currentSlide > 0;
        }


        public swipeHandler(direction: string) {
            if (direction === 'left') {
                this.right();
            }
            if (direction === 'right') {
                this.left();
            }
        }


        public setWidth() {
            if (!this.slideWidth) {
                this.slideWidth = this.$refs.slide[0].clientWidth;
                this.viewSlidesCnt = Math.ceil(this.$refs.wrapper.clientWidth / this.slideWidth);
                this.slidesCnt = this.slides.length;
                this.slidesListWidth = this.slideWidth * this.slidesCnt;
            }
        }

        public right() {

            this.setWidth();

            if (this.slidesCnt - this.currentSlide - 1 >= this.viewSlidesCnt) {
                this.currentSlide++;
            } else if (this.slidesCnt - this.viewSlidesCnt === this.currentSlide) {
                this.slidesListLeftPosition = -(this.slidesListWidth - this.$refs.controls.offsetLeft - 28 );
                this.rightActive = false;
                this.leftActive = true;
            }
        }


        public left() {

            this.setWidth();
            if (!this.rightActive) {
                this.slidesListLeftPosition = this.currentSlide * -this.slideWidth;
                this.rightActive = true;
            } else if (this.slidesCnt - this.viewSlidesCnt >= this.currentSlide && this.rightActive && this.leftActive) {
                this.currentSlide--;
            }
        }

    }
</script>
