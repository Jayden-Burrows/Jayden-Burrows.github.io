const co = Vue.createApp({});

co.component("clicker", {
    props: { monster: String },

    template: `
        <div>
            <h3>{{ monster }}</h3>
            <img :src="monsterImg" :alt="monster" >
            <br> <button v-on:click="feed">Feed 🍖</button>
        </div>
    `,

    data() {
        return {
            monsterSize: 0,
            monsters: {
                "Dino": {
                    monsterImgs: [
                        "https://a23d.co/cdn-cgi/imagedelivery/S4svCqSolndHzMne84t1OQ/A23DMOD193770A_Preview/thumbnail",
                        "https://p.turbosquid.com/ts-thumb/Oe/L9FqN1/bY/001/jpg/1750647488/300x300/sharp_fit_q85/49abe3f1e86601e239eb7020d601eb37c0e66bad/001.jpg",
                        "https://p.turbosquid.com/ts-thumb/rc/pDg12m/Vo/sig_01_search/png/1792673830/300x300/sharp_fit_q85/8b20f0a3d80f1742c80e9669a13b07000ed6f900/sig_01_search.jpg"
                    ]
                },
                "Dragon": {
                    monsterImgs: [
                        "https://i.etsystatic.com/42659535/r/il/091039/6329829724/il_300x300.6329829724_cecd.jpg",
                        "https://a23d.co/cdn-cgi/imagedelivery/S4svCqSolndHzMne84t1OQ/A23DMOD038224A_Preview/thumbnail",
                        "https://a23d.co/cdn-cgi/imagedelivery/S4svCqSolndHzMne84t1OQ/A23DMOD061725A_Preview/thumbnail"
                    ]
                }
            }
        };
    },

    computed: {
        monsterImg() {
            const imgs = this.monsters[this.monster]?.monsterImgs;
            if (!imgs) return "";
            const i = this.monsterSize > 20 ? 2 : this.monsterSize > 10 ? 1 : 0;
            return imgs[i];
        }
    },

    methods: {
        feed() {
            this.monsterSize++;
        }
    }
});

co.mount("#co");