<template>
    <div :class="'header-content '+headerClass">
        <div class="">
            <div class="stormtrooper-img"></div>
        </div>
        <div class="header-content-text">
            <p>{{headerContentText}}</p>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import BootstrapVue from 'bootstrap-vue';
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';

    Vue.use(BootstrapVue);
    export default {
        name: "HeaderContent",
        props: ['headerContentText', 'headerClass'],
    }
</script>

<style lang="scss" scoped>
    .header-content {
        @import url('https://fonts.googleapis.com/css?family=Archivo+Black&display=swap');
        height: 477px;
        margin-top: 40px;
        background-color: #000;
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .stormtrooper-img {
        margin-top: 77px;
        position: absolute;
        display: flex;
        width: 448px;
        height: 502px;
        margin-left: 41px;
        box-shadow: 0px 12px 18px rgba(0, 0, 0, 0.45);
        border-radius: 250px;
        background: url("../../assets/images/stormtroopers_head.png") no-repeat;
        @media (max-width: 900px) {
            background-size: 300px;
            align-self: center;
            width: 280px;
            height: 370px;
            border-radius: 1000px;
            margin-left: 16%;
        }
        @media (max-width: 320px) {
            background-size: 200px;
            width: 200px;
        }
    }

    .header-content-text {
        color: #fff;
        width: 800px;
        padding: 190px 2% 0 0;
        font-family: Archivo Black, sans-serif;
        font-size: 132px;
        line-height: 78.1%;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        z-index: 1;
        @media (max-width: 900px) {
            font-size: 60px;
        }
        @media (max-width: 480px) {
            font-size: 50px;
            text-align: center;
        }
    }

    .profile-header {
        height: 262px;
        align-items: center;
        justify-content: center;
        text-align: center;

        .stormtrooper-img {
            background-size: 260px;
            margin: -130px 0 0 280px;
            height: 300px;
            width: 250px;
            z-index: 10;
            @media (max-width: 946px) {
                margin: -30px 0 0 -120px;

            }
        }

        & p {
            margin-bottom: 0;
            margin-top: -130px;
        }
    }
</style>