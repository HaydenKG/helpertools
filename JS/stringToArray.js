app.component('string-to-array', {
    template:
        /*html*/
        `        
        <div id="string_conversion">
            <h2>Text Input:</h2>
            <input v-model="stringholder">
            <h2>Result:</h2>
            <span id="replacement_result">
                {{result}}
                <!--<button id="copy_btn" v-show="result.length > 0" :click="copyToClipboard()">
                    <span class="material-symbols-outlined">
                        content_copy
                    </span>
                </button>-->
            </span>
        </div>
    `,
    data() {
        return {
            stringholder: "",
        }
    },
    methods: {
        // async copyToClipboard(){
        //     await navigator.clipboard.writeText(this.result);
        // } //not copying the string as it is shown
    },
    computed: {
        result() {
            if(this.stringholder.length < 1) return "";
            return this.stringholder.match(/\b(\w+)'?(\w+)?\b/g).flat();
        }
    }
})