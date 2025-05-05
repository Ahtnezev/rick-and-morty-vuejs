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
    <h1 class="display-5 fw-semibold text-center mb-5 mt-3">Rick And Morty</h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacters />
  </section>
</template>

<style>
.alive,.dead,.default {
  width: 10px;
  height: 10px;
  margin-right: .25rem;
}
.alive {
  background-color: greenyellow;
}
.dead {
  background-color: red;
}
.default {
  background-color: cyan;
}
</style>