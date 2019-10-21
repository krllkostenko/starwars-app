<template>
    <div>
        <navigation-bar btn-text="Fake Sign In" navigation-type="header-navigation"></navigation-bar>
        <header-content headerContentText="May the force be with you"></header-content>
        <main-body v-if="shipsData" :responseData="responseData" :shipsData="shipsData"></main-body>
        <get-coupon image-class="coupon-starship"></get-coupon>
        <navigation-bar btn-text="Go Up" navigation-type="footer-navigation"></navigation-bar>

    </div>
</template>

<script>
    import NavigationBar from "../components/Header/NavigationBar";
    import HeaderContent from "../components/Header/HeaderContent";
    import MainBody from "../components/MainBody/MainBody";
    import GetCoupon from "../components/GetCoupon/GetCoupon";

    export default {
        name: "HomePage",
        props: ['responseData', 'shipsData'],
        components: {
            GetCoupon,
            MainBody,
            NavigationBar,
            HeaderContent,
        }
    }
</script>

<style scoped>

</style>