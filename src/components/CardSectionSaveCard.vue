<template>
    <div>
        <div>
            <div>
                <textarea class="card-section-textarea" v-model="textAreaTask"></textarea>
                <div></div>
            </div>
        </div>
        <div>
            <div>
                <button @click="addCard">Add</button>
                <button @click="setSelectedComponent('AddCard')">Close</button>
                </a></div>
        </div>
    </div>
</template>

<script type="text/babel">
    import {mapActions} from 'vuex';
    import config_urls from '../urls'
    export default {
        data(){
            return {
                textAreaTask : '',
                resource: {}
            }
        },
        methods:{
            ...mapActions([
                'setSelectedComponent',
            ]),
            addCard(){
                if(this.$store.getters.cardList.length > 0){
                    this.$store.commit('addCard',(this.textAreaTask));
                    this.resource.putData({key:this.$store.getters.key}, this.$store.getters.cardList);
                }else{
                    this.$store.commit('addCard',(this.textAreaTask));
                    this.resource.saveData(this.$store.getters.cardList).then(response => {
                        return response.json();
                    }).then(data => {
                        this.$store.commit('setKey',(data.name));
                    });
                }
            }

        },
        created() {
            const customActions = {
                saveData: {method: 'POST', url: config_urls['card_list']+'data.json'},
                putData: {method:'PUT',  url: config_urls['card_list']+'data{/key}.json'}
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        },

    }
</script>
<style scoped>
.card-section-textarea{
    overflow: hidden; word-wrap: break-word; resize: none;
    background-color: #fff;
}
</style>