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

          <h2 className={styles.text}>
            SI QUERES darle un giro de 180 grados a tu{" "}
            <span className={styles.highlight}>economia</span> y lograr
            finalmente tener un ingreso en DOLARES, esto es para vos. Te quiero
            compartir desde lo mas básico hasta las estrategias mas avanzadas
            que yo mismo utilicé para pasar de $x a $x en x meses y que te van a
            PERMITIR a vos tener los mismos resultados operando con total
            seguridad y sin{" "}
            <span className={styles.highlight}>NINGUN TIPO DE RIESGO</span> en
            el mondo del arbitraje cripto
          </h2>
          <h2 className={styles.h2}>
            <span className={styles.highlight}>
              Agregrar gratiuitamente una asesoria
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
          <h3>wpp</h3>
        </div>
        <footer className={styles.footer}>
          <h4>©2024 | ArbaAcademy</h4>
        </footer>
      </main>
    </>
  );
}
