import AwardItem from "./AwardItem/AwardItem";

function Awards() {
  return (
    <section id="awards">
      <h1>Utmärkelser</h1>

      <AwardItem
        title="🏆 Bästa hemsida"
        organisation="Stockholms Universitet"
        description="Tilldelades för bästa design och utveckling av hemsidor i kurserna Webbutveckling 1 och 2, med fokus på användarvänlighet."
        date="2025"
      />

      <AwardItem
        title="🏆 Bästa mobilapp"
        organisation="Stockholms Universitet"
        description="Tilldelades för bästa design och utveckling av en mobilapp i kursen Programmering för mobiler."
        date="2024"
      />

      <AwardItem
        title="🏆 Årets bästa gymnasiearbete"
        organisation="Tullinge Gymnasium"
        description="Tilldelades utmärkelsen för årets bästa gymnasiearbete bland alla elever på Tullinge Gymnasium."
        date="2021"
      />

      <AwardItem
        title="🥈 Juridik-SM, silvermedalj"
        organisation="Svenska Juridiska Mästerskapen"
        description="Deltog i Juridik-SM och vann silvermedalj tillsammans med skolans lag."
        date="2021"
      />
    </section>
  );
}

export default Awards;
