import React from 'react';

interface DeleteButtonProps {
  onDelete: (id: number) => void;
  id: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete, id }) => {
  return (
    <div>
      <button className="btn btn-danger" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
