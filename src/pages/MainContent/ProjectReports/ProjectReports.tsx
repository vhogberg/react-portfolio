import ProjectItem from "../Projects/ProjectItem/ProjectItem";

import graduationReportImage from "../../../assets/images/graduation-report.png";
import gridguruReportImage from "../../../assets/images/gridguru-report.png";
import midnattsloppetAgileReportImage from "../../../assets/images/midnattsloppet-agile-report.png";
import midnattsloppetIndividualReportImage from "../../../assets/images/midnattsloppet-individual-report.png";
import recordedLecturesReportImage from "../../../assets/images/recorded-lectures-report.png";
import sortinglabReportImage from "../../../assets/images/sortinglab-report.png";
import studyAndWorkReportImage from "../../../assets/images/study-and-work-report.png";
import tickitoffReportImage from "../../../assets/images/tickitoff-report.png";

import "../Projects/Projects.css";

function ProjectReports() {
  return (
    <section id="project-reports">
      <h1>Rapporter</h1>
      <p>
        Här presenteras ett urval rapporter från min utbildning, som omfattar
        både vetenskapliga arbeten och projektrelaterad dokumentation med fokus
        på utvecklingsprocess och teorianknytning.
      </p>
      <div className="projects-container">
        <ProjectItem
          title="Examensarbete"
          description={[
            "Undersökte hur användbarheten upplevs i prototyper som genererats av AI-verktygen Uizard och Visily utifrån samma textbeskrivning.",
            "Genom användbarhetstester, SUS-enkäter och intervjuer visade resultaten att båda prototyperna uppnådde låg användbarhet, med många misslyckade uppgifter och kritiska incidenter.",
            "Studien drar slutsatsen att AI-verktygen i nuläget inte kan ersätta mänsklig kompetens i designprocessen utan fortsatt behöver kompletteras med mänsklig inblandning.",
          ]}
          openLink="https://daisy.dsv.su.se/fil/visa?id=304856"
          imageUrl={graduationReportImage}
        />

        <ProjectItem
          title="Sysselsättning vid studier"
          description={[
            "Undersökte hur studieprestation hos studenter vid Stockholms universitet påverkas av sysselsättning vid sidan av studierna.",
            "En enkät besvarad av 189 studenter visade att det inte fanns något signifikant samband mellan studieprestation och anställningsgrad, ålder eller typ av sysselsättning.",
            "Studien rekommenderar vidare forskning med större och mer varierade urvalsgrupper för att kunna upptäcka eventuella samband.",
          ]}
          openLink="https://drive.google.com/file/d/14G3yCQptS7DQIpkVGCZG3a2DxRYKkySd/view?usp=sharing"
          imageUrl={studyAndWorkReportImage}
        />

        <ProjectItem
          title="Inspelade föreläsningar"
          description={[
            "Undersökte hur universitetsstudenter i Sverige uppfattar inspelade föreläsningars relevans för deras lärande.",
            "Genom semistrukturerade intervjuer med fem studenter visade resultaten att inspelade föreläsningar ofta upplevs som stödjande för lärandet, men att bristande kvalitet och minskad social interaktion lyftes som nackdelar.",
            "Studien uppmuntrar vidare forskning med fler deltagare för att bättre kunna generalisera resultaten till en bredare studentgrupp.",
          ]}
          openLink="https://drive.google.com/file/d/1bsB1mjnzebGrr9UnISgQD2q0QLf02wih/view?usp=sharing"
          imageUrl={recordedLecturesReportImage}
        />

        <ProjectItem
          title="TickItOff: Dokumentation"
          description={[
            "Detta är dokumentation för projektet TickItOff, bucket list-appen som visas i projektdelen ovan.",
            "Dokumentationen redogör för hela utvecklingsprocessen från idé och prototyp till färdig app, inklusive form, funktion och kod.",
            "Den innehåller även kodavsnitt, pseudokod och reflektioner kring testning och iterativt arbete.",
          ]}
          openLink="https://drive.google.com/file/d/1ibZzX-QDYpMrTtIdRtwqtrNN-Ov3w_k1/view?usp=sharing"
          imageUrl={tickitoffReportImage}
        />

        <ProjectItem
          title="SortingLab: Dokumentation"
          description={[
            "Detta är dokumentation för projektet “SortingLab”, som visas i projektdelen ovan.",
            "Dokumentationen redogör för spelets teoretiska förankring inom motivations- och designmodeller, samt innehåller en genomgång av centrala kodavsnitt och alternativa lösningar.",
            "Teorier som ARCS-modellen, Self-Determination-teorin och MDA-ramverket används för att motivera designval och spelupplevelse.",
          ]}
          openLink="https://drive.google.com/file/d/1YSx8SB1Z_3V5XyEF9XJH7wI6_d1v0Prz/view?usp=sharing"
          imageUrl={sortinglabReportImage}
        />

        <ProjectItem
          title="Midnattsloppet: Agil dokumentation"
          description={[
            "Detta är agil dokumentation för projektet Midnattsloppet Fortal som visas i projektdelen.",
            "Dokumentationen redogör för hela utvecklingsprocessen från prototyper och användarscenarier till kravspecifikation, större beslut, användarflöden och UX-testning.",
            "Den innehåller även analys av liknande lösningar, användarpersonas, diagram samt motiveringar bakom valda funktioner och förändringar under projektets gång.",
          ]}
          openLink="https://drive.google.com/file/d/1mJqittAASlAgx5htOJnM3iYadJ7b31j9/view?usp=sharing"
          imageUrl={midnattsloppetAgileReportImage}
        />

        <ProjectItem
          title="Midnattsloppet: Reflekterande rapport"
          description={[
            "Detta är en reflekterande rapport kopplad till Midnattsloppet Fortal.",
            "Rapporten analyserar fyra centrala aspekter av projektet: digital prototypframställning, gamification, Scrum-metodik och användartestning, i relation till relevant akademisk forskning.",
            "Syftet är att reflektera över projektets genomförande utifrån teori och praktik samt dra slutsatser kring lärdomar och utvecklingsmöjligheter.",
          ]}
          openLink="https://drive.google.com/file/d/1xEwG6zrB-oOe3FGpX2-7SZ4kONkYBvU_/view?usp=sharing"
          imageUrl={midnattsloppetIndividualReportImage}
        />

        <ProjectItem
          title="GridGuru: Dokumentation"
          description={[
            "Detta är dokumentation för GridGuru, som beskriver hela utvecklingsprocessen från brainstorming och skisser till design, testning, publicering och spelmekanik.",
            "Den inkluderar även kodavsnitt i PHP, SQL, JavaScript och CSS samt pseudokod och en genomgång av spelets funktionalitet.",
          ]}
          openLink="https://drive.google.com/file/d/1aM_tJdURh8GslHbqhb9keZc_zmWZnPqv/view?usp=sharing"
          imageUrl={gridguruReportImage}
        />
      </div>
    </section>
  );
}

export default ProjectReports;
