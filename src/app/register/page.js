"use client";
import Breadcrumb from "@/utils/Breadcrumb";
import Button from "@/utils/Button";
import React, { useState } from "react";

export default function Register() {
  const [title, setTitle] = useState("");
  const [checkBox, setCheckBox] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleCheckboxChange = (e) => {
    setCheckBox(e.target.checked);
  };

  return (
    <div className="px-20 font-mada mb-28">
      <Breadcrumb slug={"Créer un compte"} />
      <p className="mt-5 flex flex-row items-start justify-start text-[1.563em] font-medium tracking-wider">
        CRÉER UN COMPTE
      </p>
      <div className="font-[500]">
        <p className="mt-7 flex flex-row items-start justify-start ">
          Vous avez déjà un compte ? Connectez-vous
        </p>
        <p className="mt-9 flex flex-row items-start justify-start ">Titre</p>
        <div className="mt-2 flex flex-row items-center space-x-4">
          <label className="flex items-center pr-10">
            <input
              type="radio"
              name="title"
              value="M"
              checked={title === "M"}
              onChange={handleTitleChange}
              className="radio-custom"
            />
            <span className="ml-2">M</span>
          </label>
          <label className="flex items-center ">
            <input
              type="radio"
              name="title"
              value="Mme"
              checked={title === "Mme"}
              onChange={handleTitleChange}
              className="radio-custom"
            />
            <span className="ml-2">Mme</span>
          </label>
        </div>
        <div className=" mt-9 ">
          <label className="text-[1.063em]">Prénom</label>
          <input
            type="text"
            className="p-3.5 border border-gray-300 w-full placeholder-transparent"
          />
          <p className=" italic opacity-30 text-[.875rem]">
            Seules les lettres et le point (.), suivi d'un espace, sont
            autorisés.
          </p>
        </div>
        <div className=" mt-9 ">
          <label className="text-[1.063em]">Nom</label>
          <input
            type="text"
            className="p-3.5 border border-gray-300 w-full placeholder-transparent"
          />
          <p className=" italic opacity-30 text-[.875rem]">
            Seules les lettres et le point (.), suivi d'un espace, sont
            autorisés.
          </p>
        </div>
        <div className=" mt-9 ">
          <label className="text-[1.063em]">E-mail</label>
          <input
            type="text"
            className="p-3.5 border border-gray-300 w-full placeholder-transparent"
          />
        </div>
        <div className=" mt-9 ">
          <label className="text-[1.063em]">Mot de passe</label>
          <input
            type="password"
            className="p-3.5 border border-gray-300 w-full placeholder-transparent"
          />
        </div>
        <div className="mt-9">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={checkBox}
              onChange={handleCheckboxChange}
            />
            <span>Recevoir notre newsletter</span>
          </label>
          <p className=" mt-2 ml-3 italic opacity-30 text-[.875rem]">
            Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela
            nos informations de contact dans les conditions d'utilisation du
            site.
          </p>
        </div>
        <div className="mt-9">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={checkBox}
              onChange={handleCheckboxChange}
            />
            <span>
              J'accepte les conditions générales et la politique de
              confidentialité
            </span>
          </label>
        </div>
        <div className="flex flex-row justify-end mt-12">
          <Button title={"SAUVEGARDER"} />
        </div>
      </div>
    </div>
  );
}
