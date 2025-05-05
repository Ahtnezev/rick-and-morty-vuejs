<template>
    <div class="item" @click="filter('')">All</div>
    <div class="item" @click="filter('Alive')">Alive</div>
    <div class="item" @click="filter('Dead')">Dead</div>
    <div class="item" @click="filter('unknown')">Unknown</div>
</template>
<script>
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const filter = ((status) => {
            store.dispatch('filterByStatus', status);
        })

        // we need to return data to use it in the html
        return {
            filter
        }
    }
}
</script>