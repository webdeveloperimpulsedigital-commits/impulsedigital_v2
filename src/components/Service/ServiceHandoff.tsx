import React from 'react';

const ServiceHandoff: React.FC = () => {
  return (
    <div className="svc-handoff" aria-hidden="true">
      <div className="svc-handoff-line"></div>
      <div className="svc-handoff-mark">
        <svg viewBox="801 344 274 272">
          <use href="#impulse-mark" />
        </svg>
      </div>
    </div>
  );
};

export default ServiceHandoff;
