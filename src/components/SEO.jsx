import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  canonical,
  schema 
}) => {
  const location = useLocation();
  const siteUrl = 'https://codebyjerry.online';
  const currentUrl = `${siteUrl}${location.pathname}`;

  useEffect(() => {
    if (title) document.title = title;

    const updateMeta = (name, content, attr = 'name') => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (el) {
        el.setAttribute('content', content);
      } else {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        el.setAttribute('content', content);
        document.head.appendChild(el);
      }
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('og:title', ogTitle || title, 'property');
    updateMeta('og:description', ogDescription || description, 'property');
    updateMeta('og:image', ogImage || `${siteUrl}/og-image.png`, 'property');
    updateMeta('og:url', currentUrl, 'property');
    updateMeta('twitter:title', ogTitle || title);
    updateMeta('twitter:description', ogDescription || description);
    updateMeta('twitter:image', ogImage || `${siteUrl}/og-image.png`);

    // Handle Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute('href', canonical || currentUrl);
    } else {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      canonicalEl.setAttribute('href', canonical || currentUrl);
      document.head.appendChild(canonicalEl);
    }

    // Handle Schema
    let script;
    if (schema) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical, currentUrl, schema]);

  return null;
};

export default SEO;
