import Image from "next/image";

interface MenuItemProps {
  src: string;
  text: string;
  subText?: string;
  link: string;
}

const MenuItem = ({ link, src, text, subText }: MenuItemProps) => {
  return (
    <div className="h-96 w-54 pt-6  px-4 text-center">
      <a
        href={link}
        className=" flex flex-col rounded-lg  break-words   mb-8  hover:cursor-pointer"
      >
        <div className="lg:p-8 flex-col flex justify-center rounded-lg">
          <div className="h-64 w-64 text-white p-3 text-center">
            <Image
              width={300}
              height={300}
              src={src}
              alt="My Happy SVG"
              className=""
            />
          </div>
          <h6 style={{ fontFamily: "Ogg" }} className="text-lg font-semibold ">
            {text}
            <br />
            {subText}
          </h6>
        </div>
      </a>
    </div>
  );
};
const Menu = () => (
  <div className="lg:mx-auto lg:justify-center flex flex-row mb-8 overflow-y-hidden overflow-x-scroll  px-4">
    <MenuItem
      src="/img/baby-in-foetus.png"
      text="Suivi de grossesse"
      subText="Préparation accouchement"
      link="#follow"
    />
    <MenuItem
      src="/img/uterus.png"
      text="Gynécologie"
      subText="Rééducationpérineale"
      link="#prep"
    />
    <MenuItem
      src="/img/parenthood.png"
      text="Accompagnement post-natal"
      link="#gyneco"
    />
  </div>
);

export default Menu;
