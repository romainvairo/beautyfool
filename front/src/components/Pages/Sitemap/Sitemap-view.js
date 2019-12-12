import React from 'react';

import './Sitemap.scss';

const SitemapView = ({ translations }) => (
  <div className="Sitemap">
    <h1 className="Sitemap-Title">{translations.title}</h1>
    <h1 className="Sitemap-Title-Category_1">{translations.navigation.title}</h1>
      <a className="Sitemap-Link" href="/news">{translations.navigation.actualities}</a><br />
      <a className="Sitemap-Link" href="/benefits">{translations.navigation.benefits}</a><br />
      <a className="Sitemap-Link" href="/beauty-tips">{translations.navigation.beautyTips}</a><br />
      <a className="Sitemap-Link" href="/gallery">{translations.navigation.gallery}</a><br />
      <a className="Sitemap-Link" href="/presentation">{translations.navigation.presentation}</a><br />
      <a className="Sitemap-Link" href="/contact">{translations.navigation.contact}</a><br />
    <h1 className="Sitemap-Title-Category_2">{translations.other.title}</h1>
      <a className="Sitemap-Link" href="/legal-notices">{translations.other.legalNotices}</a><br />
      <a className="Sitemap-Link" href="/terms-of-services">{translations.other.termsOfServices}</a><br />
      <a className="Sitemap-Link" href="/terms-of-sales">{translations.other.termsOfSales}</a><br />
      <a className="Sitemap-Link" href="/sitemap">{translations.other.sitemap}</a><br />
      <a className="Sitemap-Link" href="/faq">{translations.other.faq}</a>
  </div>
);

export default SitemapView;
