<template>
    <div>
        <div class="range-inputs">
            <input class="range-inputs" v-model="minRange" @change="updateSlider"/>
            <input class="range-inputs" v-model="maxRange" @change="updateSlider"/>
        </div>
        <div id="slider" ref="slider"></div>
    </div>
</template>

<script>
    import noUiSlider from 'nouislider';
    import 'nouislider/distribute/nouislider.min.css';
    import {store} from "../main";

    export default {
        name: "RangeSlider",
        props: ['maxValue', 'sliderId'],
        data() {
            return {
                minRange: null,
                maxRange: null,
                slider: {
                    startMin: 0,
                    startMax: this.maxValue,
                    min: 0,
                    max: this.maxValue,
                    start: 0,
                    step: 1
                }
            }
        },
        watch: {
            getMinRange: () => this.minRange,
            getMaxRange: () => this.maxRange,
        },
        methods: {
            updateSlider() {
                this.$refs.slider.noUiSlider.set([this.minRange, this.maxRange]);
            },
            updateFilter() {
                if (this.sliderId === 'crewSlider') {
                    store.commit('setCrewState', [this.minRange, this.maxRange]);
                    this.$emit('filterCrew');
                } else if (this.sliderId === 'passengersSlider') {
                    store.commit('setPassengersState', [this.minRange, this.maxRange]);
                    this.$emit('filterPassengers');
                }
            }
        }
        ,
        mounted() {
            noUiSlider.create(this.$refs.slider, {
                start: [this.slider.startMin, this.slider.startMax],
                step: this.slider.step,
                range: {
                    'min': this.slider.min,
                    'max': this.slider.max
                }
            });

            this.$refs.slider.noUiSlider.on('update', (values, handle) => {
                this[handle ? 'maxRange' : 'minRange'] = parseInt(values[handle]);
                this.updateFilter();

            });
        }
    }
</script>

<style lang="scss">
    .range-inputs {
        display: flex;
        justify-content: space-between;
        padding: 34px 0 25px 0;

        & input {
            color: #0066FF;
            border: 1px solid #CCCCCC;
            box-sizing: border-box;
            border-radius: 3px;
            width: 55px;
            height: 27px;
            font-family: Courier;
            font-size: 14px;
            line-height: 16px;
            display: flex;
            align-items: center;
            text-align: center;
        }
    }

    .noUi-horizontal .noUi-handle {
        width: 17px;
        height: 17px;
        left: -17px;
        top: -6px;
    }

    html:not([dir=rtl]) .noUi-horizontal .noUi-handle {
        right: -17px;
        left: auto;
        border-radius: 50%;
    }

    .noUi-base, .noUi-connects {
        width: 100%;
        height: 10%;
        position: relative;
        z-index: 1;
    }

    .noUi-horizontal {
        height: 8px;
        border-radius: 0;
        border: 2px solid #EDEDED;
        box-shadow: none;
        background-color: #ededed;
    }

    .noUi-touch-area {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: #0066FF;
    }

    .noUi-handle .noUi-handle-upper {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: #0066FF;
    }

    .noUi-handle:after, .noUi-handle:before {
        display: none;
    }

</style>