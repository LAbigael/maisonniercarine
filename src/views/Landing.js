import React from "react";

import { GoogleMap, Marker } from "react-google-maps";

import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import "./style.css";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
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
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white  font-semibold text-4xl">
                     Carine Maisonnier<br/> sage-femme libérale à Morcenx.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Votre accompagnement commence ici.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
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
                className="text-gray-300 fill-current"
                points="3560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20  bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap w-full justify-center">
               <div className="lg:pt-12 pt-6 w-full md:w-1/4 px-4 text-center">
                <a
                  href="#follow"
                  className="relative flex flex-col rounded-lg min-w-0 break-words bg-white w-full mb-8 shadow-lg  hover: cursor-pointer hover:shadow-xl"
                >
                   <div
                     style={{backgroundColor:"#fec89a"}}
                     className="px-4 py-5 flex-auto rounded-lg">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center ">
                       <img src={require("assets/img/svg/020-pregnant.svg").default} alt="My Happy SVG" class="h-12"/>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Suivi de grossesse
                    </h6>
                  </div>
                </a>
              </div>

              <div className="w-full md:w-1/4 px-4 text-center">
                <a
                  href="#prep"
                  className="relative flex flex-col w-full min-w-0 hover:cursor-pointer hover:shadow-xl rounded-lg break-words bg-white w-full mb-8 shadow-lg "
                >
                   <div className="px-4 py-5 flex-auto w-full rounded-lg"
style={{backgroundColor:"#f9dcc4"}}
                >
                    <div className="text-white p-3 text-center inline-flex items-center justify-center  mb-5">
                       <img src={require("assets/img/svg/022-pregnancy.svg").default} alt="My Happy SVG" class="h-12" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Préparation à l'accouchement
                    </h6>
                  </div>
                </a>
              </div>

              <div className="pt-6 w-full md:w-1/4 px-4 text-center">
                <a
                  href="#rehab"
                  className="relative flex flex-col min-w-0 w-full hover:cursor-pointer hover:shadow-xl rounded-lg break-words bg-white w-full mb-8 shadow-lg "
                >
                  <div style={{backgroundColor:"#ffb5a7"}} className="w-full px-4 py-5 flex-auto rounded-lg">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center  mb-5">
                       <img src={require("assets/img/svg/032-lotion.svg").default} alt="My Happy SVG" class="h-12" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Rééducation périnéale
                    </h6>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap justify-center" >
              <a
                href="#post"
              className="lg:pt-12 pt-6 w-full md:w-1/4 px-4 text-center rounded-lg"
              >
                 <div
                 style={{backgroundColor:"#ffb5a7"}} className="relative flex flex-col min-w-0 break-words bg-white hover: cursor-pointer hover:shadow-xl w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center  mb-5 ">
                       <img src={require("assets/img/svg/019-footprints.svg").default} alt="My Happy SVG"  class="h-12"/>
                    </div>
                    <h6 className="text-xl  font-semibold">
                      Accompagnement post-natal
                    </h6>
                  </div>
                </div>
              </a>

              <div className="w-full md:w-1/4 px-4 text-center">
                <a
                  href="#watch"
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 rounded-lg shadow-lg  hover: cursor-pointer hover:shadow-xl"
                >
                   <div
                  style={{backgroundColor:"#fcd5ce"}} className="px-4 py-5 flex-auto rounded-lg">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center  mb-5">
                       <img src={require("assets/img/svg/023-ultrasound.svg").default} alt="My Happy SVG" class="h-12" class="h-12"/>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Surveillance grossesse pathologique à domicile
                    </h6>
                  </div>
                </a>
              </div>

              <div className="pt-6 w-full md:w-1/4 px-4 text-center">
                <a
                  href="#gyneco"
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg  rounded-lg hover: cursor-pointer hover:shadow-xl"
                >
                   <div
                     style={{backgroundColor:"#f8edeb"}}
                     className="px-4 py-5 flex-auto rounded-lg">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center  mb-5">
                       <img src={require("assets/img/svg/006-pills.svg").default} alt="My Happy SVG" class="h-12" class="h-12"/>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Consultation et suivi gynécologique
                    </h6>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full flex flex-col md:flex-row bg-white bg-opacity-75 md:w-7/12 pr-4 rounded-lg mr-auto ml-auto">
                  <img
                    alt="..."
                    src={require("assets/img/portrait.jpg")}
                    style={{  objectPosition: "60% 0%"}}
                    className="justify-left mt-4 md:mt-auto md:rounded-l-lg md:mr-5 m-auto rounded-full md:h-full h-40 w-40  md:max-h-90 object-cover"
                  />
                     <div class="p-4">
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-900 ">
                  “Formée à l’école de sage-femme de Limoges, ma pratique est
                  axée sur la physiologie de la naissance et le respect des
                  femmes et AFAB, dans leur vie gynécologique et leur devenir parent.{" "}
                </p>

                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-900 ">
                  Je vous propose un suivi semi-global, tout au long de votre
                  grossesse et après votre accouchement. J'assure aussi le suivi
                  gynécologique médical de la puberté à la ménopause.”
                </p>

                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-600">
                  Chaque personne est unique, avec son besoin d’écoute et de
                  confiance.
                </p>
                <a href="#where" className="font-bold text-gray-800 mt-8">
                  Où me trouver ?
             </a>
     </div>
              </div>

              <div className="w-full pt-6 lg:pt-0 md:w-1/4 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src={require("assets/img/20191118_151828.jpg")}
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
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Mon cabinet vous attend
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Situé au centre ville de Morcenx, mon cabinet vous accueille
                      toute la semaine. Alors n'hésitez pas, prenez rendez-vous.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
               <div className="w-full md:w-5/12 mr-auto px-4">
                <img
                  alt="..."
                  style={{ height: "400px", width: "auto" }}
                  className="max-w-full rounded-lg mx-auto shadow-lg"
                  src={require("assets/img/pexels-amina-filkins-5427243.jpg")}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3
                    id="follow"
                    className="text-4xl title pt-6 lg:pt-0 font-semibold"
                  style={{color:"#ffb5a7"}}
                  >
                    Suivi de la grossesse
                  </h3>
                  <p className="mt-4  text-lg leading-relaxed text-gray-600">
                    <span className="font-semibold">Choisir un suivi par une sage-femme libérale ?</span>
                    <br />
                    Dans le cas d’une grossesse dite « physiologique », le suivi
                    de votre grossesse pourra se faire par une sage-femme. Une
                    consultation au cabinet dure 30 minutes, afin de prendre le
                    temps pour vous écouter, vous donner des conseils ou vous
                    rassurer sur les petits problèmes de la grossesse, de
                    l’accouchement et du post-accouchement.
                  </p>

                  <p className="mt-4  text-lg leading-relaxed text-gray-600">
                    <span className="font-semibold">Qu’est ce que le suivi global ?</span>
                    <br />
                    C’est avoir le même interlocuteur pendant toute votre
                    grossesse, au cours des consultations de grossesse, pour
                    vous préparer à la naissance de votre bébé, assurer les
                    visites à domicile à votre retour de la maternité, vous
                    accompagner dans la période post-natale et effectuer votre
                    suivi gynécologique de prévention.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-24 mx-auto px-4">
            <div className=" flex mb-8 flex-wrap">
               <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <h3
                  id="prep"
                  className="text-4xl font-semibold title"
                  style={{color:"#ffb5a7"}}
                >
                  Préparation accouchement
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Les cours de préparation à la naissance vous permettent de
                  développer des connaissances théoriques mais aussi, de
                  découvrir des outils pratiques (postures, respirations) afin
                  de faciliter le travail et de gérer la douleur des
                  contractions pendant votre accouchement, mais aussi de
                  préparer au mieux l’arrivée de bébé.
                </p>
                <span className="opacity-50 mt-4">
                  <span className=" mr-4 text-2xl font-bold ">?</span>8 cours de
                  préparation à la naissance (entretien prénatal compris) sont
                  pris en charge à 100% par la sécurité sociale.
                </span>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <ul className="mt-4 text-lg leading-relaxed text-gray-600">
                    <li>
                      La <span className="font-bold"> methode classique </span>, est basée sur des séquences théoriques afin de vous aider à comprendre la grossesse, l’accouchement et la vie avec un nouveau-né. Les cours sont toujours complétés par une partie pratique pour vous aider à comprendre comment respirer pendant les contractions, vous relaxer au maximum et pousser quand le moment sera venu. </li>
                    <li>
                       Le <span className="font-bold"> chant prenatal</span> est une méthode permettant aux parents de communiquer très tôt avec le bébé in utero. Dans le ventre de sa mère, le bébé est sensible aux sons et à la voix de ses parents. Ainsi après sa naissance, le nouveau-né reconnaît des sons et des mélodies qui le mettent en confiance et en sécurité.vibrations sonores donnent force au corps, aident à soulager la douleur et ouvrent le passage au bébé 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-24 px-4">
            <div className="items-center flex flex-wrap">
               <div className="w-full md:w-5/12 ml-auto mr-auto  px-4">
                <div className="md:pr-12">
                  <h3
                    id="watch"
                    className="text-4xl title  font-semibold"
                    style={{color:"#ffb5a7"}}
                  >
                    Surveillance grossesse pathologique à domicile
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Parfois la grossesse nécessite une surveillance particulière
                    à domicile en cas de contractions précoces, d’hypertension
                    artérielle, de diabète, de grossesse gémellaire,… Votre
                    gynécologue peut être amené à vous prescrire un
                    accompagnement médical par une sage-femme, avec
                    enregistrement monitoring, à domicile si votre état de santé
                    le nécessite.
                  </p>
                </div>
              </div>
              <div className="w-full pt-6 lg:pt-0 md:w-5/12 ml-auto  px-4">
                <img
                  alt="..."
                  style={{ height: "300px", width: "auto" }}
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/pexels-mart-production-7089333.jpg")}
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 pt-24">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:block hidden md:w-5/12 ml-auto  px-4">
                <img
                  alt="..."
                  style={{ height: "300px", width: "auto" }}
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/pexels-william-fortunato-6393191.jpg")}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto  px-4">
                <div className="md:pr-12">
                  <h3
                    id="post"
                    className="text-4xl title font-semibold"
                  style={{color:"#ffb5a7"}}
                  >
                    Accompagnement post-natal
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Une oreille attentive et des conseils pratiques. Une
                    surveillance physique. Un soutien pour l’allaitement.
                  </p>
                  <span className="opacity-50 mt-4">
                    <span className="mr-4 text-2xl font-bold ">?</span>
                    Jusqu’au 12e jour après l’accouchement, la visite d'une
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
                  style={{color:"#ffb5a7"}}
                >
                  Rééducation périnéale
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
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
                  style={{color:"#ffb5a7"}}
                  >
                    Consultation et suivi gynécologique
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
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
                  </p>
                    <span className="opacity-50 mt-4">
                      <span className="mr-4 text-2xl font-bold ">?</span>À
                      savoir : les sages-femmes peuvent également prescrire,
                      délivrer et administrer des
                      <span className="text-amber-600 text-base opacity-100">
                        {" "}
                        contraceptifs{" "}
                      </span>
                      auprès de patientes mineures en dehors de tout recueil
                      obligatoire, au préalable, du consentement des titulaires
                      de l’autorité parentale.
                    </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block bg-gray-900">
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
                className="text-gray-900 fill-current"
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
              style={{ maxWidth:"100%", border: 0 }}
              allowfullscreen="true"
              loading="lazy"
            ></iframe>
            <div className="flex flex-wrap text-center w-full pt-6 justify-end">
              <div className="w-full flex justify-center items-center flex-col mx-auto px-4">
                <h2 className="text-2xl font-semibold text-white">
                  Pour toute information, contactez moi !
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Tel: +33 6 09 87 67 42
                </p>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Email: maisonnier.carine@orange.fr
                </p>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Adresse : 45 bis Rue Roger Salengro, 40110 Morcenx-la-Nouvelle
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
