<template>
    <div :id="navigationType" class="navigation">
        <b-navbar toggleable="lg" type="light">
            <b-navbar-brand href="#">
                <router-link to="/"><img src="../../assets/images/Logotype.svg"></router-link>
            </b-navbar-brand>
            <div v-if="navigationType==='header-navigation'">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <div class="">
                        <b-navbar-nav>
                            <b-nav-item href="#">Hero</b-nav-item>
                            <b-nav-item href="#">List</b-nav-item>
                            <b-nav-item href="#">CTA Block</b-nav-item>
                            <b-nav-item href="#">Footer</b-nav-item>
                        </b-navbar-nav>
                    </div>
                    <div class="">
                        <b-navbar-nav class="ml-auto">
                            <button class="btn">
                                {{btnText}}
                            </button>
                        </b-navbar-nav>
                    </div>
                </b-collapse>
            </div>
            <div class="footer-nav" v-if="navigationType==='footer-navigation'">
                <b-navbar-nav class="footer-navbar">
                    <b-nav-item href="#">Hero</b-nav-item>
                    <b-nav-item href="#">List</b-nav-item>
                    <b-nav-item href="#">CTA Block</b-nav-item>
                    <b-nav-item href="#">Footer</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <button class="btn" @click="scrollToTop()">
                        {{btnText}}
                    </button>
                </b-navbar-nav>
            </div>
        </b-navbar>
    </div>
</template>

<script>
    import Vue from 'vue';
    import BootstrapVue from 'bootstrap-vue';
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';

    Vue.use(BootstrapVue);
    export default {
        name: "NavigationBar",
        props: ['btnText', 'navigationType'],
        methods: {
            scrollToTop() {
                const topNav = document.getElementById('header-navigation');
                topNav.scrollIntoView({behavior: "smooth"});
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import url("https://use.typekit.net/yto4gki.css");

    .navigation {
        font-family: courier-std, monospace;
        font-weight: 400;
        font-size: 16px;


        img {
            @media (max-width: 900px) {
                width: 138px;
            }
        }
    }

    .navbar-light .navbar-nav {
        padding-left: 200px;
        @media (max-width: 1250px) {
            padding-left: 123px;
        }

        & .nav-link {
            color: #000;

            &:hover {
                color: lighten(#000, 25%);
            }
        }

        & .btn {
            background-color: #212121;
            color: white;

            &:hover {
                background-color: lighten(#000, 15%);
            }
        }
    }

    #footer-navigation {
        margin-top: 120px;
    }

    .footer-nav {
        display: flex;
        @media (max-width: 1019px) {
            .footer-navbar * {
                display: none;
            }
        }

        .btn {
            @media (max-width: 900px) {
                margin: -51px -67px 0 -77px;
            }
        }
    }
</style>