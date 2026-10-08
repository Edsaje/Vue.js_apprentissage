<template>
    <div>
        <h2>Météo - Liste des villes</h2>

        <CityCard 
            v-for="city in cities"
            :key="city.id"
            :name="city.name"
            :weather="city.weather"
            :temperature="city.temperature"
            :updatedAt="city.updatedAt"
        />
    </div>
</template>

<script>
import CityCard from '@/components/CityCard.vue'

export default {
    name: 'CitiesList',
    components: {
        CityCard
    },
    data() {
        return {
            cities: [
                {
                    id: 1,
                    name: 'Seynod TMTC la famille',
                    weather: 'Je vais pas te mentir, il pleut sa race',
                    temperature: 13,
                    updatedAt: new Date()
                },
                {
                    id: 2,
                    name: 'Annecy si la famille',
                    weather: 'la même que Seynod en faite',
                    temperature: 12,
                    updatedAt: new Date()
                }
            ]
        }
    }
}
</script>