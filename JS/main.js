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
    }, 
    mounted() {
        elementsWithSlideAnimation = document.getElementsByClassName("slide_animation");

        for(let i = 0; i < elementsWithSlideAnimation.length; i++){
            elementsWithSlideAnimation[i].style = '--order:'+i;
            if(i >= 5){
                elementsWithSlideAnimation[i].addEventListener("animationend", function(){
                    Array.from(elementsWithSlideAnimation).forEach(element => {
                        element.classList.remove("slide_animation");
                    });
                }, false);
                break;
            } 
        }
    }
})