// src/components/DocumentTitle.jsx

import { Helmet } from 'react-helmet-async';

export default function DocumentTitle({ children }) {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
}
