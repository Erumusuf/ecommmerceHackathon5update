import Image from "next/image";
import HeroImage from "@/Pictures/Hero.png";
export default function Hero() {
  return (
    <div className="heroBody1">
    <div>
      <Image
          src={HeroImage}
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        <div className="heroText  bg-[#FFF3E3]">
          <h6>New Arrival</h6>
          <h3>Discover Our <br /> New Collection</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolore</p>
            <button className=" buyBtn">BUY NOW</button>
        </div>
      </div>

      
    </div>
  
  );
}
