import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

/* variant: 'primary' | 'outline'   size: 'md' | 'lg'
   Pass `to` for an internal link, `href` for an external one, or neither for a <button>. */
export function Button({ children, to, href, variant = 'primary', size = 'md', className = '', ...rest }) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}
