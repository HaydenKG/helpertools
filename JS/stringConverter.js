app.component('string-converter', {
    template:
        /*html*/
        `
        <div id="stringconversion">
            <h2>Text Input</h2>
            <input v-model="stringholder">
            <h2>Replace</h2>
            <input v-model="toReplace"> 
            <h2>With</h2>
            <input v-model="replaceWith"> 
            <h2>Result</h2>
            <p>{{result}}</p>
        <div>
    `,
    data() {
        return {
            stringholder: "",
            toReplace: "",
            replaceWith: ""
        }
    },
    methods: {

    },
    computed: {
        result() {
            return this.stringholder.replaceAll(this.toReplace, this.replaceWith);
        }
    }
})