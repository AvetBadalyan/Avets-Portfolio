import React from 'react';
import './About.scss';

export default function AboutMeText() {
  return (
    <div>
      <h3>Frontend Engineer</h3>
      <p>
        I build complete web products — from database schema to React UI to
        cloud deployment. I got into software in 2021 through JavaScript and
        React training at <span className="text-highlight">Microsoft Innovation Center Armenia</span>{' '}
        and the Front-End Bootcamp at{' '}
        <span className="text-highlight">Armenian Code Academy</span>. From there I joined{' '}
        <span className="text-highlight">Cognaize</span> (2023–2024), building features on an
        AI-powered fintech platform used by banks and insurers. In 2024 I
        moved to <span className="text-highlight">Ashstone Studios</span>, shipping Shopify themes
        for international e-commerce brands, with three themes published on
        the official <span className="text-highlight">Shopify Theme Store</span>:{' '}
        <a
          href="https://themes.shopify.com/themes/motto/presets/motto"
          target="_blank"
          rel="noreferrer"
          className="inline-link"
        >
          Motto
        </a>
        ,{' '}
        <a
          href="https://themes.shopify.com/themes/monochrome/presets/monochrome"
          target="_blank"
          rel="noreferrer"
          className="inline-link"
        >
          Monochrome
        </a>
        , and{' '}
        <a
          href="https://themes.shopify.com/themes/force/presets/force"
          target="_blank"
          rel="noreferrer"
          className="inline-link"
        >
          Force
        </a>
        . Since July 2025 I've been at <span className="text-highlight">EPAM Systems</span> as a
        Full-Stack Developer, working on{' '}
        <a
          href="https://www.epam.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-link"
        >
          epam.com
        </a>
        .
      </p>
      <p>
        I recently built a full-stack music library end-to-end — a{' '}
        <span className="text-highlight">React/Node.js</span> project with an
        Express REST API, PostgreSQL database with TypeORM, file uploads,
        Supabase Auth and storage, Redux Toolkit, RTK Query, and a persistent
        global audio player. Backend on Render, frontend live on{' '}
        <a
          href="https://main.d3kojl89wftd85.amplifyapp.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-link"
        >
          AWS Amplify
        </a>
        . That project was my deliberate push from "frontend developer who can
        touch the backend" to owning the whole stack.
      </p>
      <p>
        <span className="text-highlight">
          React.js, Redux, JavaScript, TypeScript, HTML, CSS, SCSS, Node.js,
          Express, PostgreSQL, Shopify, and AEM
        </span>
        , with a focus on clean implementation, maintainability, testing, and
        user experience.
      </p>

      <h3>Former Financial Analyst</h3>
      <p>
        From 2017 to 2021 I worked as a{' '}
        <span className="text-highlight">financial analyst, accountant, and external auditor</span>{' '}
        at Parvanyan Consulting LLC, Crowe & Asatryans LLC, and AN Audit CJSC,
        delivering outsourced services to nearly 40 client organizations
        across Armenia. In 2016 I
        also completed an internship at <span className="text-highlight">Ariane Sud</span>, a bureau
        of expert-accountants in Valence, France. That background means I can
        read business requirements, ask the right questions, and translate
        stakeholder needs into technical decisions — not just code what I'm
        told.
      </p>
    </div>
  );
}
