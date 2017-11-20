<template lang='pug'>
div
    navbar
    //- transition(name='fade', mode='out-in')
    router-view(:key="$route.path")
</template>

<script>
import {mapState} from 'vuex'
import navbar from './navbar'
export default {
    mounted() {
        console.log('Component mounted.')
    },
    computed:{
        ...mapState(['loading'])
    },
    components: {
        navbar
    }
}
</script>
