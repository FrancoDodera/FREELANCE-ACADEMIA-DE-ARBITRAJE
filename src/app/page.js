"use client";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  //Calendly
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.h1}>
            GANÁ TUS PRIMEROS <span className={styles.highlight}> 1.000</span>{" "}
            USD CON <span className={styles.highlight}> ARBITRAJE</span>
          </h1>
          <h2 className={styles.h2}>
            Ni Marketing, ni Amazon FBA, ni Dropshipping, ni Appointment
            Setting. Arbitraje Financiero: la{" "}
            <span className={styles.highlight}> NUEVA HABILIDAD</span> de la que
            nadie está hablando que te va a permitir generar TUS PROPIOS $1000
            USD este 2024
          </h2>
          <div className={styles.video}>
            <div className={styles.video_container}>
              <iframe
                src="https://drive.google.com/file/d/17HOm3qs0SVGEWt7-XP_oCEFzydQPTRYG/preview"
                width="100%"
                height="100%"
                allow="autoplay"
                frameborder="0"
              ></iframe>
            </div>
          </div>
          <h2 className={styles.text}>
            SI QUERES darle un giro de 180 grados a tu{" "}
            <span className={styles.highlight}>economia</span> y lograr
            finalmente tener un ingreso en DOLARES, esto es para vos.
            <br />
            Te quiero compartir desde lo mas básico hasta las estrategias mas
            avanzadas que yo mismo utilicé para pasar de{" "}
            <span className={styles.highlight}>
              3.000 USD A 200.000 USD en 12 meses
            </span>{" "}
            y que te van a PERMITIR a vos tener los mismos resultados operando
            con total seguridad y sin{" "}
            <span className={styles.highlight}>NINGUN TIPO DE RIESGO</span> en
            el mondo del arbitraje cripto
          </h2>
          <h2 className={styles.h2}>
            <span className={styles.highlight}>
              AGENDA GRATUITAMENTE UNA ASESORIA
              <h1 className={styles.flecha}>⬇</h1>
            </span>
          </h2>
          <div className={styles.calendly_container}>
            <div className={styles.calendly}>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/francocarre/asesoria-gratuita-arbitraje-financiero?month=2024-03"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            </div>
          </div>
          <h2 className={styles.h2}>
            Si tenes alguna duda o consulta, escribinos!
            <div className={styles.contacto}>
              <br />
              <img
                className={styles.whatsapp_img}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
                alt="WhatsApp"
              ></img>
              <a
                className={styles.whatsapp}
                href="https://wa.me/tunumerodetelefono?text=Hola,%20estoy%20interesado%20en%20tu%20producto"
                target="_blank"
              >
                Abrir Chat de WhatsApp
              </a>
            </div>
          </h2>
        </div>
        <footer className={styles.footer}>
          <h4>©2024 | ArbaAcademy</h4>
        </footer>
      </main>
    </>
  );
}
