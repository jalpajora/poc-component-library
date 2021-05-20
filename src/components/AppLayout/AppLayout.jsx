import React from 'react';
import './styles.css';

export default function MainLayout({ children }) {
  const [header, content, footer] = children;
  return (
    <div className="app">
      <header>
        {header}
      </header>
      <main>
        {content}
      </main>
      <footer>
        {footer}
      </footer>
    </div>
  );
}

