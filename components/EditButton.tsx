import React from 'react';

interface EditButtonProps {
  onEdit: (id: number) => void;
  id: number;
}

const EditButton: React.FC<EditButtonProps> = ({ onEdit, id }) => {
  return (
    <div>
      <button className="btn btn-success me-2" onClick={() => onEdit(id)}>
        Edit
      </button>
    </div>
  );
};

export default EditButton;
