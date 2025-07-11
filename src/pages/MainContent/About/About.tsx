import "./About.css";

function About() {
  return (
    <section id="about-me">
      <h1>
        Hej <span id="waving-hand">👋</span>
      </h1>
      <p>
        Jag är en data- och systemvetare med ett starkt intresse för hur teknik
        kan förenkla, förbättra och tillgängliggöra digitala upplevelser. Under
        min <a href="#education">utbildning</a> har jag fördjupat mig inom
        utveckling, UX och design. Samtidigt har jag ett brett tekniskt intresse
        som omfattar allt från systemutveckling till IT-support och drift.
      </p>
      <p>
        Jag är bra på att förstå både användarens behov och det tekniska bakom
        kulisserna. Jag trivs i miljöer där jag får lösa problem, lära mig nya
        saker och bidra till förbättring, oavsett om det sker i kod, genom
        felsökning eller i samarbeten över teamgränser.
      </p>
      <p>
        På fritiden har jag ett starkt intresse för{" "}
        <a
          href="https://www.photos.viktorhogberg.com/tag/favs"
          target="_blank"
          rel="noopener noreferrer"
        >
          fotografering
        </a>
        , något som har stärkt mitt öga för detaljer, visuella uttryck och
        struktur.
      </p>
    </section>
  );
}

export default About;
