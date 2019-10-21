import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Vuex from 'vuex';

Vue.config.productionTip = false;

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        pickedPilots: [],
        shipsData: [],
        crewState: [],
        passengersState: [],
    },
    mutations: {
        pickPilot(state, pilot) {
            state.pickedPilots = pilot;
        },
        getShipsData(state, ship) {
            state.shipsData = ship;
        },
        setCrewState(state, data) {
            state.crewState = data;
        },
        setPassengersState(state, data) {
            state.passengersState = data;
        },
    },

});

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');

export {store};
