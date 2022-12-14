import React, { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../Components/PageHeaderContent/PageHeader";
import "./Portfolio.styles.scss";

export default function Portfolio() {
  const [data, setData] = useState([]);

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
      <div className="websites-wrapper">
        {data.map((singleSite) => {
          const { siteName, description, image, webUrl, githubUrl, id } =
            singleSite;
          return (
            <div key={id} className="single-site">
              <img src={image} alt="screenshot" />
              <div className="site-info">
                <h1>{siteName}</h1>
                <p className="site-description">
                  <span className="site-description-span">Description: </span>
                  {description}
                </p>
                <p>
                  <span className="site-description-span">Website: </span>
                  <a href={webUrl} target="_blank" rel="noreferrer">
                    Click here
                  </a>{" "}
                  To go to Website {webUrl}
                </p>
                <p>
                  <span className="site-description-span">GitHub: </span>
                  <a href={githubUrl} target="_blank" rel="noreferrer">
                    Here is
                  </a>{" "}
                  The source code in GitHub {githubUrl}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
