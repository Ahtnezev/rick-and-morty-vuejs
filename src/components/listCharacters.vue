<template>
    <section>
        <div class="characters d-flex flex-wrap justify-content-around align-items-center">
            <div class="character__item mb-3" v-for="character in characters" :key="character.id">
                <card-character :character="character" />
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CardCharacter from './CardCharacter.vue';

export default {
    components: {
        CardCharacter
    },
    setup() {
        // access to actions store/index.js
        const store = useStore();
        const characters = computed(() => {
            return store.state.charactersFilter;
        })
        onMounted(() => {
            store.dispatch('getCharacters');
        })

        return {
            characters
        }
    }
}
</script>
