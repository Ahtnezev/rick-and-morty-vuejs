<template>
    <div class="character">
        <img :src="character.image" class="img-fluid rounded-3" :alt="character.name">
        <div class="character__info">
            {{ character.name }}
            <div class="status d-flex align-items-center">
                <span
                    :class="character.status == 'Alive' ? 'alive' : character.status == 'Dead' ? 'dead' : 'default'"
                    ></span>
                <span>{{ character.status }} - {{ character.species }}</span>
            </div>
            <div class="origin">
                <span>
                    Origin: {{ character.origin.name }}
                </span>
            </div>
            <div class="location">
                Location: {{ character.location.name }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['character']
}
</script>