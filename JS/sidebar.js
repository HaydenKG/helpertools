app.component('side-bar', {
    template:
        /*html*/
        `
        <div id="sidebar">
            <h1 class="slide_animation">Helper tools</h1>
            <div id="selection">
             <h3 class="selection_btn slide_animation" v-for="(selection, key) in selections" @click="emitID(key)" :class="{selected: key == id}">{{selection}}</h3>
            </div>
        </div>
    `,
    data() {
        return {
            id: 0,
            selections: ["string replacement", "string concat", "to string array"]
        }
    },
    methods: {
        emitID(selectedItem){
            this.id = selectedItem;
            this.$emit('new-id', selectedItem);
        },
        slideinAnimation(index){
            return {'--order': index}
        }
    }

})