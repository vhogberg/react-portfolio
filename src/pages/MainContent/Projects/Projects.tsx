import ProjectItem from "./ProjectItem/ProjectItem";

import gridguruImage from "../../../assets/images/gridguru-project.png";
import mathrushImage from "../../../assets/images/mathrush-image.png";
import midnattsloppetImage from "../../../assets/images/midnattsloppet-project.png";
import movieguessrImage from "../../../assets/images/movieguessr-image.png";
// import portfolioImage from "../../../assets/images/portfolio-project.png";
import reactmailImage from "../../../assets/images/reactmail-image.png";
import sortinglabImage from "../../../assets/images/sortinglab-image.png";
import terratriviaImage from "../../../assets/images/terratrivia-image.png";
import tickitoffImage from "../../../assets/images/tickitoff-project.png";

import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h1>Projekt</h1>
      <p>
        Här listas några projekt jag har skapat, mer info om specifika tekniker
        och funktioner finns i respektive projekts README-fil på Github!
      </p>
      <div className="projects-container">
        <ProjectItem
          title="MovieGuessr"
          description={[
            "Ett interaktivt spel som testar filmkunskaper genom att gissa filmtitlar baserat på suddiga posters och ledtrådar.",
            "Varje runda börjar med en suddig poster som gradvis blir tydligare ju fler ledtrådar som avslöjas. Spelaren kan skriva in sin gissning eller ge upp för att få en ny slumpmässig film. Ett roligt sätt att träna minnet och filmkunskaper!",
          ]}
          githubLink="https://github.com/vhogberg/movieguessr"
          openLink="https://movieguessrvercel.app/"
          imageUrl={movieguessrImage}
          technologies={["React", "TypeScript", "CSS", "Vite"]}
        />

        <ProjectItem
          title="SortingLab"
          description={[
            "Ett interaktivt, spelbaserat verktyg som hjälper studenter att lära sig sorteringsalgoritmer på ett engagerande sätt.",
            "Genom att förvandla teoretiska sorteringsmetoder till praktiska utmaningar med poäng, liv och tidsbegränsningar gör SortingLab inlärningen både rolig och effektiv.",
          ]}
          githubLink="https://github.com/vhogberg/sortinglab"
          openLink="https://sortinglab.vercel.app/"
          imageUrl={sortinglabImage}
          technologies={["HTML5", "CSS", "JavaScript"]}
        />

        <ProjectItem
          title="GridGuru"
          description={[
            "Formel 1 quiz med spelstruktur i set om 10 frågor där spelaren får sina poäng efter varje set.",
            "Vinnare för bästa design i kursen Webbutveckling 2 på Stockholms Universitet 🏆",
          ]}
          githubLink="https://github.com/vhogberg/gridguru"
          openLink="https://gridguruf1quiz.vercel.app/"
          imageUrl={gridguruImage}
          technologies={["HTML5", "CSS", "JavaScript", "JSON", "PHP", "MySQL"]}
        />

        <ProjectItem
          title="TickItOff"
          description={[
            "Byggt med Kotlin/Jetpack Compose och implementerar notiser, social media-integration, animationer och mer!",
            "Vann pris för bästa individuellt utvecklade app i kursen Programmering för mobiler 🏆",
          ]}
          githubLink="https://github.com/vhogberg/kotlin_bucket_list_app"
          demoLink="https://www.youtube.com/watch?v=mAOkPEfctAw"
          imageUrl={tickitoffImage}
          technologies={["Kotlin", "Jetpack Compose", "RoomDB"]}
        />

        <ProjectItem
          title="Midnattsloppet Fortal"
          description={[
            "Ett projekt byggt i projektgrupp på tio personer i samarbete med Midnattsloppet för att kombinera löpning och välgörenhet.",
            "Appen gör det möjligt för företag att skapa lag, samla in donationer till valda organisationer via swish, utmana andra lag och följa insamlingsresultat via topplistor och notifikationer – allt för att öka engagemang och bidra till en god sak.",
          ]}
          githubLink="https://github.com/vhogberg/midnattsloppet_app_frontend"
          demoLink="https://youtube.com/shorts/nnDU-ftcbvU?feature=share"
          imageUrl={midnattsloppetImage}
          technologies={["Flutter", "Java", "MariaDB", "Tomcat", "Jenkins"]}
        />

        <ProjectItem
          title="ReactMail"
          description={[
            "En e-postklient som erbjuder ett fungerande gränssnitt där användare kan skicka och ta emot meddelanden samt hantera bilagor genom uppladdning och nedladdning.",
            "Meddelanden organiseras i mappar som inkorg, skickat, papperskorg och utkast, i linje med andra moderna e-postklienter.",
          ]}
          githubLink="https://github.com/vhogberg/reactmail"
          demoLink="https://youtu.be/e3C6jqbHIV0"
          imageUrl={reactmailImage}
          technologies={[
            "React",
            "CSS",
            "JavaScript",
            "Java",
            "Spring Boot",
            "Maven",
          ]}
        />

        <ProjectItem
          title="MathRush"
          description={[
            "Fartfyllt matematikspel där du har 60 sekunder på dig att lösa så många matteproblem som möjligt.",
            "Välj mellan addition, subtraktion, multiplikation eller division.",
          ]}
          githubLink="https://github.com/vhogberg/mathrush"
          openLink="https://mathrushgame.vercel.app/"
          imageUrl={mathrushImage}
          technologies={["HTML5", "CSS", "JavaScript"]}
        />

        <ProjectItem
          title="TerraTrivia"
          description={[
            "Frågesportsspel som testar din geografikunskap i kategorierna länder, huvudstäder och landmärken.",
            "För varje kategori finns fem stycken svårighetsgrader, totalt finns det över 150 frågor att svara på. Lycka till!",
          ]}
          githubLink="https://github.com/vhogberg/terratrivia"
          openLink="https://terratrivia.vercel.app/"
          imageUrl={terratriviaImage}
          technologies={["HTML5", "CSS", "JavaScript", "JSON"]}
        />

        {/* Portfolio Project <ProjectItem
          title="Portfölj"
          description={[
            "Min personliga portfölj som visar upp mina projekt och erfarenheter.",
            "Den är byggd med React och är responsiv för att fungera på alla enheter.",
          ]}
          githubLink="https://github.com/vhogberg/react-portfolio"
          openLink="https://www.viktorhogberg.com/"
          imageUrl={portfolioImage}
          technologies={["React", "TypeScript", "CSS", "Vite"]}
        />*/}
      </div>
    </section>
  );
}

export default Projects;
