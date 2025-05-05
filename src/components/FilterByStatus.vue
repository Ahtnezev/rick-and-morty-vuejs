<template>
    <div class="container d-flex align-items-center justify-content-start">
        <div class="btn-group" role="group" aria-label="basic sample">
            <button type="button" class="btn btn-outline-info" @click="filter('')">All</button>
            <button type="button" class="btn btn-outline-info" @click="filter('Alive')">Alive</button>
            <button type="button" class="btn btn-outline-info" @click="filter('Dead')">Dead</button>
            <button type="button" class="btn btn-outline-info" @click="filter('unknown')">Unknown</button>
        </div>
    </div>
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