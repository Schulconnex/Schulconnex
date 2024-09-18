/* eslint-disable global-require */

import React from 'react';
import Translate from '@docusaurus/Translate';

export type TestimonialItem = {
  image: {
    src: string;
    width?: number;
    height?: number;
  };
  text: JSX.Element;
  quote: {
    name: string;
    info: string;
  };
  showOnHomepage: boolean;
  thumbnail?;
  title?: string;
};

const TESTIMONIALS: TestimonialItem[] = [
  {
    image: {
      src: '/img/lotus-flower-1805784_640.png',
      height: 200,
    },
    text: (
        <Translate id="homepage.testimonials.name1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Translate>
    ),
    quote: {
        name: 'Erika Musterfrau',
        info: 'Product Ownerin X',
    },
    showOnHomepage: true,
  },
  {
    image: {
      src: '/img/tick-763800_640.png',
      height: 200,
    },
    text: (
        <Translate id="homepage.testimonials.name2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Translate>
    ),
    quote: {
      name: 'Hans Meyer',
      info: 'Firmenname AG',
    },
    showOnHomepage: true,
  },
  {
    image: {
      src: '/img/lotus-flower-1805784_640.png',
      height: 200,
    },
    text: (
        <Translate id="homepage.testimonials.name3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Translate>
    ),
    quote: {
      name: 'Max Mustermann jr.',
      info: 'Entwickler bei Firma X',
    },
    showOnHomepage: true,
  },
  {
    image: {
      src: '/img/company-7759278_640.png',
      height: 200,
    },
    text: (
        <Translate id="homepage.testimonials.name4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Translate>
    ),
    quote: {
      name: 'Max Mustermann',
      info: 'Entwickler bei Unternehmen GmbH',
    },
    showOnHomepage: true,
  },
  {
    image: {
      src: '/img/star-2822548_640.png',
      height: 200,
    },
    text: (
        <Translate id="homepage.testimonials.name5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Translate>
    ),
    quote: {
      name: 'Maxine Musterfrau',
      info: 'Product Ownerin B',
    },
    showOnHomepage: true,
  },
];

export default TESTIMONIALS;
