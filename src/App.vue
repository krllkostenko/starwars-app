<template>
    <div id="app">
        <div class="wrapper">
            <router-view :responseData="pilotsData" :shipsData="shipsData">
                <home-page :responeData="pilotsData" :shipsData="shipsData"></home-page>
            </router-view>
        </div>
    </div>
</template>


<script>
    import HomePage from "./views/HomePage";
    import axios from 'axios';
    import {store} from './main';

    export default {
        name: 'app',
        data() {
            return {
                pilotsData: [],
                shipsData: '',
            };
        },
        components: {
            homePage: HomePage,
        },
        methods: {
            getPilotsData() {

                const getAllStarwarsPeople = () => {
                    let people = [];
                    return axios("https://swapi.co/api/people/")
                        .then(response => {
                            people = response.data.results;
                            return response.data.count;
                        })
                        .then(count => {
                            const numberOfPagesLeft = Math.ceil((count - 1) / 10);
                            let promises = [];
                            for (let i = 2; i <= numberOfPagesLeft; i++) {
                                promises.push(axios(`https://swapi.co/api/people?page=${i}`));
                            }
                            return Promise.all(promises);
                        })
                        .then(response => {
                            people = response.reduce((acc, data) => [...acc, ...data.data.results], people);
                            return people;
                        })
                };

                (async () => {
                    this.pilotsData = await getAllStarwarsPeople();
                })();
            },
            getShipsData() {
                const getAllStarwarsStarships = () => {
                    let starships = [];
                    return axios("https://swapi.co/api/starships/")
                        .then(response => {
                            starships = response.data.results;
                            return response.data.count;
                        })
                        .then(count => {
                            const numberOfPagesLeft = Math.ceil((count - 1) / 10);
                            let promises = [];
                            for (let i = 2; i <= numberOfPagesLeft; i++) {
                                promises.push(axios(`https://swapi.co/api/starships?page=${i}`));
                            }
                            return Promise.all(promises);
                        })
                        .then(response => {
                            starships = response.reduce((acc, data) => [...acc, ...data.data.results], starships);
                            return starships;
                        })
                };

                (async () => {
                    this.shipsData = await getAllStarwarsStarships();
                    store.commit('getShipsData', this.shipsData);
                    this.$emit('starshipsWereAdded');
                })();
            }
        },
        created() {
            this.getPilotsData();
            this.getShipsData();
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        @media (min-width: 720px) {
            padding: 50px 73px;
        }
        @media (max-width: 720px) {
            padding: 10px 10px;
        }
    }
</style>
