<template>
    <div class="search mb-4">
        <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Search by name"
            @keyup="filter()"
            v-model="name"
        />
    </div>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const name = ref('');
        const filter = () => {
            store.dispatch('filterByName', name.value);
        }

        return {
            name, filter
        }
    }
}
</script>

<style lang="scss">
    .search {
        width: 400px;
        margin: 3rem auto 0;
        input {
            height: 53px;
            width: 100%;
            border: none;
            border-radius: 10px;
            padding: 0 .5rem;
        }
    }
</style>