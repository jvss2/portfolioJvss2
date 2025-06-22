// C:\Users\josev\portfolioJvss2\src\containers\greeting\Greeting.js
import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import NautilusGLBViewer from "../../components/NautilusGLBViewer/NautilusGLBViewer"; // Importe o seu novo componente
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import NautilusSticker from "../../assets/images/NautilusSticker.gif"; // Mantenha seu GIF

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">
                  <img
                    src={NautilusSticker}
                    alt="Nautilus Sticker"
                    className="pulsing-sticker"
                  />
                </span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Me contate!" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Baixe meu Currículo" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <NautilusGLBViewer
              modelPath="/nautilusIdle1.glb" // Caminho para o modelo do Nautilus
              scale={0.01}
              position={[0, -0.5, 0]}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}