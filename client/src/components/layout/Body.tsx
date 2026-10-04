import React, { type ReactNode } from 'react';

interface BodyProps {
  children: ReactNode
}

export const Body = ({ children }: BodyProps) => {
  return <div className="body">{children}</div>
}
 