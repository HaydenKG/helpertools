app.component('string-converter', {
    template:
        /*html*/
        `        
        <div id="string_conversion" class="slide_animation">
            <h2>Text Input:</h2>
            <textarea class="input_area" v-model="stringholder"></textarea>
            <h2>Replace:</h2>
            <input v-model="toReplace"> 
            <h2>With:</h2>
            <input v-model="replaceWith"> 
            <h2>Result:</h2>
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
            toReplace: "",
            replaceWith: ""
        }
    },
    methods: {
        async copyToClipboard(){
            await navigator.clipboard.writeText(this.result);
        }
    },
    computed: {
        result() {
            if(this.stringholder.length < 1 || this.toReplace.length < 1) return "";
            return this.stringholder.replaceAll(this.toReplace, this.replaceWith);
        }
    }
})