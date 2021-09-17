import React from "react";
import "./style.scss";

export default function Button({ label, icon, ...props }) {
  return (
    <button>
      {props.children}
      {label}
    </button>
  );
}
