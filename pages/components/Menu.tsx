import Image from "next/image";

const Menu = () => (
  <section className="bg-palette-  text-gray-700">
    <div className="flex flex-row mb-8 overflow-x-scroll  px-4">
      <div className="lg:pt-12 h-96 w-80 pt-6  px-4 text-center">
        <a
          href="#follow"
          className=" flex flex-col rounded-lg  break-words   mb-8  hover:cursor-pointer"
        >
          <div className="px-4 flex-col flex justify-center rounded-lg">
            <div className="h-64 w-64 text-white p-3 text-center">
              <Image
                width={300}
                height={300}
                src="/img/baby-in-foetus.png"
                alt="My Happy SVG"
                className=""
              />
            </div>
            <h6 style={{ fontFamily: "Ogg"}} className="text-lg font-semibold ">Suivi de grossesse<br/>Préparation accouchement</h6>
          </div>
        </a>
      </div>
      <div className="lg:pt-12 h-96 w-80 pt-6  px-4 text-center">
        <a
          href="#follow"
          className=" flex flex-col rounded-lg  break-words   mb-8  hover:cursor-pointer"
        >
          <div className="px-4 flex-col flex justify-center rounded-lg">
            <div className="h-64 w-64 text-white p-3 text-center">
              <Image
                width={300}
                height={300}
                src="/img/uterus.png"
                alt="My Happy SVG"
                className=""
              />
            </div>
            <h6 style={{ fontFamily: "Ogg"}} className="flex flex-col justify-center text-lg font-semibold ">Gynécologie<br/>Rééducation périnéale</h6>
          </div>
        </a>
      </div>
      <div className="lg:pt-12 h-96 w-80 pt-6  px-4 text-center">
        <a
          href="#follow"
          className=" flex flex-col rounded-lg  break-words   mb-8  hover:cursor-pointer"
        >
          <div className="px-4 flex-col flex justify-center rounded-lg">
            <div className="h-64 w-64 text-white p-3 text-center">
              <Image
                width={300}
                height={300}
                src="/img/parenthood.png"
                alt="My Happy SVG"
                className=""
              />
            </div>
            <h6 style={{ fontFamily: "Ogg"}} className="text-lg font-semibold ">Accompagnement post-natal</h6>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default Menu;
