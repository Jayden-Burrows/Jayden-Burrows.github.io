const co = Vue.createApp({});

co.component("toast", {
    props: {
        toastOpinion: String,
        bgColor: String
    },

    template: `
        <div>
            <button v-on:click="checkToast">Check the toast</button>
            <h3 :style="{ backgroundColor: bgColor}" >The toast is {{ toastState }}</h3>
            <h3>{{ toastOpinion }}</h3>
        </div>
    `,

    data() {
        return {
            toastState: "burnt"
        };
    },

    methods: {
        checkToast() {
            this.toastState = "perfect";
        }
    }
});

co.mount("#co");