import React from "react";
import img from "../components/ai.jpeg";
import "../components/styles.css";

// functional component -> cannot have object(states)
// functional component is aka stateless components

function HelloWorld() {
  return (
    <div className="content">
      <h1>Artificial Intelligence</h1>
      <p>
        Artificial intelligence (AI) is the intelligence of machines or
        software, as opposed to the intelligence of humans or animals. It is
        also the field of study in computer science that develops and studies
        intelligent machines. "AI" may also refer to the machines themselves.
      </p>
      <img src={img} alt="img here" />
      <p>
        The various sub-fields of AI research are centered around particular
        goals and the use of particular tools. The traditional goals of AI
        research include reasoning, knowledge representation, planning,
        learning, natural language processing, perception, and support for
        robotics.[a] General intelligence (the ability to solve an arbitrary
        problem) is among the field's long-term goals.[8] To solve these
        problems, AI researchers have adapted and integrated a wide range of
        problem-solving techniques, including search and mathematical
        optimization, formal logic, artificial neural networks, and methods
        based on statistics, probability, and economics.[b] AI also draws upon
        psychology, linguistics, philosophy, neuroscience and many other fields.
      </p>
      <p>
        The various sub-fields of AI research are centered around particular
        goals and the use of particular tools. The traditional goals of AI
        research include reasoning, knowledge representation, planning,
        learning, natural language processing, perception, and support for
        robotics.[a] General intelligence (the ability to solve an arbitrary
        problem) is among the field's long-term goals.[8] To solve these
        problems, AI researchers have adapted and integrated a wide range of
        problem-solving techniques, including search and mathematical
        optimization, formal logic, artificial neural networks, and methods
        based on statistics, probability, and economics.[b] AI also draws upon
        psychology, linguistics, philosophy, neuroscience and many other fields.
      </p>
    </div>
  );
}

export default HelloWorld;
