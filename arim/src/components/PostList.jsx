import React from 'react';
import PostItem from './PostItem';

function PostList({ users, onUpdate, onDelete }) {
  return (
    <div className="post-list">
      <h2>유저 목록</h2>
      {users.map((user) => (
        <PostItem
          key={user.id}
          user={user}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default PostList;
