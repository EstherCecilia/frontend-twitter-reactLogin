import React from "react";
import { Logo } from "../../../../assets/Logo";
import "./style.scss";

export default function Stand() {
  return (
    <div className="container stand">
      <img
        src="https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png"
        alt="Fundo de imagem de grafite"
        className="w-100 image"
      ></img>
      <Logo className="board" />
    </div>
  );
}
