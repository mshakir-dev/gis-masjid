import React from "react";
import { useNavigate } from "react-router-dom";
import './Showcase.css';

interface ShowCaseProps {
  title: string;
  disableText: string;
}

const ShowCase: React.FC<ShowCaseProps> = ({ title, disableText }) => {
  const navigate = useNavigate();

  return (
    <section className="showcase">
      <div className="showcase-overlay">
        <header className="showcase-content">
          <header className="showcase-header">
            <h2 className="showcase-title-text"> {title}</h2>
          </header>
          <div className="button-group">
            <button className="home-button" onClick={() => navigate("/")}>Home</button>
            <button disabled className="disabled-button">{disableText}</button>
          </div>
        </header>
      </div>
    </section>
  );
};

export default ShowCase;
