import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaSource = () => {
    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ClickForge AI",
        "operatingSystem": "All",
        "applicationCategory": "EducationalApplication",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1250"
        },
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(softwareSchema)}
            </script>
        </Helmet>
    );
};

export default SchemaSource;
