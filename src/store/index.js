import { createStore } from 'vuex';

export default createStore({
    state: {
        characters: [],
        charactersFilter: []
    },
    // mutations modify the state property
    mutations: {
        setCharacters(state, payload) {
            state.characters = payload;
        },
        setCharactersFilter(state, payload) {
            state.charactersFilter = payload;
        }
    },
    // mutations depend the actions to modify
    actions: {
        // commit: access to mutations
        async getCharacters({commit}) {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                const data = await response.json();
                // console.log(data);
                commit('setCharacters', data.results);
                commit('setCharactersFilter', data.results);
            } catch (error) {
                console.log(error);
            }
        },
        filterByStatus({commit, state}, status) {
            const results = state.characters.filter((character) => {
                return character.status.includes(status); // display thoses characters with that status
            });
            commit('setCharactersFilter', results);
        },
        filterByName({commit, state}, name) {
            const formatName = name.toLowerCase();
            const results =  state.characters.filter((character) => {
                const characterName =  character.name.toLowerCase();
                if (characterName.includes(formatName)) {
                    return character;
                }
            })
            commit('setCharactersFilter', results);
        }
    },
    modules: {

    },
});