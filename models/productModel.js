const ProductModel = {


    //fakeDB
    products : [
        {
            id: 1,
            title: "Cozy New York Apartment In the Heart of Times Square",
            location: "New York",
            rating: 4,
            Type: "Apartment",
            price: 300,
            description: "3 bed, 2 bath.",
            imgL: "/img/apt1NewYork.jpg",
            imgS: "/img/apt1NewYorkS.jpg"
        },
        {
            id: 2,
            title: "Nice and Spacious! Roman Apartment Sleep 16!",
            location: "Rome",
            rating: 3,
            Type: "Apartment",
            price: 699,
            description: "1 bed, 1 bath, full kitchen.",
            imgL: "/img/apt2Rome.jpg",
            imgS: "/img/apt2RomeS.jpg"

        },
        {
            id: 3,
            title: "Apartment for One in Tokyo's Best Apartment Building",
            location: "Tokyo",
            rating: 2,
            Type: "Apartment",
            price: 150,
            description: "1 bed, common bath. 50 sq ft.",
            imgL: "/img/apt3Kyoto.jpg",
            imgS: "/img/apt3KyotoS.jpg"

        },
        {
            id: 4,
            title: "New York Hotel in the Action FREE PARKING",
            location: "New York",
            rating: 5,
            Type: "Hotel",
            price: 499,
            description: "1 king bed.",
            imgL: "/img/hotel1NewYork.jpg",
            imgS: "/img/hotel1NewYorkS.jpg"

        },
        {
            id: 5,
            title: "Brand New Hotel Close to Major Transit",
            location: "Tokyo",
            rating: 5,
            Type: "Hotel",
            price: 345,
            description: "1 queen bed, 1 bath with large tub.",
            imgL: "/img/hotel2Kyoto.jpg",
            imgS: "/img/hotel2KyotoS.jpg"

        },
        {
            id: 6,
            title: "Get Away From it All in Luxurious, New Resort",
            location: "Havana",
            rating: 3,
            Type: "Resort",
            price: 1000,
            description: "2 twin beds or 1 queen bed.",
            imgL: "/img/resort1Cuba.jpg",
            imgS: "/img/resort1CubaS.jpg"

        },
        {
            id: 7,
            title: "Modern Resert Recently Refurbished, Hot Tub Included",
            location: "Havana",
            rating: 4,
            Type: "Resort",
            price: 567,
            description: "Hot tub in the room! (Not pictured, but it's there).",
            imgL: "/img/resort2Cuba.jpg",
            imgS: "/img/resort2CubaS.jpg"

        },
        {
            id: 8,
            title: "Serene and Peaceful Getaway Private Villa Sleep 5",
            location: "Tokyo",
            rating: 3,
            Type: "Villa",
            price: 895,
            description: "5 beds, 3 baths, 2 kitchens.",
            imgL: "/img/villa1Kyoto.jpg",
            imgS: "/img/villa1KyotoS.jpg"

        },
        {
            id: 9,
            title: "Private Tropical Villa 4 Bed",
            location: "Havana",
            rating: 2,
            Type: "Villa",
            price: 430,
            description: "4 beds, 6 baths, pool.",
            imgL: "/img/villa2Cuba.jpg",
            imgS: "/img/villa2CubaS.jpg"

        },
        {
            id: 10,
            title: "Recently Updated In the Heart of Tropical Wilderness, Sleep 5",
            location: "Havana",
            rating: 4,
            Type: "Villa",
            price: 1400,
            description: "3 beds, 2 baths, private gym.",
            imgL: "/img/villa3Cuba.jpg",
            imgS: "/img/villa3CubaS.jpg"

        },
        {
            id: 11,
            title: "Old Charm",
            location: "Vancouver",
            rating: 3,
            Type: "Villa",
            price: 2500,
            description: "12 beds, 2 baths, recently refurbished.",
            imgL: "/img/villa4Vancouver.jpg",
            imgS: "/img/villa4VancouverS.jpg"

        },
        {
            id: 12,
            title: "Modern and Sleek Apartment Free Parking",
            location: "Vancouver",
            rating: 1,
            Type: "Apartment",
            price: 700,
            description: "1 queen bed, 1/2 bath.",
            imgL: "/img/apt4Vancouver.jpg",
            imgS: "/img/apt4VancouverS.jpg"

        }


    ],

    getByLocation(location){
        return this.products.filter(product=>product.location===location);
    },

    getByType(type){
        return this.products.filter(product=>product.Type===type);
    },
    getAll(){
        return this.products;
    },

    getAProduct(id)
    {
        return this.products.find(product=>product.id === id);   
    },

    getTypes(){
        
        const types = new Array;
        types.push(this.products.find(product=>product.Type === "Apartment"));
        types.push(this.products.find(product=>product.Type === "Villa"));
        types.push(this.products.find(product=>product.Type === "Resort"));
        types.push(this.products.find(product=>product.Type === "Hotel"));

        return types;

    },

    getLocations(){
        const locations = new Array;
        locations.push(this.products.find(product=>product.location === "Havana"));
        locations.push(this.products.find(product=>product.location === "Vancouver"));
        locations.push(this.products.find(product=>product.location === "Rome"));
        locations.push(this.products.find(product=>product.location === "Tokyo"));
        locations.push(this.products.find(product=>product.location === "New York"));

        return locations;
    }
}

module.exports = ProductModel;