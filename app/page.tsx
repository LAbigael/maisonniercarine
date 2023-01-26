"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faLocationPin, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Modal from "./components/Modal";

export default function Landing() {
   return (
      <div className="relative">
         <Navbar />
         <main className="text-gray-600 bg-palette-yellow">
            <div
               className="relative pt-16 pb-32 flex flex-col content-center items-center justify-center"
               style={{
                  minHeight: "75vh",
               }}
            >
               <div
                  className="absolute top-0 w-full h-full bg-center bg-cover"
                  style={{
                     backgroundImage:
                        "url('https://images.pexels.com/photos/34763/baby-sleeping-baby-baby-girl.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
                  }}
               >
                  <span
                     id="blackOverlay"
                     className="w-full h-full absolute opacity-75 bg-black"
                  ></span>
               </div>
               <div className="w-full">
                  <div className="items-center flex flex-col jutify-center">
                     <div className="w-full lg:w-6/12 px-4 text-center">
                        <motion.h1
                           initial={{ y: 100, opacity: 0 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           className="text-palette-blue font-bold pb-4 text-6xl"
                           style={{ fontFamily: "Ogg", fontWeight: 100 }}
                        >
                           Carine Maisonnier
                        </motion.h1>
                        <motion.div
                           initial={{ y: 100, opacity: 0 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           style={{ fontFamily: "Ogg", fontWeight: 400 }}
                           className="text-gray-300 text-lg"
                        >
                           <span
                              style={{ fontFamily: "Ogg", fontWeight: 700 }}
                              className="text-gray-200 text-2xl"
                           >
                              sage-femme
                           </span>{" "}
                           libérale à Morcenx.
                        </motion.div>
                     </div>
                  </div>
               </div>
               <motion.svg
                  className="absolute bottom-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  initial="hidden"
                  animate="visible"
               >
                  <motion.path
                     whileInView={{
                        d: "M0,0L40,16C80,32,160,64,240,101.3C320,139,400,181,480,202.7C560,224,640,224,720,202.7C800,181,880,139,960,106.7C1040,75,1120,53,1200,48C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z",
                     }}
                     viewport={{ once: true }}
                     custom={1}
                     className="fill-palette-green"
                     fillOpacity="1"
                     animate={"visible"}
                     transition={{
                        ease: "easeIn",
                        duration: 1,
                     }}
                     d="M0,128L40,122.7C80,117,160,107,240,117.3C320,128,400,160,480,192C560,224,640,256,720,245.3C800,235,880,181,960,176C1040,171,1120,213,1200,234.7C1280,256,1360,256,1400,256L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                  ></motion.path>
               </motion.svg>
            </div>
            <div className="flex bg-palette-green flex-wrap items-center ">
               <motion.span
                  className="mt-6 w-full text-center text-2xl text-gray-700"
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ fontFamily: "Ogg", fontWeight: 400 }}
               >
                  Votre accompagnement commence ici.
               </motion.span>
               <div className="w-full flex flex-col md:flex-row  bg-opacity-75 md:w-7/12 pr-4 rounded-lg mr-auto ml-auto">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5 }}
                  >
                     <Image
                        width={600}
                        height={600}
                        alt="..."
                        src="/img/portrait.jpg"
                        style={{ objectPosition: "60% 0%" }}
                        className="justify-left mt-4 md:mt-auto md:rounded-l-lg md:mr-5 m-auto rounded-full md:h-full h-40 w-40  md:max-h-90 object-cover"
                     />
                  </motion.div>
                  <div className="p-4">
                     <p className="text-lg italic text-center font-light  mt-4 mb-4 text-gray-900 ">
                        “Formée à l’école de sage-femme de Limoges, ma pratique est axée
                        sur la physiologie de la naissance et le respect des femmes et
                        AFAB, dans leur vie gynécologique et leur devenir parent. <br />
                        Je vous propose un suivi semi-global, tout au long de votre
                        grossesse et après votre accouchement. J&apos;assure aussi le
                        suivi gynécologique médical de la puberté à la ménopause.”
                        <br />
                        Chaque personne est unique, avec son besoin d’écoute et de
                        confiance.
                     </p>
                     <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center -center flex-row mt-2"
                     >
                        <Image
                           src="/img/location-pointer.svg"
                           alt=""
                           width={20}
                           height={4}
                        />
                        <Link href="#where" className="font-bold text-gray-800 pl-2">
                           Où me trouver ?
                        </Link>
                     </motion.div>
                  </div>
               </div>

               <div className="w-full pt-6 lg:pt-0 md:w-1/4 px-4 mr-auto ml-auto">
                  <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-palette-blue">
                     <Image
                        width={600}
                        height={600}
                        alt="..."
                        src="/img/20191118_151828.jpg"
                        className="w-full align-middle rounded-t-lg"
                     />
                     <blockquote className="relative p-8 mb-4">
                        <svg
                           preserveAspectRatio="none"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 583 95"
                           className="absolute left-0 w-full block"
                           style={{
                              height: "95px",
                              top: "-94px",
                           }}
                        >
                           <polygon
                              points="-30,95 583,95 583,65"
                              className="fill-palette-blue "
                           ></polygon>
                        </svg>
                        <h4
                           className="text-xl text-gray-600 font-bold "
                           style={{ fontFamily: "Ogg" }}
                        >
                           Mon cabinet vous attend
                        </h4>
                        <p className="text-md text-gray-500 font-light mt-2 text-lg">
                           Situé au centre ville de Morcenx, mon cabinet vous accueille
                           toute la semaine. Alors n&apos;hésitez pas, prenez
                           rendez-vous.
                        </p>
                     </blockquote>
                  </div>
               </div>
            </div>
            <svg
               className="rotate-180"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1440 320"
            >
               <motion.path
                  custom={1}
                  whileInView={{
                     d: "M0,256L40,234.7C80,213,160,171,240,160C320,149,400,171,480,197.3C560,224,640,256,720,240C800,224,880,160,960,165.3C1040,171,1120,245,1200,266.7C1280,288,1360,256,1400,240L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z",
                  }}
                  viewport={{ once: true }}
                  className="fill-palette-green"
                  fillOpacity="1"
                  animate={"visible"}
                  transition={{
                     ease: "easeIn",
                     duration: 1,
                  }}
                  d="M0,128L40,122.7C80,117,160,107,240,117.3C320,128,400,160,480,192C560,224,640,256,720,245.3C800,235,880,181,960,176C1040,171,1120,213,1200,234.7C1280,256,1360,256,1400,256L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
               ></motion.path>
               <path className="fill-palette-yellow" fillOpacity="1" d=""></path>
            </svg>

            <Menu />

            <section className="my-8">
               <div className="items-center flex flex-wrap">
                  <h3
                     id="follow"
                     className="text-palette-purple text-4xl text-center w-full title pt-6 lg:pt-0 font-semibold"
                  >
                     Suivi de la grossesse
                  </h3>
                  <div className="w-full  px-4">
                     <Image
                        width={400}
                        height={400}
                        alt="..."
                        style={{ height: "auto", width: "100%" }}
                        className="max-w-full rounded-lg mx-auto"
                        src="/img/consulting.png"
                     />
                  </div>
                  <div className="w-full px-4">
                     <div className="md:pr-12">
                        <p className="mt-4 text-justify   text-gray-600">
                           <span className="font-semibold">
                              Choisir un suivi par une sage-femme libérale ?
                           </span>
                           <br />
                           Pour votre grossesse, vous pouvez être suivi par une
                           sage-femme. Une consultation au cabinet permet de prendre le
                           temps pour vous <span className="font-bold">écouter</span>,
                           vous donner des conseils ou vous
                           <span className="font-bold"> rassurer </span>sur les petits
                           problèmes de la grossesse, de l’accouchement et du
                           post-accouchement.
                        </p>

                        <p className="mt-4 text-justify   text-gray-600">
                           <span className="font-semibold">
                              Qu’est ce que le suivi global ?
                           </span>
                           <br />
                           C’est avoir le même interlocuteur pendant toute votre
                           grossesse, pour vous{" "}
                           <span className="font-bold">préparer</span> à la naissance de
                           votre bébé, assurer les visites à domicile à votre{" "}
                           <span className="font-bold">retour de la maternité</span>,
                           vous accompagner dans la{" "}
                           <span className="font-bold">période post-natale</span> et
                           effectuer votre suivi{" "}
                           <span className="font-bold">gynécologique</span> de
                           prévention.
                        </p>
                     </div>
                  </div>
               </div>
               <div className=" flex my-8 flex-wrap">
                  <div className="w-full  px-4">
                     <h3
                        id="prep"
                        className="text-palette-purple text-center text-4xl font-semibold title"
                     >
                        Préparation accouchement
                     </h3>
                     <p className="mt-4  text-justify  text-gray-600">
                        Les cours de préparation à la naissance vous permettent de
                        développer des connaissances et de découvrir des outils
                        (postures, respirations) afin de faciliter le travail et de{" "}
                        <span className="font-bold">gérer la douleur</span> des
                        contractions pendant votre accouchement, mais aussi de préparer
                        au mieux l’arrivée de bébé.
                     </p>
                     <span className="opacity-0  mt-4">
                        <span className=" mr-4 opacity-100 text-2xl font-bold ">?</span>
                        8 cours de préparation à la naissance (entretien prénatal
                        compris) sont pris en charge à 100% par la sécurité sociale.
                     </span>
                  </div>
               </div>

               <div className="flex flex-row w-full">
                  <div className="relative items-center h-72 w-1/2 flex flex-row justify-center">
                     <Image
                        src="/img/svg/blob-haikei(2).svg"
                        width={300}
                        height={400}
                        alt=""
                        className="absolute"
                     />
                     <Modal
                        button="Méthode classique"
                        text=" <div> Le <span className='font-bold'> chant prenatal</span> est une méthode permettant aux parents de communiquer très tôt avec le bébé in utero. Dans le ventre de sa mère, le bébé est sensible aux sons et à la voix de ses parents. Ainsi après sa naissance, le nouveau-né reconnaît des sons et des mélodies qui le mettent en confiance et en sécurité.vibrations sonores donnent force au corps, aident à soulager la douleur et ouvrent le passage au bébé </div>"
                     />
                  </div>
                  <div className="relative items-center h-72 w-1/2 flex flex-row justify-center">
                     <Image
                        src="/img/svg/blob-haikei(3).svg"
                        width={300}
                        height={400}
                        alt=""
                        className="absolute"
                     />
                     <Modal
                        button="Champ prénatal"
                        text="La <span className='font-bold'> methode classique </span>, est basée sur des séquences théoriques afin de vous aider à comprendre la grossesse, l’accouchement et la vie avec un nouveau-né. Les cours sont toujours complétés par une partie pratique pour vous aider à comprendre comment respirer pendant les contractions, vous relaxer au maximum et pousser quand le moment sera venu."
                     />
                  </div>
               </div>
               <div className="items-center flex flex-wrap">
                  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                     <div className="md:pr-12">
                        <h3
                           id="watch"
                           className="text-4xl title  font-semibold"
                           style={{ color: "#ffb5a7" }}
                        >
                           Surveillance grossesse pathologique à domicile
                        </h3>
                        <p className="mt-4   text-gray-600">
                           Parfois la grossesse nécessite une surveillance particulière à
                           domicile en cas de contractions précoces, d’hypertension
                           artérielle, de diabète, de grossesse gémellaire,… Votre
                           gynécologue peut être amené à vous prescrire un accompagnement
                           médical par une sage-femme, avec enregistrement monitoring, à
                           domicile si votre état de santé le nécessite.
                        </p>
                     </div>
                  </div>
                  <div className="w-full pt-6 lg:pt-0 md:w-5/12 ml-auto  px-4">
                     <Image
                        width={4}
                        height={4}
                        alt="..."
                        style={{ height: "300px", width: "auto" }}
                        className="max-w-full rounded-lg shadow-lg"
                        src="/img/pexels-mart-production-7089333.jpg"
                     />
                  </div>
               </div>

               <div className="container mx-auto px-4 pt-24">
                  <div className="items-center flex flex-wrap">
                     <div className="w-full lg:block hidden md:w-5/12 ml-auto  px-4">
                        <Image
                           width={4}
                           height={4}
                           alt="..."
                           style={{ height: "300px", width: "auto" }}
                           className="max-w-full rounded-lg shadow-lg"
                           src="/img/pexels-william-fortunato-6393191.jpg"
                        />
                     </div>
                     <div className="w-full md:w-5/12 ml-auto mr-auto  px-4">
                        <div className="md:pr-12">
                           <h3
                              id="post"
                              className="text-4xl title font-semibold"
                              style={{ color: "#ffb5a7" }}
                           >
                              Accompagnement post-natal
                           </h3>
                           <p className="mt-4   text-gray-600">
                              Une oreille attentive et des conseils pratiques. Une
                              surveillance physique. Un soutien pour l’allaitement.
                           </p>
                           <span className="opacity-50 mt-4">
                              <span className="mr-4 text-2xl font-bold ">?</span>
                              Jusqu’au 12e jour après l’accouchement, la visite d&apos;une
                              sage-femme sera remboursée à 100 % par la Sécurité sociale.
                              Au-delà, le remboursement sera de 70 %, le reste pouvant
                              être pris en charge par votre mutuelle.
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="container py-20 mx-auto px-4">
                  <div className="items-center flex flex-wrap">
                     <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <h3
                           id="rehab"
                           className="text-4xl  title font-semibold"
                           style={{ color: "#ffb5a7" }}
                        >
                           Rééducation périnéale
                        </h3>
                        <p className="mt-4   text-gray-600">
                           Quand commencer la rééducation du périnée? Il vaut mieux
                           attendre six semaines. Avant, les hormones jouent encore
                           beaucoup dans la tonicité musculaire du périnée. Après cette
                           période de récupération naturelle, toutes les séances sont
                           remboursées à 100% par l’Assurance Maladie.
                           <br />
                           Quelle méthode? Au cabinet, la méthode choisie est la
                           rééducation manuelle du périnée. Elle se base sur la
                           compréhension du fonctionnement de tous les muscles du périnée
                           et vous apprend à les entraîner.
                        </p>
                     </div>
                     <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                           <h3
                              id="gyneco"
                              className="text-4xl pt-6 lg:pt-0 title font-semibold"
                              style={{ color: "#ffb5a7" }}
                           >
                              Consultation et suivi gynécologique
                           </h3>
                           <div className="mt-4   text-gray-600">
                              Au cabinet, je vous propose:
                              <ul>
                                 <li>
                                    La réalisation des frottis cervico-vaginaux de dépistage
                                 </li>
                                 <li>
                                    La pose, la surveillance et le retrait des dispositifs
                                    intra-utérins (stérilets) que vous ayez déjà eu des
                                    enfants ou non.
                                 </li>
                                 <li>
                                    La pose, la surveillance et le retrait des implants
                                    contraceptifs
                                 </li>
                                 <li>
                                    La prescription, la surveillance et le renouvellement de
                                    votre contraception orale ou locale
                                 </li>
                                 <li>la vaccination contre le papillomavirus humain</li>
                              </ul>
                           </div>
                           <span className="opacity-50 mt-4">
                              <span className="mr-4 text-2xl font-bold ">?</span>À savoir
                              : les sages-femmes peuvent également prescrire, délivrer et
                              administrer des
                              <span className="text-amber-600 text-base opacity-100">
                                 {" "}
                                 contraceptifs{" "}
                              </span>
                              auprès de patientes mineures en dehors de tout recueil
                              obligatoire, au préalable, du consentement des titulaires de
                              l’autorité parentale.
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="relative block bg-palette-blue">
               <div
                  className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                  style={{ height: "80px", transform: "translateZ(0)" }}
               >
                  <svg
                     className="absolute bottom-0 overflow-hidden"
                     xmlns="http://www.w3.org/2000/svg"
                     preserveAspectRatio="none"
                     version="1.1"
                     viewBox="0 0 2560 100"
                     x="0"
                     y="0"
                  >
                     <polygon
                        className="fill-palette-blue"
                        points="2560 0 2560 100 0 100"
                     ></polygon>
                  </svg>
               </div>

               <div
                  id="where"
                  className="container flex flex-col lg:flex-row mx-auto px-4 pt-8 lg:pb-12"
               >
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.50288237563!2d-0.9117647840442428!3d44.03166637911034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54158dad78f5c7%3A0xd49ceb094db3d66f!2sMaisonnier%20carine!5e0!3m2!1sen!2sfr!4v1615735880542!5m2!1sen!2sfr"
                     width="700"
                     height="450"
                     style={{ maxWidth: "100%", border: 0 }}
                     allowFullScreen={true}
                     loading="lazy"
                  ></iframe>
                  <div className="flex flex-wrap text-center w-full pt-6 justify-end">
                     <div className="w-full flex  flex-col mx-auto px-4">
                        <h2 className="text-2xl font-semibold text-gray-700">
                           Pour toute information, contactez moi !
                        </h2>
                        <div className="flex items-center flex-row text-lg leading-relaxed mt-4  text-gray-600">
                           <FontAwesomeIcon icon={faMobile} className="mr-6"/> +33 6 09 87 67 42
                        </div>
                        <div className="flex items-center flex-row text-lg leading-relaxed mt-2  text-gray-600">
                           <FontAwesomeIcon icon={faEnvelope} className="mr-6" /> maisonnier.carine@orange.fr
                        </div>
                        <div className="flex items-center flex-row text-lg  mt-2  text-gray-600">
                          <FontAwesomeIcon icon={faLocationPin} className="mr-6" /> 45 bis Rue Roger Salengro, 40110 Morcenx-la-Nouvelle
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <footer className="text-center pt-8 text-sm text-gray-500 pb-2 bg-palette-blue">
            © 2023 Abigaêl Laldji. Tout droit réservé.
         </footer>
      </div>
   );
}
