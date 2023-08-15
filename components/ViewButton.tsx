import React from 'react';

interface ViewButtonProps {
  onView: (id: number) => void;
  id: number;
}

const ViewButton: React.FC<ViewButtonProps> = ({ onView, id }) => {
  return (
    <div>
      <button className="btn btn-primary me-2" onClick={() => onView(id)}>
        View
      </button>
    </div>
  );
};

export default ViewButton;
