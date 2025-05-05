<script>
import FilterByName from './components/FilterByName.vue';
import FilterByStatus from './components/FilterByStatus.vue';
import ListCharacters from './components/listCharacters.vue';
export default {
  name: 'App',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName
  }
}
</script>

<template>
  <section>
    <h1 class="display-5 fw-semibold">Rick And Morty</h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacters />
  </section>
</template>
