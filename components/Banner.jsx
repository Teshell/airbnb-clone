import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src="https://links.papareact.com/0fm"
        alt=""
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Banner;
