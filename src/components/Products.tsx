import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Products(){

    interface Card{
        name: string,
        age: number,
        description: string,
        image: string,
        price: string,
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 30,
          image: "/Hero.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          age: 25,
          image: "./Levosa.png" ,
          description: 'Stylish cafe chair',
        },
        {
          name: 'Lalito',
          price: "Rp 7.000.000",
          age: 28,
          image: '/sofaset.png',
          description: 'Luxury big sofa.',
        },
        {
          name: 'Respira',
          price: "Rp 500.000",
          age: 28,
          image: '/Respero.png',
          description: 'Outdoor bar table and stool',
        },
        {
          name: 'Grifo',
          price: "Rp 1.500.000",
          age: 28,
          image: '/Grifo.png',
          description: 'Night lamp',
        },
        {
          name: 'Muggo',
          price: "Rp 150.000",
          age: 28,
          image: '/Muggo.png',
          description: 'Small mug',
        },
        {
          name: 'Pinkgky',
          price: "Rp 7.000.000",
          age: 28,
          image: '/Pingky.png',
          description: 'Cute bed set',
        },
        {
          name: 'Potty',
          price: "Rp 500.000",
          age: 28,
          image: '/Potty.png',
          description: 'Minimalist flower pot',
        },
      ];
    
    return (
        <div className="w-[1440px]">
        <div  className="product">
            <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
            </div>
            <div className="cardsContainer">
            {data.map((card, index) => (
              
            <div className="card" key={index} style={{ width: "15rem" }}>
                <img
                  src={card.image}
                  style={{ width: "18rem", height: "18rem" }}
                  className="card-img-top"
                //   alt={card.title}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.name}
                  </h5>
                  <p className="card-text">{card.description}</p>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.price}
                  </h5>
            </div>
            </div>
                    ))}


        </div>
        <div className="flex w-[1440px] items-center justify-center mb-12">
       <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]"><Link href={"/singleproduct"}>Show More</Link> </button>
        </div>
        </div>
    )
}