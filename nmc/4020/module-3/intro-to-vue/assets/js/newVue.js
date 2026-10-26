var header = new Vue({
    el: '#header',
    data: {
        yourName: 'Jayden Burrows',
        description: 'Aspiring Cybersecurity Professional',
        link1: 'Introduction',
        link2: 'My Portfolio',
        link3: 'Learn About Me',
        link4: 'Contact Me',
        link5: 'Some of My Favorite Shows',
        avatar: "images/2026_Headshot.png",
    }
})

var list = new Vue({
    el: '#list',
    data: {
        favorites: ['Avatar: the Last Airbender', 'Legend of Korra', 'Avatar: Seven Havens', 'Fallout'],
    }
})

var conditional = new Vue({
    el: '#conditional',
    data: {
        teacherName: "",
        favoriteGame: ""
    }
})

var getColor = new Vue({
    el: '#function',
    data: {
        bgColor: '',
        colors: ['red', 'green', 'blue', 'purple', 'gold']
    },
    methods: {
        changeColor(color) {
            this.bgColor = color;
        }
    }
})

var portfolio = new Vue({
    el: '#portfolio',
    data: {
        portfolioTitle: "Photography Portfolio",
        image1: "images/carnival.jpg",
        imgText1: "UGA Union Carnival",
        image2: "images/sunset-clouds.jpg",
        imgText2: "Sunset over Soule Hall",
        image3: "images/sanford.jpg",
        imgText3: "Sanford Sky",
        image4: "images/turtle.jpg",
        imgText4: "Turtle Pond",
        image5: "images/ramblr.jpg",
        imgText5: "Wright House",
        image6: "images/car.jpg",
        imgText6: "Oglethorpe Parking",
        portfolioText: "Here are some photos I've taken while at UGA! They look a little pixelated because I scaled them down to about 10% of their original size."
    }
})