import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, footerLogo, headerLogo, offer, shoe4, shoe5, shoe6, shoe7, shoe8, thumbnailBackground, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import {truckFast, star, arrowRight, chevronLeft, cheveronRight, facebook, instagram, twitter, support, shieldTick, copyrightSign} from "../assets/icons"

export const navLinks = [
    {href: "/", label: "Home"},
    {href: "/about", label: "About Us"},
    {href: "/products", label: "Products"},
    {href: "/contact", label: "Contact Us"}
];

export const shoes = [
    {thumnail: thumbnailShoe1, bigShoe: bigShoe1},
    {thumnail: thumbnailShoe2, bigShoe: bigShoe2},
    {thumnail: thumbnailShoe3, bigShoe: bigShoe3}
];

export const statistics = [
    {value: "1.5k", label: "Brands"},
    {value: "500+", label: "Shops"},
    {value: "250k+", label: "Customers"}
];

export const products = [
    {
        id: 1,
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        rating: "(4.5)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum \
        dolor sit amet consectetur adipisicing elit. Quisquam, quae. dolor sit amet consectetur adipisicing eli"

    },
    {
        id: 2,
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        rating: "(4.0)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum \
        dolor sit amet consectetur adipisicing elit. Quisquam, quae. dolor sit amet consectetur adipisicing eli"
    },
    {
        id: 3,
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        rating: "(3.0)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum \
        dolor sit amet consectetur adipisicing elit. Quisquam, quae. dolor sit amet consectetur adipisicing eli"
    },
    {
        id: 4,
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        rating: "(3.5)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum \
        dolor sit amet consectetur adipisicing elit. Quisquam, quae. dolor sit amet consectetur adipisicing eli"
    }
];

export const productList = [
    {
        id: 1,
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        rating: "(4.5)"
    },
    {
        id: 2,
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        rating: "(4.0)"
    },
    {
        id: 3,
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        rating: "(3.0)"
    },
    {
        id: 4,
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        rating: "(3.5)"
    },
    {
        id: 5,
        imgURL: bigShoe1,
        name: "Nike Air Jordan-101",
        price: "$200.20",
        rating: "(4.5)"
    },
    {
        id: 6,
        imgURL: bigShoe2,
        name: "Nike Air Jordan-150",
        price: "$300.20",
        rating: "(4.0)"
    },
    {
        id: 7,
        imgURL: bigShoe3,
        name: "Nike Air Jordan-200",
        price: "$430.20",
        rating: "(3.0)"
    }
];

export const services = [
    {
        imgURL: truckFast,
        lable: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service"
    },
    {
        imgURL: shieldTick,
        lable: "Secure payment",
        subtext: "Experience worry-free transactions with our secure payment system"
    },
    {
        imgURL: support,
        lable: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way"
    }
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: "Morich Brown",
        rating: '(4.5)',
        feedback: "The attention to details and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: "Lota Mongeskar",
        rating: '(4.0)',
        feedback: "The product not only meet but exceeded my expectation. I will definately be a returning customer"
    }
];

export const socialHandles = [
    facebook,
    twitter,
    instagram
]