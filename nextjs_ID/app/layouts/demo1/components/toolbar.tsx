import React from 'react';

export function Toolbar({ children }: { children: React.ReactNode }) {
  return <div className="toolbar">{children}</div>;
}

export function ToolbarHeading({ children }: { children: React.ReactNode }) {
  return <h1 className="toolbar-heading">{children}</h1>;
}

export function ToolbarActions({ children }: { children: React.ReactNode }) {
  return <div className="toolbar-actions">{children}</div>;
}

export default Toolbar;
