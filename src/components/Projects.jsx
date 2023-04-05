import React from "react";
import ProjectItem from "./Projectitem";
import proImg from "../assets/ProImg.png";
import wordleImg from "../assets/WhichImg.png";
import finImg from "../assets/FinImg.png";
import quizImg from "../assets/QuizImg.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full m-auto md:pl-20 p-4 py-8 bg-white">
      <h1
        data-aos="fade-up"
        data-aos-delay="500"
        className="py-4 text-6xl font-bold text-center text-blue"
      >
        Projects
      </h1>
      <h2 className="py-4 text-center ml-[14%] w-[70%] sm:text-2xl text:1xl pt-4 text-blue"></h2>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={proImg}
          title="ProPairs"
          desc="Pairing tool"
          href="https://propairs.herokuapp.com/#/landing"
          link="https://github.com/joshuagoeke/ProPairs"
        />
        <ProjectItem
          img={wordleImg}
          title="WhichWord"
          desc="Wordle clone"
          href="https://github.com/SeanAllen19/Word-Guessing-Game"
          link="https://github.com/SeanAllen19/Word-Guessing-Game"
        />
        <ProjectItem
          img={finImg}
          title="FinanceBuddy"
          desc="Financial tracker"
          href="https://financial-planner-uta-bc.herokuapp.com/"
          link="https://github.com/Crothos/financial-planner"
        />
        <ProjectItem
          img={quizImg}
          title="QuickQuiz"
          desc="Trivia application"
          href="https://leyden05.github.io/Challenge-4/"
          link="https://github.com/Leyden05/Challenge-4"
        />
      </div>
    </div>
  );
};

export default Projects;
