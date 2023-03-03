import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faLocationPin,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const Spring = ({
  delay = 0,
  children,
}: {
  delay: number;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, delay }}
    >
      {children}
    </motion.div>
  );
};

const Footer = () => (
  <footer className="block pt-20 mx-auto relative bg-palette-blue footer">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden "
      style={{ height: "80px", transform: "translateZ(0)" }}
    ></div>

    <div
      id="where"
      className="container flex flex-col lg:flex-row mx-auto px-4 pt-8 mt-20 lg:pb-12 -mt-20"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.50288237563!2d-0.9117647840442428!3d44.03166637911034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54158dad78f5c7%3A0xd49ceb094db3d66f!2sMaisonnier%20carine!5e0!3m2!1sen!2sfr!4v1615735880542!5m2!1sen!2sfr"
        width="700"
        height="450"
        style={{ maxWidth: "100%", border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      />
      <div className="w-full flex items-center justify-center flex-col mx-auto px-4">
        <div>
          <h2 className="text-2xl text-center lg:text-left mt-8 lg:mt-0 font-semibold text-gray-700">
            Pour toute information, contactez moi !
          </h2>
          <div className="flex items-center flex-row  leading-relaxed mt-4  text-gray-600">
            <Spring delay={1}>
              <FontAwesomeIcon icon={faMobile} className="mr-6" />
            </Spring>
            +33 6 09 87 67 42
          </div>
          <div className="flex items-center flex-row  leading-relaxed mt-2  text-gray-600">
            <span></span>
            <Spring delay={1.5}>
              <FontAwesomeIcon icon={faEnvelope} className="mr-6" />
            </Spring>
            maisonnier.carine@orange.fr
          </div>
          <div className="flex items-center flex-row   mt-2  text-gray-600">
            <Spring delay={2}>
              <FontAwesomeIcon icon={faLocationPin} className="mr-6" />
            </Spring>
            45 bis Rue Roger Salengro, 40110 Morcenx-la-Nouvelle
          </div>
        </div>
      </div>
    </div>
    <div className="text-center pt-8 text-sm text-gray-500 pb-2 bg-palette-blue">
      © 2023 Carine Maisonnier. Tout droit réservé.
    </div>
  </footer>
);
export default Footer;
