import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';
import type {Props} from '@theme/Footer/Links/MultiColumn';

import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';

type ColumnType = Props['columns'][number];
type ColumnItemType = ColumnType['items'][number];

import styles from './styles.module.css';

function ColumnLinkItem({item}: {item: ColumnItemType}) {
  return item.html ? (
    <li
      className="footer__item"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}

function Column({column}: {column: ColumnType}) {
  return (
    <div className="col footer__col">
      <div className="footer__title">{column.title}</div>
      <ul className="footer__items clean-list">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

function KontaktColumn() {
  const {withBaseUrl} = useBaseUrlUtils();
  const sources = {
    light: withBaseUrl('img/FWU-Logo-RGB-orange.png'),
    dark: withBaseUrl('img/FWU-Logo-RGB-orange.png')
  };
  return (
    <div className="col footer__col">
      <Link
        href="https://fwu.de/"
        className={styles.footerLogoLink}
        target="_blank">
      <ThemedImage
        className={styles.kontaktLogo}
        alt="Logo der FWU"
        sources={sources}
      />
    </Link>
    </div>
  );
}

export default function FooterLinksMultiColumn({columns}: Props): JSX.Element {
  return (
    <div className="row footer__links">
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
      <KontaktColumn />
    </div>
  );
}
