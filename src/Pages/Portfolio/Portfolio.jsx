import React, { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import PageHeader from "../../Components/PageHeaderContent/PageHeader";
import "./Portfolio.styles.scss";

export default function Portfolio() {
  const [data, setData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const fetchData = useCallback(async () => {
    const response = await fetch(
      "https://my-portfolio-f61ed-default-rtdb.firebaseio.com/websites.json"
    );

    const result = await response.json();

    setData(result);
    console.log(result, "result");
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  return (
    <div className="portfolio-page">
      <PageHeader headerText="My Websites" />
      <div className="portfolio-content">
        <div className="portfolio-content-cards">
          {data.map((singleSite, index) => {
            const { siteName, description, image, webUrl, githubUrl, id } =
              singleSite;
            return (
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                key={id}
                className="portfolio-content-cards-item"
              >
                <div className="portfolio-content-cards-item-img-wrapper">
                  <a>
                    <img src={image} alt="project" />
                  </a>
                </div>
                <div className="overlay">
                  {hoveredIndex === index && (
                    <div className="site-info">
                      <h1>{siteName}</h1>
                      <p className="site-description">
                        <span className="site-description-span">
                          Description:{" "}
                        </span>
                        {description}
                      </p>
                      <div className="site-link-buttons">
                        <a href={webUrl} target="_blank" rel="noreferrer">
                          <button>Go to Website</button>
                        </a>
                        <a href={githubUrl} target="_blank" rel="noreferrer">
                          <button>Code in GitHub</button>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
