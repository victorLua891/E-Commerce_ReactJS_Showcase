//import all the assets files from the table in here
//we will have to take write a script to add to this script dynamically 
//when the user adds a product. 

import img_1 from './images/banner_img_1.png'
import img_2 from './images/banner_img_2.png'
import img_3 from './images/banner_img_3.png'


//export. 
//will also contain the data in the database. 


export const products = [
    {
        _id: "aaaaa", 
        name: "IPhone X",
        description: "Iphone X Slick",
        image: [img_1],
        category: "Phone", 
        popularItem: true,
        date: new Date(),
        variation: ["red", "black", "navy blue"],
        cost: 2580,
        stock: 356

    },
    {
        _id: "bbbb", 
        name: "IPhone 13",
        description: "Iphone 13",
        image: [img_2],
        category: "Phone", 
        popularItem: true,
        date: new Date(),
        variation: ["red", "black", "navy blue"],
        cost: 2050,
        stock: 300

    },
    {
        _id: "ccccc", 
        name: "IPhone 13",
        description: "Iphone 13",
        image: [img_3],
        category: "Phone", 
        popularItem: true,
        date: new Date(),
        variation: ["red", "black", "navy blue"],
        cost: 2050,
        stock: 300

    }

]