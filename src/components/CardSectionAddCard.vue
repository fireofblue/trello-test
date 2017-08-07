<template>
    <div>
        <button @click="setSelectedComponent('SaveCard')">Add a card…</button>
    </div>
</template>

<script type="text/babel">
    import {mapActions} from 'vuex';
    export default {
        methods:{
            ...mapActions([
                'setSelectedComponent'
            ])
        }
    }
</script>
<style scoped>

</style>