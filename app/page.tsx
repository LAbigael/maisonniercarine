"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Blob1 from "./components/blob-haikei1";
import Blob2 from "./components/blob-haikei2";
import Footer from "./components/Footer";

export default function Landing() {
  return (
    <div className="relative">
      <Navbar />
      <main className="text-gray-600 bg-palette-yellow">
        <div
          className="relative pt-16 pb-32 flex flex-col content-center items-center justify-center"
          style={{
            minHeight: "100vh",
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
            />
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
        <div className="flex bg-palette-green w-full flex-col justify-center lg:flex-row items-center">
          <div className="lg:w-7/12 w-full lg:flex lg:flex-col items-center text-center lg:mr-4">
            <div className="lg:w-2/3  p-4 flex flex-col items-center justify-center">
              <motion.span
                className="text-2xl border-gray-700 rounded-lg lg:border-b-2 pb-2 text-gray-700 mb-2 w-full text-center"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontFamily: "Ogg", fontWeight: 400 }}
              >
                Votre accompagnement commence ici.
              </motion.span>
              <div className="w-full flex flex-col md:flex-row bg-opacity-75 pr-4 rounded-lg mr-auto ml-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-center lg:mr-12"
                >
                  <Image
                    width={600}
                    height={600}
                    alt="..."
                    src="/img/portrait.jpg"
                    style={{ objectPosition: "60% 0%" }}
                    className="justify-left m-auto rounded-full lg:rounded-4xl lg:w-96 lg:h-44  h-40 w-40 object-cover"
                  />
                </motion.div>
                <div className="p-4">
                  <p className="text-lg italic lg:text-justify text-center font-light  mt-4 mb-4 text-gray-900 ">
                    “Formée à l’école de sage-femme de Limoges, ma pratique est
                    axée sur la physiologie de la naissance et le respect des
                    femmes et AFAB, dans leur vie gynécologique et leur devenir
                    parent. <br />
                    Je vous propose un suivi semi-global, tout au long de votre
                    grossesse et après votre accouchement. J&apos;assure aussi
                    le suivi gynécologique médical de la puberté à la
                    ménopause.”
                    <br />
                    Chaque personne est unique, avec son besoin d’écoute et de
                    confiance.
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-center flex-row mt-2"
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

          <div className="w-full pt-6 lg:pt-0 lg:w-3/12 px-4 mr-auto ml-auto">
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

        <section className="pt-8">
          <div className="items-center flex flex-wrap">
            <h3
              id="follow"
              className="text-palette-purple text-3xl text-center w-full title pt-6 lg:pt-0 font-semibold"
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
                <p className="mt-4    text-gray-600">
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

                <p className="mt-4    text-gray-600">
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
          <div className=" flex pt-8 flex-wrap">
            <div className="w-full  px-4">
              <h3
                id="prep"
                className="text-palette-purple text-center text-3xl font-semibold title"
              >
                Préparation accouchement
              </h3>
              <p className="mt-4    text-gray-600">
                Les cours de préparation à la naissance vous permettent de
                développer des connaissances et de découvrir des outils
                (postures, respirations) afin de faciliter le travail et de{" "}
                <span className="font-bold">gérer la douleur</span> des
                contractions pendant votre accouchement, mais aussi de préparer
                au mieux l’arrivée de bébé.
              </p>
              <span className="opacity-0  mt-4 hidden">
                <span className=" mr-4 opacity-100 text-2xl font-bold ">?</span>
                8 cours de préparation à la naissance (entretien prénatal
                compris) sont pris en charge à 100% par la sécurité sociale.
              </span>
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="relative items-center h-64 w-1/2 flex flex-row justify-center">
              <Blob1 />
              <Modal
                button="Méthode classique"
                text={`La <span style='font-style:"bold";'> méthode classique </span>est basée sur des séquences théoriques afin de vous aider à comprendre la grossesse, l’accouchement et la vie avec un nouveau-né. Les cours sont toujours complétés par une partie pratique pour vous aider à comprendre comment respirer pendant les contractions, vous relaxer au maximum et pousser quand le moment sera venu.`}
              />
            </div>
            <div className="relative items-center h-56 w-1/2 flex flex-row justify-center">
              <Blob2 />
              <Modal
                button="Champ prénatal"
                text=" <div> Le <span className='font-bold'> chant prenatal</span> est une méthode permettant aux parents de communiquer très tôt avec le bébé in utero. Dans le ventre de sa mère, le bébé est sensible aux sons et à la voix de ses parents. Ainsi après sa naissance, le nouveau-né reconnaît des sons et des mélodies qui le mettent en confiance et en sécurité.vibrations sonores donnent force au corps, aident à soulager la douleur et ouvrent le passage au bébé </div>"
              />
            </div>
          </div>
          <div className="items-center px-4 pt-8 flex flex-wrap">
            <h3
              id="watch"
              className="text-palette-purple text-center text-3xl title  font-semibold"
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
            <Image
              width={600}
              height={600}
              alt="..."
              style={{ height: "auto", width: "70%" }}
              className="max-w-full rounded-lg h-64 mx-auto"
              src="/img/pregnant_and_midwife.png"
            />
          </div>

          <div className="container mx-auto px-4 pt-8">
            <h3
              id="post"
              className="text-center text-palette-purple text-3xl title font-semibold"
            >
              Accompagnement post-natal
            </h3>
            <p className="mt-4   text-gray-600">
              Une oreille attentive et des conseils pratiques. Une surveillance
              physique. Un soutien pour l’allaitement.
            </p>
            <p className="bg-white/30 border-gray-50 border text-gray-500 p-4 rounded-lg mt-4">
              Jusqu’au 12e jour après l’accouchement, la visite d&apos;une
              sage-femme sera remboursée à 100 % par la Sécurité sociale.
              Au-delà, le remboursement sera de 70 %, le reste pouvant être pris
              en charge par votre mutuelle.
            </p>
          </div>

          <div className="container pt-8 mx-auto px-4">
            <h3
              id="rehab"
              className="text-3xl text-center  text-palette-purple title font-semibold"
            >
              Rééducation périnéale
            </h3>
            <p className="mt-4 text-gray-600">
              Quand commencer la rééducation du périnée ? Il vaut mieux attendre
              six semaines. Avant, les hormones jouent encore beaucoup dans la
              tonicité musculaire du périnée. Après cette période de
              récupération naturelle, toutes les séances sont remboursées à 100%
              par l’Assurance Maladie.
              <br />
              Quelle méthode? Au cabinet, la méthode choisie est la rééducation
              manuelle du périnée. Elle se base sur la compréhension du
              fonctionnement de tous les muscles du périnée et vous apprend à
              les entraîner.
            </p>
          </div>
          <div className="container pt-8 mx-auto px-4">
            <h3
              id="gyneco"
              className="text-center text-palette-purple text-3xl title font-semibold"
            >
              Consultation et suivi gynécologique
            </h3>
            <p className="mt-4 text-gray-600">
              Au cabinet, je vous propose:
              <br />
              • La réalisation des frottis cervico-vaginaux de dépistage.
              <br />
              • La pose, la surveillance et le retrait des dispositifs
              intra-utérins (stérilets) que vous ayez déjà eu des enfants ou
              non.
              <br />
              • La pose, la surveillance et le retrait des implants
              contraceptifs.
              <br />
              • La prescription, la surveillance et le renouvellement de votre
              contraception orale ou locale.
              <br />• la vaccination contre le papillomavirus humain.
            </p>
            <p className="bg-white/30 border-gray-50 border text-gray-500 p-4 rounded-lg mt-4">
              À savoir : les sages-femmes peuvent également prescrire, délivrer
              et administrer des
              <span className="text-palette-blue text-base">
                {" "}
                contraceptifs{" "}
              </span>
              auprès de patientes mineures en dehors de tout recueil
              obligatoire, au préalable, du consentement des titulaires de
              l’autorité parentale.
            </p>
          </div>
        </section>
        <motion.svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <motion.path
            whileInView={{
              d: "M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            }}
            viewport={{ once: true }}
            custom={1}
            className="fill-palette-blue"
            fillOpacity="1"
            transition={{
              ease: "easeIn",
              duration: 1,
            }}
            d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,170.7C672,160,768,96,864,112C960,128,1056,224,1152,266.7C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></motion.path>
        </motion.svg>
      </main>
      <Footer />
    </div>
  );
}
