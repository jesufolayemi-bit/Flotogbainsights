// Builds the JSON-LD @graph for each page. Edit business facts in site.json, not here.
export default function () {
  return function build(site, page) {
    const url = (p) => new URL(p, site.url).href;
    const orgId = url("/#organization");
    const personId = url("/#tosin-ogunkoya");
    const sameAs = Object.values(site.social).filter(Boolean);

    const organization = {
      "@type": ["ProfessionalService", "EducationalOrganization"],
      "@id": orgId,
      name: site.name,
      legalName: site.legalName,
      url: url("/"),
      logo: url(site.logo),
      image: url(site.defaultImage),
      description: site.defaultDescription,
      telephone: site.phone,
      email: site.email,
      foundingDate: site.foundingDate,
      priceRange: "Free–AED 400",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.country
      },
      geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Place", name: "Worldwide (online)" }
      ],
      founder: { "@id": personId },
      sameAs,
      knowsAbout: [
        "Business analysis", "Requirements engineering", "Business process improvement",
        "Digital transformation", "Lean Six Sigma", "Business analyst interview preparation"
      ]
    };

    const person = {
      "@type": "Person",
      "@id": personId,
      name: site.founder.name,
      jobTitle: site.founder.jobTitle,
      image: url(site.founder.image),
      worksFor: { "@id": orgId },
      address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
      hasCredential: [
        "Lean Six Sigma Black Belt (LSSBB)", "Lean Six Sigma Green Belt (LSSGB)",
        "ITIL 4", "ISEB Business Analysis Foundation", "MSc Software Technology"
      ].map((name) => ({ "@type": "EducationalOccupationalCredential", name })),
      knowsAbout: organization.knowsAbout,
      sameAs: [site.social.linkedinPersonal].filter(Boolean)
    };

    const webpage = {
      "@type": page.pageType && page.pageType !== "BlogPosting" ? page.pageType : "WebPage",
      "@id": url(page.url) + "#webpage",
      url: url(page.url),
      name: page.title,
      description: page.description || site.defaultDescription,
      isPartOf: { "@id": url("/#website") },
      about: { "@id": orgId },
      inLanguage: "en"
    };

    const website = {
      "@type": "WebSite",
      "@id": url("/#website"),
      url: url("/"),
      name: site.name,
      publisher: { "@id": orgId },
      inLanguage: "en"
    };

    const graph = [website, organization, person, webpage];

    if (page.article) {
      const a = page.article;
      const post = {
        "@type": "BlogPosting",
        "@id": url(page.url) + "#article",
        mainEntityOfPage: { "@id": webpage["@id"] },
        headline: a.headline,
        description: page.description,
        datePublished: a.published,
        dateModified: a.modified || a.published,
        author: { "@id": personId },
        publisher: { "@id": orgId },
        inLanguage: "en"
      };
      if (a.image) post.image = url(a.image);
      if (a.series) post.isPartOf = { "@type": "CreativeWorkSeries", name: a.series, url: url(a.seriesUrl) };
      graph.push(post);
    }

    if (page.breadcrumbs && page.breadcrumbs.length) {
      graph.push({
        "@type": "BreadcrumbList",
        itemListElement: [{ name: "Home", url: "/" }, ...page.breadcrumbs].map((b, i) => ({
          "@type": "ListItem", position: i + 1, name: b.name, item: url(b.url)
        }))
      });
    }

    if (page.faqs && page.faqs.length) {
      graph.push({
        "@type": "FAQPage",
        "@id": url(page.url) + "#faq",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      });
    }

    if (page.services && page.services.length) {
      page.services.forEach((s) => graph.push({
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: { "@id": orgId },
        areaServed: organization.areaServed,
        offers: {
          "@type": "Offer",
          price: String(s.price),
          priceCurrency: "AED",
          url: site.booking[s.bookingKey]
        }
      }));
    }

    return { "@context": "https://schema.org", "@graph": graph };
  };
}
