import React, { useState } from "react";
import Button from "../../../atoms/Button";

import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { Board } from "../../../../assets/Board";

import "./style.scss";

export default function Form() {
  const [sign, setSign] = useState("up");

  const handleSign = () => {
    if (sign === "up") {
      setSign("in");
    } else {
      setSign("up");
    }
  };
  return (
    <div className="container main">
      <Board className="icon" />
      <h1>Happening now</h1>
      <h3>Join Twitter today.</h3>

      <div className="d-flex flex-column">
        <Button label={`Sign ${sign} with Google`}>
          <FcGoogle className="icon" />
        </Button>
        <Button label={`Sign ${sign} with Apple`}>
          <AiFillApple className="icon" />
        </Button>
        <Button label={`Sign ${sign} with phone or email`} />

        <div className="marginB">
          <span>
            By signing up, you agree to the{" "}
            <a
              href="https://twitter.com/pt/tos"
              target="blank"
              className="link"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://twitter.com/pt/privacy"
              target="blank"
              className="link"
            >
              Privacy Policy
            </a>
            , including{" "}
            <a
              href="https://help.twitter.com/pt/rules-and-policies/twitter-cookies"
              target="blank"
              className="link"
            >
              Cookie Use
            </a>
            .
          </span>
        </div>

        <p className="marginB">
          Already have an account?{" "}
          <span onClick={handleSign} className="link">
            Sign {sign === "in" ? "up" : "in"}
          </span>
        </p>
      </div>
    </div>
  );
}
