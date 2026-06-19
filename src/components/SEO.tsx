import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: Record<string, any>;
  canonicalUrl?: string;
}

export default function SEO({ title, description, keywords, schema, canonicalUrl }: SEOProps) {
  useEffect(() => {
    // 1. Dynamic Title
    const fullTitle = `${title} | Eurosia Buildnex - Construction ERP`;
    document.title = fullTitle;

    // 2. Canonical URL support
    const resolvedCanonical = canonicalUrl || window.location.href;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", resolvedCanonical);

    // 2. Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // 3. Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // 4. OpenGraph Tags
    const ogProperties = {
      "og:title": fullTitle,
      "og:description": description,
      "og:type": "website",
      "og:image": "/logo-og.png",
      "twitter:card": "summary_large_image",
      "twitter:title": fullTitle,
      "twitter:description": description,
      "twitter:image": "/logo-og.png",
    };

    Object.entries(ogProperties).forEach(([property, value]) => {
      let tag = document.querySelector(`meta[property="${property}"]`) || 
                document.querySelector(`meta[name="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        if (property.startsWith("og:")) {
          tag.setAttribute("property", property);
        } else {
          tag.setAttribute("name", property);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    });

    // 5. Schema Markup Injection
    const existingSchemaScript = document.getElementById("eurosia-jsonld-schema");
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    const localSchema = schema || {
      "@context": "https://schema.org",
      "@type": "Corporation",
      "name": "Eurosia Buildnex",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.svg`,
      "description": description,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+880-1709-371514",
          "contactType": "customer service",
          "areaServed": "BD",
          "availableLanguage": ["en", "bn"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+60-1021-81687",
          "contactType": "sales",
          "areaServed": "MY",
          "availableLanguage": ["en", "ms"]
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "144/5G, Matikata, near ECB Circle",
        "addressLocality": "Dhaka",
        "postalCode": "1206",
        "addressCountry": "BD"
      },
      "subOrganization": [
        {
          "@type": "LocalBusiness",
          "name": "Eurosia Bangladesh Office",
          "image": `${window.location.origin}/logo.svg`,
          "telephone": "+880-1711-408725",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "144/5G, Matikata, near ECB Circle",
            "addressLocality": "Dhaka",
            "postalCode": "1206",
            "addressCountry": "BD"
          }
        },
        {
          "@type": "LocalBusiness",
          "name": "Eurosia Malaysia Office",
          "image": `${window.location.origin}/logo.svg`,
          "telephone": "+60-1021-81687",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop no. 2, Block 3A, City Garden Commercial Centre, Taman Nirwana",
            "addressLocality": "Ampang, Selangor Darul Ehsan",
            "postalCode": "68000",
            "addressCountry": "MY"
          }
        }
      ]
    };

    const script = document.createElement("script");
    script.id = "eurosia-jsonld-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(localSchema);
    document.head.appendChild(script);

    return () => {
      // Clean up schema on unmount to prevent duplicate tags
      const scriptToRemove = document.getElementById("eurosia-jsonld-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, keywords, schema]);

  return null;
}
