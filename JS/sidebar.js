app.component('side-bar', {
    template:
        /*html*/
        `
        <div id="sidebar">
            <h1>Helper tools</h1>
            <div id="selection">
             <h2 v-for="(selection, key) in selections" @click="emitID(key)" :class="{selected: key == id}">{{selection}}</h2>
            </div>
        </div>
    `,
    data() {
        return {
            id: 0,
            selections: ["string replacement", "string concat"]
        }
    },
    methods: {
        emitID(selectedItem){
            this.id = selectedItem;
            this.$emit('new-id', selectedItem);
        }
    }

})