const app = Vue.createApp({
    data() {
        return {
            showItemWithID: 0
        }
    },
    methods:{
        IDchanged(value){
            this.showItemWithID = value;
        }
    }
})