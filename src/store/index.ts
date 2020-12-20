import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        slides: [],
    },
    getters: {
        slides(state) {
          return state.slides;
        },
    },
    mutations: {
        setSlides(state, payload) {
            state.slides = payload;
        },
    },
    actions: {
        fetchSlides({commit, state}) {
            const res = [];
            let index = 0;
            const times = 7;
            while (index <= times) {
                res.push({
                    index: index++,
                    photo: '/img/team-member.jpg',
                    name: 'Александра Зотова',
                    title: 'Администратор',
                });
            }
            commit('setSlides', res);

        },

    },
    modules: {},
});
