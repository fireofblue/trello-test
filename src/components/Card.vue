<template>
    <div class="list-card">
        <span class="list-card-operation">quick-edit</span>
        <div class="list-card-details">
            <span>{{localName}}</span>
            <div>
                <span>{{localDate}}</span>
            </div>
            <input type="text" placeholder="plase insert sth" v-model="localName" :value="localName"/>name
            <hr>
            <input type="text" placeholder="plase insert sth" v-model="localDate" :value="localDate"/>date
            <button @click="updateCard({name:localName,date:localDate,index:localIndex})">submit</button>
        </div>
    </div>
</template>

<script type="text/babel">
    import {mapActions} from 'vuex';
    export default {
        props:[
            'name',
            'date',
            'index'
        ],
        watch:{
          name(){
              this.localName = this.name
          },
          date(){
                this.localDate = this.date
          },
          index(){
                this.localIndex = this.index
          }
        },
        data() {
            return {
                localName : this.name,
                localDate : this.date,
                localIndex : this.index
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