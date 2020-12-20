<template>
    <footer>
        <div>
            <div>
                <div class="footer">

                    <div class="footer-logo">
                        <a href="javascript:">
                            <img src="../assets/img/logo.png" alt="logo"/>
                            <span></span>
                        </a>
                    </div>

                    <div class="footer-email">
                        <a href="javascript:">
                            <img src="../assets/img/mail.svg" alt="email"/>
                            <span>support@qapsula.com</span>
                        </a>
                    </div>

                    <div class="footer-phone">
                        <a href="javascript:">
                            <img src="../assets/img/phone.svg" alt="phone"/>
                            <span>+7 (499) 241 51 37</span>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    </footer>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Footer extends Vue {

    }
</script>
