<template>
    <div class="">
        <p class="menu-btn" @click="viewFilters=!viewFilters"><img src="../../assets/images/Vector.svg"></p>
        <div v-if="viewFilters===false" class="filters">
            <div class="filtering-element">
                <p>Pilots</p>
                <form>
                    <div class="form-check" v-for="(pilot,index) in viewPilots()" :key="index">
                        <input
                                type="checkbox"
                                class="form-check-input"
                                :id="index" :value="pilot"
                                v-model="checkedPilots"
                                @change="filterShipsByPilots"
                        >
                        <label class="form-check-label" :for="index">{{pilot.name}}</label>
                    </div>
                </form>
                <a href="#" @click.prevent="viewAll = !viewAll">
                    <span v-if="!viewAll">View All</span>
                    <span v-else>View Less</span>
                </a>
            </div>
            <div class="filtering-element">
                <p>Crew Size</p>
                <range-slider :max-value="this.maxCrew" :slider-id="'crewSlider'"></range-slider>
            </div>
            <div class=" filtering-element
            ">
                <p>Passengers Capacity</p>
                <range-slider :max-value="this.maxPassengers" :slider-id="'passengersSlider'"></range-slider>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import BootstrapVue from 'bootstrap-vue';
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';
    import RangeSlider from "../RangeSlider";

    import {store} from '../../main'

    Vue.use(BootstrapVue);
    export default {
        name: "Filters",
        props: ['pilots', 'shipsData', 'maxCrew', 'maxPassengers'],
        data() {
            return {
                viewAll: false,
                viewFilters: false,
                checkedPilots: [],
            }
        },
        components: {
            RangeSlider,
        },
        methods: {
            viewPilots() {
                if (this.viewAll) {
                    return this.$props.pilots
                } else {
                    return this.$props.pilots.slice(0, 5);
                }
            },
            filterShipsByPilots() {
                const pilots = [...this.checkedPilots];
                store.commit('pickPilot', pilots);
            },

        },
    }
</script>

<style lang="scss">
    @import url("https://use.typekit.net/yto4gki.css");

    .filters {
        border: 1px solid #EAEAEA;
        box-sizing: border-box;
        border-radius: 3px;
        max-width: 348px;
        padding-top: 10px;
        @media (max-width: 586px) {
            // display: none;
        }
    }

    .menu-btn {
        display: none;
        padding-top: 15px;
        padding-left: 70px;
        cursor: pointer;
        @media (max-width: 586px) {
            cursor: pointer;

            display: flex;
        }
    }

    .filtering-element {
        padding: 44px 34px;

        & a {
            font-family: Courier, sans-serif;
            font-size: 14px;
            line-height: 16px;
            display: flex;
            align-items: center;
            text-transform: capitalize;
            padding-top: 26px;
            color: #0066FF;
        }

        & p {
            font-family: Archivo Black, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 24px;
            display: flex;
            align-items: center;
            text-transform: capitalize;

        }
    }


    form {
        width: 284px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & .form-check {
            display: flex;
            justify-content: space-between;

            & label {
                padding-left: 16px;
                font-family: Courier, sans-serif;
                font-size: 18px;
                line-height: 21px;
                display: flex;
                align-items: center;
                text-transform: capitalize;
            }
        }
    }


</style>