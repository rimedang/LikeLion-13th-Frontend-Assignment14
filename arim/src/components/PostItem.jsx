import React, { useState } from 'react';

function PostItem({ user, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(user.name);

  const handleSave = () => {
    onUpdate({ ...user, name: editTitle });
    setIsEditing(false);
  };

  return (
    <div className="post-item">
      {isEditing ? (
        <>
          <input
            value={editName}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button onClick={handleSave}>저장</button>
        </>
      ) : (
        <>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={() => onDelete(user.id)}>삭제</button>
        </>
      )}
    </div>
  );
}

export default PostItem;
