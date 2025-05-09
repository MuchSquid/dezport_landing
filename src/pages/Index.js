import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeadersWhitePattern1 from '../components/headers-white-pattern/IndexSectionHeadersWhitePattern1';
import IndexSectionHowItWorksWhitePattern6 from '../components/how-it-works-white-pattern/IndexSectionHowItWorksWhitePattern6';
import IndexSectionLogoCloudsWhitePattern11 from '../components/logo-clouds-white-pattern/IndexSectionLogoCloudsWhitePattern11';
import IndexSectionFeaturesWhitePattern2 from '../components/features-white-pattern/IndexSectionFeaturesWhitePattern2';
import IndexSectionNumbersGrayMix7 from '../components/numbers-gray-mix/IndexSectionNumbersGrayMix7';
import IndexSectionTestimonialsWhitePattern8 from '../components/testimonials-white-pattern/IndexSectionTestimonialsWhitePattern8';
import IndexSectionFaqsWhitePattern10 from '../components/faqs-white-pattern/IndexSectionFaqsWhitePattern10';
import IndexSectionCtaWhitePattern4 from '../components/cta-white-pattern/IndexSectionCtaWhitePattern4';
import IndexSectionFootersWhitePattern5 from '../components/footers-white-pattern/IndexSectionFootersWhitePattern5';

const meta = {
  title: 'Homepage\u0020\u2014\u0020Dezport',
  meta: [
    {
      name: 'description',
      content:
        'University\u0020sports\u0020platform\u0020for\u0020students\u0020to\u0020find\u0020local\u0020games,\u0020join\u0020teams,\u0020book\u0020sports\u0020venues,\u0020and\u0020compete\u0020in\u0020official\u0020tournaments',
    },
    {
      property: 'og\u003Adescription',
      content:
        'University\u0020sports\u0020platform\u0020for\u0020students\u0020to\u0020find\u0020local\u0020games,\u0020join\u0020teams,\u0020book\u0020sports\u0020venues,\u0020and\u0020compete\u0020in\u0020official\u0020tournaments',
    },
    { property: 'og\u003Atitle', content: 'Homepage\u0020\u2014\u0020Dezport' },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersWhitePattern1 />
      <IndexSectionHowItWorksWhitePattern6 />
      <IndexSectionLogoCloudsWhitePattern11 />
      <IndexSectionFeaturesWhitePattern2 />
      <IndexSectionNumbersGrayMix7 />
      <IndexSectionTestimonialsWhitePattern8 />
      <IndexSectionFaqsWhitePattern10 />
      <IndexSectionCtaWhitePattern4 />
      <IndexSectionFootersWhitePattern5 />  
    </React.Fragment>
  );
}

