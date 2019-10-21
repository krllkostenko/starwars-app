<template>
    <div class="">
        <navigation-bar btn-text="Fake Sign In" navigation-type="header-navigation"></navigation-bar>
        <header-content headerContentText="Profile description" :headerClass="'profile-header'"></header-content>
        <div class="starship">
            <div class="starship-info">
                <p>{{starShip.name}}</p>
                <p>Model: {{starShip.model}}</p>
                <p>Manufacturer: {{starShip.manufacturer}}</p>
                <p>Starship class: {{starShip.starship_class}}</p>
                <a href="#" @click.prevent>Copy API URL</a>
            </div>
            <div class="ship">
                <div class="">
                    <span>{{starShip.name.replace('-','').substring(0,2)}}</span>
                    <span>MGLT: {{starShip.MGLT}}</span>
                </div>
            </div>
        </div>
        <div class="starship-details">
            <div class="details-card">
                <p>Cost in credits</p>
                <p>{{starShip.cost_in_credits}}</p>
            </div>
            <div class="details-card">
                <p>Crew</p>
                <p>{{starShip.crew}}</p>
            </div>
            <div class="details-card">
                <p>Passengers</p>
                <p>{{starShip.passengers}}</p>
            </div>
            <div class="details-card">
                <p>Cargo capacity</p>
                <p>{{starShip.cargo_capacity}}</p>
            </div>
            <div class="details-card">
                <p>Consumables</p>
                <p>{{starShip.consumables}}</p>
            </div>
            <div class="details-card">
                <p>Films counter</p>
                <p>{{starShip.films.length}}</p>
            </div>
        </div>
        <get-coupon image-class="coupon-death-star"></get-coupon>
        <div class="bottom-nav">
            <navigation-bar btn-text="Go Up" navigation-type="footer-navigation"></navigation-bar>
        </div>
    </div>
</template>


<script>
    import NavigationBar from "../components/Header/NavigationBar";
    import HeaderContent from "../components/Header/HeaderContent";
    import '../components/MainBody/starship.scss';
    import GetCoupon from "../components/GetCoupon/GetCoupon";

    export default {
        name: "ProfilePage",
        components: {
            GetCoupon,
            HeaderContent,
            NavigationBar,
        },
        props: ['starShip'],

    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Archivo&display=swap');

    .starship {
        margin-top: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 1355px) {
            justify-content: center;
        }
    }

    .starship-info {
        font-family: Courier, sans-serif;
        font-size: 18px;
        line-height: 21px;

        & p:first-child {
            font-weight: bold;
            font-size: 22px;
        }

        & a {
            margin-top: 100px;
            text-transform: uppercase;
        }

        @media (max-width: 1355px) {
            order: 2;
        }
    }

    .ship {
        width: 339px;
        height: 297px;
        @media (max-width: 1355px) {
            order: 1
        }

        &:hover {
            background-color: #212121;
        }
    }

    .starship-details {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 65px auto;
        max-width: 1600px;
        @media (max-width: 1355px) {
            justify-content: center;
        }
    }

    .details-card {
        width: 382px;
        height: 250px;
        background: #fff;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.15);
        border-radius: 11px;
        margin: 0 30px 30px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 35px;

        & :first-child {
            font-family: Courier, sans-serif;
            font-size: 18px;
            line-height: 21px;
            font-weight: bold;
            display: flex;
            align-items: center;
            text-transform: capitalize;
            color: #000000;
        }

        & :last-child {
            font-family: Archivo, sans-serif;
            font-weight: bold;
            font-size: 60px;
            line-height: 65px;
            display: flex;
            align-items: center;
            text-transform: capitalize;

            color: #0066FF;
        }
    }


</style>