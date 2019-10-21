<template>
    <div class="main-grid">
        <div class="sorting-dropdown">
            <b-dropdown id="dropdown" :text="sortBy.chosenSorting" class="m-md-2">
                <b-dropdown-item
                        v-model="sortBy"
                        v-for="(sort,index) in sortBy.sortingOptions"
                        :key="index"
                        @click="sortBy.chosenSorting = sort"
                >{{sort}}
                </b-dropdown-item>

            </b-dropdown>
        </div>


        <div class="ships" @filterCrew="filterShips()">
            <div class="ship-info" v-for="(ship,index) in renderedShipsAmount()" :key="index">
                <router-link :to="{path:'/profile',query:{starShip:chosenStarship}}" :starShip="chosenStarship">
                    <div class="ship" @click="chosenStarship = ship">
                        <div class="">
                            <span>{{ship.name.replace('-','').substring(0,2)}}</span>
                            <span>MGLT: {{ship.MGLT}}</span>
                        </div>
                    </div>
                </router-link>
                <div class="ship-details">

                    <p><strong>{{ship.name}}</strong></p>
                    <p>CR: {{ship.cost_in_credits}}</p>
                    <p>CREW: {{ship.crew}}</p>
                    <p>PSNGS: {{ship.passengers}}</p>
                </div>
            </div>
        </div>
        <button class="btn" @click="viewMore=!viewMore">
            <span v-if="!viewMore">View More</span>
            <span v-else>View Less</span>
        </button>
    </div>
</template>

<script>
    import './starship.scss'

    export default {
        name: "ShipsList",
        props: ['shipsData',],
        data() {
            return {
                sortedShipsData: '',
                viewMore: false,
                sortBy: {
                    sortingOptions: ['By MGLT', 'By Crew Size', 'By Cost'],
                    chosenSorting: 'By MGLT',
                },
                chosenStarship: '',
                filteredData: '',
            };
        },
        methods: {
            renderedShipsAmount() {
                if (this.viewMore === false) {
                    return this.sortShips(this.sortBy.chosenSorting).slice(0, 6);
                } else {
                    return this.sortShips(this.sortBy.chosenSorting);
                }
            },
            pickedPilot() {
                return this.$store.state.pickedPilots;
            },
            pickPilots() {
                const pickedPilots = this.pickedPilot();
                let shipsData;
                shipsData = [...this.shipsData];
                const filteredData = [];
                // let minCrewSize = this.$store.state.crewState[0];
                // let maxCrewSize = this.$store.state.crewState[1];
                // let minPassengers = this.$store.state.passengersState[0];
                // let maxPassengers = this.$store.state.passengersState[1];

                if (pickedPilots.length === 0) {
                    return shipsData;
                } else {
                    for (let ship of shipsData) {
                        for (let url of ship.pilots) {
                            for (let pilot of pickedPilots) {
                                if (pilot.url === url) {
                                    filteredData.push(ship);
                                }
                            }
                        }
                    }
                    return filteredData;
                }
            },
            filterShips() {
                let minCrewSize = this.$store.state.crewState[0];
                let maxCrewSize = this.$store.state.crewState[1];
                let minPassengers = this.$store.state.passengersState[0];
                let maxPassengers = this.$store.state.passengersState[1];

                let shipsData = this.pickPilots();
                const filteredData = [];
                for (let ship of shipsData) {
                    let shipCrew = parseInt(ship.crew);
                    let shipPassengers = parseInt(ship.passengers);
                    if (shipCrew >= minCrewSize && shipCrew <= maxCrewSize && shipPassengers >= minPassengers && shipPassengers <= maxPassengers) {
                        filteredData.push(ship);
                    }
                }
                this.filterCrew = filteredData;
                return filteredData;
            },
            sortShips(sortingOption) {
                let shipsData = this.filterShips();
                if (sortingOption === 'By MGLT') {
                    return shipsData.sort((current, next) => current.MGLT - next.MGLT);
                } else if (sortingOption === 'By Crew Size') {
                    return shipsData.sort((current, next) => current.crew - next.crew);
                } else if (sortingOption === 'By Cost') {
                    return shipsData.sort((current, next) => current.cost_in_credits - next.cost_in_credits);
                }
            },
        },
    }
</script>

<style lang="scss">
    .main-grid {
        display: flex;
        flex-direction: column;
        max-width: 1000px;
    }

    .sorting-dropdown {
        display: flex;
        justify-content: flex-end;
        margin-right: 80px;
        font-family: Courier, sans-serif;
        font-size: 16px;
        line-height: 18px;
        align-items: center;

        color: #FFFFFF;
        @media (max-width: 1281px) {
            margin: 10px auto;
        }

        & #dropdown {
            width: 238px;
            background-color: #212121;
            border-radius: 3px;
            display: flex;
        }
    }

    .ships {
        display: flex;
        flex-wrap: wrap;
        margin: 50px 35px;
        justify-content: center;


    }


    .ship-details {
        margin-left: 27px;
        font-family: Courier, sans-serif;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        flex-direction: column;
        max-width: 233px;

        & :first-child {
            font-size: 22px;
            line-height: 25px;
            color: #000;
        }
    }

    .btn {
        margin: 0 auto;
        padding: 9px 52px;
        background-color: #212121;
        color: #fff;
    }


</style>