<template>
    <div class="list">
        <h2>Trello Test</h2>
        <draggable v-model="cardList">
            <div v-for="(card, index) in cardList">
                <Card :name="card.task_name" :date="card.date" :index="index"></Card>
            </div>
            <component :is="selectedComponent"></component>
        </draggable>
    </div>
</template>

<script type="text/babel">
    import draggable from 'vuedraggable';
    import Card from './Card.vue';
    import AddCard from './CardSectionAddCard.vue';
    import SaveCard from './CardSectionSaveCard.vue';
    import {mapGetters} from 'vuex';
    import config_urls from '../urls'

    export default {
        date(){
          return {
              resource: {},
          }
        },
        components: {
            draggable,
            Card,
            AddCard,
            SaveCard
        },
        computed: {
            cardList: {
                get() {
                    return this.$store.getters.cardList;
                },
                set(value) {
                    this.$store.commit('updateList', value)
                    this.resource.putData({key:this.$store.getters.key},value);
                }
            },
                ...mapGetters(['selectedComponent'])
        },
        created() {
            const customActions = {
                saveData: {method: 'POST', url: config_urls['card_list']+'data.json'},
                getData: {method: 'GET', url: config_urls['card_list']+'data.json'},
                putData: {method:'PUT',  url: config_urls['card_list']+'data{/key}.json'}
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        },
        beforeMount(){
            this.resource.getData()
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        for (let key in data) {
                            this.$store.commit('updateList', data[key]);
                        }
                    });
        }
    }
</script>
<style scoped>
    .list {
        background: #E2E4E6;
        border-radius: 3px;
        box-sizing: border-box;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        max-height: 100%;
        position: relative;
        white-space: normal;
    }
</style>