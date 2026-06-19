import React from "react";
import SEO from "../SEO";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: Record<string, any>;
  canonicalUrl?: string;
}

export default function SEOHead({ title, description, keywords, schema, canonicalUrl }: SEOHeadProps) {
  return (
    <SEO 
      title={title} 
      description={description} 
      keywords={keywords} 
      schema={schema} 
      canonicalUrl={canonicalUrl}
    />
  );
}
