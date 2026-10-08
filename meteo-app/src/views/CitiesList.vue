<template>
    <div>
        <h2>Météo - Liste des villes</h2>

        <CityCard
            name="Seynod TMTC la famille"
            weather="Je vais pas te mentir, il pleut sa race"
            :temperature="13"
            :updatedAt="new Date()"
        />
    </div>
</template>

<script>
import CityCard from '@/components/CityCard.vue'

export default {
    name: 'CitiesList',
    components: {
        CityCard
    }
}
</script>