app.component('string-concat', {
    template:
        /*html*/
        `
        <div id="string_conversion">
            <h2>First Text Input</h2>
            <input v-model="stringholder">
            <h2>Second Text Input</h2>
            <input v-model="stringholder2">
            <h2>Result</h2>
            <span id="replacement_result">
                {{result}}
                <button id="copy_btn" v-show="result.length > 0" :click="copyToClipboard()">
                    <span class="material-symbols-outlined">
                        content_copy
                    </span>
                </button>
            </span>
        </div>
    `,
    data() {
        return {
            stringholder: "",
            stringholder2: "",
        }
    },
    methods: {
        async copyToClipboard(){
            await navigator.clipboard.writeText(this.result);
        }
    },
    computed: {
        result() {
            return this.stringholder.concat(this.stringholder2);
        }
    }
})