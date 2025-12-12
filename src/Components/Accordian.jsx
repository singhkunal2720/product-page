'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer-accordion">
      <div className="footer-accordion-header" onClick={() => setOpen(!open)}>
        <h4>{title}</h4>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      {open && <div className="footer-accordion-body">{children}</div>}
    </div>
  );
};

export default Accordion;
