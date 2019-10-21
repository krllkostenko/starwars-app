<template>
    <div class="get-coupon">
        <div class="coupon-inputs">
            <div class="form-group">
                <input type="email" class="form-control" placeholder="Email">
                <input type="tel" class="form-control" placeholder="Phone">
                <button class="btn">Get your 20% off coupon</button>
            </div>
        </div>
        <div :class="imageClass">
        </div>
    </div>
</template>

<script>

    export default {
        name: "GetCoupon",
        props: ['imageClass']
    }
</script>

<style lang="scss" scoped>
    .get-coupon {
        margin-top: 160px;
        background: #0066FF;
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        @media (max-width: 1291px) {
            padding-bottom: 150px;
        }
    }

    .coupon-inputs {
        padding: 100px 10%;
        display: flex;
        flex-direction: column;
        @media (max-width: 1291px) {
            order: 2;
        }

        & * {
            margin: 0 33px 33px 0;
            border-radius: 0;
            width: 100%;
            height: 84px;

            &::placeholder {
                font-family: Archivo Black, sans-serif;
                font-size: 16px;
                line-height: 78.1%;
                display: flex;
                color: #000000;
            }
        }

        & button {
            color: #fff;
            background-color: #000;
            font-family: Archivo Black, sans-serif;
            font-size: 16px;
            line-height: 78.1%;
            text-transform: uppercase;
            margin-top: 0;
        }
    }

    .coupon-starship {
        margin-top: -53px;
        background: url(../../assets/images/starship.png) no-repeat;
        width: 567px;
        height: 618px;
        @media (max-width: 1291px) {
            background-size: 400px;
            width: 400px;
            height: 430px;
            order: 1;
        }
        @media (max-width: 320px) {
            background-size: 200px;
            height: 210px;
            width: 200px;
        }
    }

    .coupon-death-star {
        width: 700px;
        height: 680px;
        margin: -110px 15px 0 0;
        background-size: 600px;
        background: url(../../assets/images/death-star.png) no-repeat;
        @media (max-width: 1576px) {
            order: 1;
            margin-top: 50px;
        }
        @media (max-width: 955px) {
            background-size: 600px;
        }
        @media (max-width: 480px) {
            background-size: 400px;
            height:400px
        }
    }
</style>