import React from 'react';
import headerImg from '../../../assets/images/header img/header-img.png';

const About = () => {
    return (
        <div>
            <div className="hero my-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={headerImg} className="rounded-lg w-full p-4" />
                    <div>
                        <p className="py-6 text-xl md:text-2xl font-semibold text-white">The Tropical Gem: Coconut</p>
                        <h1 className="text-3xl md:text-5xl text-yellow-400 font-bold">SPECIAL COCONUTS</h1>
                        <p className="py-6 text-gray-400 text-justify">The coconut, a tropical fruit from the coconut palm tree, is prized for its versatile uses and nutritional value. Encased in a hard, fibrous husk is the coconut seed, known for its rich, white meat and hydrating water. Coconuts are a source of essential nutrients, including vitamins, minerals, and healthy fats. In addition to being consumed fresh, coconuts yield products such as coconut milk, oil, and flour, contributing to diverse culinary applications. Culturally significant in tropical regions, the coconut palm is often referred to as the "Tree of Life." Economically vital, coconuts support industries beyond food, including cosmetics, soaps, and pharmaceuticals. Overall, coconuts symbolize tropical abundance and serve as a valuable resource for both cultural practices and economic activities.</p>
                        <button className="btn btn-outline btn-sm btn-warning btn-wide">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;