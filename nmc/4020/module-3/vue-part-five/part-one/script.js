const drinkData = {
    el: "#drinks",
    data() {
        return {
            firstName: "Cafe",
            lastName: "De Claire"
        };
    },
    computed: {
        cafeName() {
            return this.firstName + " " + this.lastName;
        }
    }
};

Vue.createApp(drinkData).mount("#drinks"); 