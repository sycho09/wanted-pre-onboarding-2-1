import React from 'react';
import { Helmet } from 'react-helmet';

export default function MetaBox(props) {
  const { name, brand } = props;
  return (
    <Helmet>
      <title>{name}</title>
      <meta property='og:title' content={name} />
      <meta property='og:description' content={brand} />
    </Helmet>
  );
}
