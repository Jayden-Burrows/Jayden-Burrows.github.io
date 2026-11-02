const drinkdata = {
    data() {
        return {
            drink: [{
                "drink_name": "Iced Matcha Latte",
                "drink_image": "https://oliviaadriance.com/wp-content/uploads/2024/09/Final_4_Honey_Matcha_Latte-300x300.jpg",
                "fact": " A vibrant blend of green tea powder, milk, and ice for a smooth, earthy taste.",
                "section": "101",
                "counter": "201"
            },
            {
                "drink_name": "Cold Brew Coffee",
                "drink_image": "https://preppykitchen.com/wp-content/uploads/2026/03/how-to-make-cold-brew-coffee-recipe-card-2-300x300.jpg",
                "fact": " Brewed slowly in cold water for 12 hours, giving a naturally sweet and rich flavor.",
                "section": "101",
                "counter": "202"
            },
            {
                "drink_name": "Chai Tea Latte",
                "drink_image": "https://sweetsimplevegan.com/wp-content/uploads/2018/12/Homemade-Chai-Tea-Latte-Date-Sweetened-Sweet-Simple-Vegan-23-copy-300x300.jpg",
                "fact": " A cozy mix of black tea, milk, and spices like cinnamon, cardamom, and cloves.",
                "section": "102",
                "counter": "203"
            },
            {
                "drink_name": "London Fog",
                "drink_image": "https://www.gimmesomeoven.com/wp-content/uploads/2013/12/London-Fog-Recipe-5-1-300x300.jpg",
                "fact": " Earl Grey tea with steamed milk and vanilla syrup — soft, floral, and comforting.",
                "section": "102",
                "counter": "204"
            },
            {
                "drink_name": "Thai Iced Tea",
                "drink_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKnUrsLyMIVWgJz5CPyexIbA2WzI7B_dwgpm3_NfiD6ebDE6DBhQoXcKW&s=10",
                "fact": " Sweet and creamy black tea served over ice, a favorite street drink in Thailand.",
                "section": "103",
                "counter": "205"
            },
            {
                "drink_name": "Taro Milk Tea",
                "drink_image": "https://www.ohhowcivilized.com/wp-content/uploads/taro-bubble-tea-recipe-300x300.jpg",
                "fact": " Sweet, nutty, and naturally purple — made from taro root and black tea.",
                "section": "103",
                "counter": "206"
            },
            {
                "drink_name": "Hibiscus Iced Tea",
                "drink_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nl96n6Vg0hfIh3wTPVH7o8gf_tNSnyB692K-OEK-WH_CTizHbt79DAV2&s=10",
                "fact": " Tart and refreshing with a deep ruby hue — naturally caffeine-free.",
                "section": "104",
                "counter": "207"
            },
            {
                "drink_name": "Espresso Macchiato",
                "drink_image": "https://easyweeknightrecipes.com/wp-content/uploads/2023/07/starbucks-coffee-3-300x300.jpg",
                "fact": " A strong espresso shot topped with a dollop of steamed milk foam.",
                "section": "104",
                "counter": "208"
            },
            {
                "drink_name": "Lavender Latte",
                "drink_image": "https://www.sugarhero.com/wp-content/uploads/2022/11/lavender-latte-square-1-300x300.jpg",
                "fact": " A floral twist on a classic latte with lavender syrup and creamy milk.",
                "section": "105",
                "counter": "209"
            },
            {
                "drink_name": "Affogato Al Caffè",
                "drink_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6kht4n_V_LLF8etCsLKa3uLlho3mLc9lrgViwcRYMX3s0L02FHdTAJCw&s=10",
                "fact": " A scoop of vanilla gelato drowned in a shot of hot espresso — dessert in a cup.",
                "section": "105",
                "counter": "210"
            },
            {
                "drink_name": "Iced Americano",
                "drink_image": "https://www.ohhowcivilized.com/wp-content/uploads/iced-americano-recipe-1-300x300.jpg",
                "fact": " Espresso diluted with cold water for a lighter, more refreshing flavor.",
                "section": "106",
                "counter": "211"
            },
            {
                "drink_name": "Golden Turmeric Latte",
                "drink_image": "https://homesteadandchill.com/wp-content/uploads/2020/02/golden-milk-recipe-turmeric-latte-vegan-homestead-chill-feature-300x300.jpg",
                "fact": " Spiced with turmeric, cinnamon, and ginger — an antioxidant-rich favorite.",
                "section": "106",
                "counter": "212"
            },
            {
                "drink_name": "Honey Oat Latte",
                "drink_image": "https://foodwithfeeling.com/wp-content/uploads/2021/02/Honey-Latte-5-edited-300x300.jpg",
                "fact": " Smooth espresso with oat milk and honey for a naturally sweet touch.",
                "section": "107",
                "counter": "213"
            },
            {
                "drink_name": "Strawberry Matcha Latte",
                "drink_image": "https://www.halfbakedharvest.com/wp-content/uploads/2022/06/Iced-Strawberry-Milk-Matcha-Latte-1-300x300.jpg",
                "fact": " Layered with strawberry purée, milk, and matcha — beautiful and delicious.",
                "section": "107",
                "counter": "214"
            },
            {
                "drink_name": "Peppermint Mocha",
                "drink_image": "https://bakingmehungry.com/wp-content/uploads/2025/12/peppermint-mocha-latte-7-300x300.jpg",
                "fact": " Chocolate and espresso topped with whipped cream and a hint of mint.",
                "section": "108",
                "counter": "215"
            },
            {
                "drink_name": "Caramel Latte",
                "drink_image": "https://www.halfbakedharvest.com/wp-content/uploads/2020/12/Salted-Caramel-Brulee-Latte-1-300x300.jpg",
                "fact": " Sweet caramel flavor blended with espresso and creamy milk foam.",
                "section": "108",
                "counter": "216"
            },
            {
                "drink_name": "Oolong Milk Tea",
                "drink_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdq1vcq3LncpSUOvXDSDyTgLIOD4m7vk4dskFDaClsB9aXHZtGzIHbseT&s=10",
                "fact": " Semi-oxidized tea with a roasted aroma and silky finish when mixed with milk.",
                "section": "109",
                "counter": "217"
            },
            {
                "drink_name": "Rose Milk Tea",
                "drink_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfeqAnSzkzLuk1YnmOIhIP77viKmgiRGYmaY4gpG0oEWjt_qgjMftkCTM&s=10",
                "fact": " Fragrant rose syrup mixed with black tea and milk for a floral sweetness.",
                "section": "109",
                "counter": "218"
            },
            {
                "drink_name": "Espresso Con Panna",
                "drink_image": "https://coffeeloverscup.com/wp-content/uploads/2022/01/espresso-con-panna-000-300x300.jpg",
                "fact": " A rich espresso shot topped with lightly whipped cream.",
                "section": "110",
                "counter": "219"
            },
            {
                "drink_name": "Vanilla Cold Foam",
                "drink_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjY6i7_Dib_W5cA7338W7mIlSqs7S39IEKXxlbs3NfVcq-KUNeRBPOfTw&s=10",
                "fact": " Cold brew topped with a thick layer of vanilla cold foam — smooth and creamy.",
                "section": "110",
                "counter": "220"
            },
            {
                "drink_name": "Coconut Latte",
                "drink_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxv1CnKPBSOcIJyFnXf_-26-ENxZuhv6Bxn0uC6l6QE5uHCbA64X0v8E&s=10",
                "fact": " Made with coconut milk for a tropical, dairy-free flavor twist.",
                "section": "111",
                "counter": "221"
            },
            {
                "drink_name": "Black Sugar Milk Tea",
                "drink_image": "https://www.ohhowcivilized.com/wp-content/uploads/brown-sugar-bubble-tea-recipe-300x300.jpg",
                "fact": " Sweetened with caramelized brown sugar and tapioca pearls — chewy and bold.",
                "section": "111",
                "counter": "222"
            },
            {
                "drink_name": "Honeydew Bubble Tea",
                "drink_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tthvPjYJzqLnm71BSrG5Sp1OGexQHKJVoMJKzUe15qgkuZpzwiMl13YA&s=10",
                "fact": " Creamy melon flavor blended with milk and chewy boba pearls.",
                "section": "112",
                "counter": "223"
            },
            {
                "drink_name": "Espresso Tonic",
                "drink_image": "https://www.maryswholelife.com/wp-content/uploads/2024/04/Espresso-Tonic-13-300x300.jpg",
                "fact": " A refreshing mix of espresso and tonic water with a citrus twist.",
                "section": "112",
                "counter": "224"
            },
            {
                "drink_name": "Matcha Lemonade",
                "drink_image": "https://www.ohhowcivilized.com/wp-content/uploads/iced-matcha-lemonade-recipe-300x300.jpg",
                "fact": " Bright and tangy — matcha shaken with lemonade over ice.",
                "section": "113",
                "counter": "225"
            },
            {
                "drink_name": "Vietnamese Iced Coffee",
                "drink_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRfnBHQmnzr4Rc0Bhp88LR5K3r49QsLt_v9x9hZy6E3cLYqLAvdZwkYv0&s=10",
                "fact": " Strong coffee brewed with condensed milk for a sweet, bold flavor.",
                "section": "113",
                "counter": "226"
            },
            {
                "drink_name": "Flat White",
                "drink_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-a4UUp5IgqvXSOMmzu0puXBEMNbeU85hjgmZOm3hhDOz13iIoI_7pkqg&s=10",
                "fact": " Espresso with microfoam milk — smoother than a latte, stronger than a cappuccino.",
                "section": "114",
                "counter": "227"
            },
            {
                "drink_name": "Café Au Lait",
                "drink_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43zeoElNo9A8jVD-iv0bL43PLpVgjtBWO6aNqBJ2Y9ss50oJkRuqHiCY&s=10",
                "fact": " Equal parts coffee and steamed milk, a French breakfast classic.",
                "section": "114",
                "counter": "228"
            },
            {
                "drink_name": "Mocha Latte",
                "drink_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZuBya9X4-9hZ9x-bJiCBFyzjaSSmDeBlnD1C8J-0x39QLPe-Hr77-Ls&s=10",
                "fact": " Espresso and steamed milk with a rich chocolate flavor — a cozy favorite.",
                "section": "115",
                "counter": "229"
            }],
            drinkname: "",
            drinkImg: "",
            fact: "",
            counter: 0,
        };
    },
    methods: {
        displayDrink() {
            const chosen = this.drink.find(d => d.drink_name === this.selectedDrink);
            if (chosen) {
                this.counter = this.drink.findIndex(d => d == chosen);
                this.drinkname = chosen.drink_name;
                this.drinkImg = chosen.drink_image;
                this.fact = chosen.fact;
            }
        },
        showDrink() {
            const current = this.drink[this.counter];
            if (!current) return;
            this.drinkname = current.drink_name;
            this.drinkImg = current.drink_image;
            this.fact = current.fact;
            this.counter++;
            if (this.counter >= this.drink.length) {
                this.counter = 0;
            }
        }
    }, mounted() {
        this.showDrink();
    }

};



Vue.createApp(drinkdata).mount("#drink");