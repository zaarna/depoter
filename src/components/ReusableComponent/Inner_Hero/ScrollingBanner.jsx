
import Image from "next/image";
import Marquee from "react-fast-marquee";
export default function ScrollingBanner( {features = []} ) {


  return (
    <div className="bg-[#212121] py-4 overflow-hidden">
          <Marquee
            gradient={false}
            speed={90} 
            pauseOnHover={true} 
          >
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-4 mx-10">
                <Image src={item.icon} alt={item.text} width={36} height={36} />
                <span className="text-white text-[22px]">
                  {item.text}
                </span>
              </div>
            ))}
          </Marquee>
    </div>
  );
}
