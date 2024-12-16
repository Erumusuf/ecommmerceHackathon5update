import Image from "next/image"
import ShopImage from "@/Pictures/shophero.png"
import Products from "@/components/Products";
import BlowHero from "@/components/ShopBlowHero";
import "../css/contact.css"
import Footer from "@/components/Footer";

export default function Relproduct() {

  interface Card {
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
      image: "./Levosa.png",
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
  ];



  return (
    <div className="w-[100%] h-[600px] flex-col justify-items-center space-y-7">
      <div className='text-4xl font-medium'>
        <h2>Related Product</h2>
      </div>


      <div className="cardsContainer">
        {data.map((card, index) => (

          <div className="card" key={index} style={{ width: "15rem" }}>
            <img
              src={card.image}
              style={{ width: "18rem", height: "18rem" }}
              className="card-img-top"
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
      <button className="w-[245px] h-[48px] text-base font-semibold border border-lightBrown text-lightBrown">Show more</button>
    </div>
  )
}