<template>
    <div class="main-body">
        <div class="our-starships">
            <p>Our Starships</p>
        </div>
        <div class="">
            <pilots-filters
                    v-if="shipsData"
                    :pilots="responseData"
                    :shipsData="shipsData"
                    :maxCrew="getMaxValue('crew')"
                    :maxPassengers="getMaxValue('passengers')">
            </pilots-filters>
        </div>
        <ships-list :shipsData="shipsData"></ships-list>
    </div>
</template>

<script>
    import pilotsFilters from "./Filters";
    import ShipsList from "./ShipsList";

    export default {
        name: "MainBody",
        props: ['responseData', 'shipsData'],
        data() {
            return {
                pilots: '',
            };
        },
        methods: {
            getMaxValue(value) {
                const shipsValues = [];
                for (let ship of this.shipsData) {
                    shipsValues.push(ship[value]);
                }
                shipsValues.sort((first, next) => next - first);
                return parseInt(shipsValues[0]);
            },
        },
        components: {
            ShipsList,
            pilotsFilters,
        },

    }
</script>

<style lang="scss" scoped>
    .main-body {
        padding-top: 126px;
        display: flex;
        @media (max-width: 900px) {
            flex-wrap: wrap;
        }
    }

    .our-starships {
        height: 58px;
        margin-top: 150px;
        font-family: Archivo Black, sans-serif;
        font-size: 24px;
        line-height: 26px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: #212121;
        transform: rotate(-90deg);
        @media (max-width: 586px) {
            margin: 0;
            padding: 0;
        }
        @media (max-width: 586px) {
            transform: rotate(0deg);

        }
    }


</style>