<template>
    <div class="list-card">
        <span class="list-card-operation">quick-edit</span>
        <div class="list-card-details">
            <span>{{name}}</span>
            <div>
                <span>{{date}}</span>
            </div>
            <input type="text" placeholder="plase insert sth" v-model="localName" :value="name"/>name
            <hr>
            <input type="text" placeholder="plase insert sth" v-model="localDate" :value="date"/>date
            <button @click="updateCard({name:localName,date:localDate,index:index})">submit</button>
        </div>
    </div>
</template>

<script type="text/babel">
    import {mapActions} from 'vuex';
    export default {
        props:[
            'index',
            'card'
        ],
        data(){
            return{
                localName : "",
                localDate : ""
            }
        },
        computed:{
            name() {
                return this.$store.getters.cardList[this.index].task_name
            },
            date(){
                return this.$store.getters.cardList[this.index].date
            }
        },
        methods:{
            ...mapActions([
                'updateCard'
            ])
        }
    }
</script>
<style scoped>
    .list-card-details{
        overflow: hidden;
        padding: 6px 6px 2px 8px;
        position: relative;
        z-index: 10;
    }
    .list-card{
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        border-radius: 3px;
        cursor: pointer;
        margin-bottom: 6px;
        max-width: 300px;
        min-height: 20px;
        position: relative;
        z-index: 0;
    }
    .list-card-operation {
        background-color: #EDEFF0;
        background-clip: padding-box;
        background-origin: padding-box;
        border-radius: 3px;
        opacity: .8;
        padding: 4px;
        position: absolute;
        right: 3px;
        top: 3px;
        visibility: hidden;
        z-index: 40;
    }
    .list-card-operation:hover {
        background-color: #D6DADC;
        opacity: 1;
    }
    .list-card.-active .list-card-operation{
        visibility: visible;
    }
    .list-card.-active{
        background-color: #EDEFF0;
        border-bottom-color: #D6DADC;
    }
</style>