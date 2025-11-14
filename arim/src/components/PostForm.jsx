import React, { useState } from 'react';

function PostForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onAdd({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>새 유저 작성</h2>
      <input
        type="text"
        placeholder="이름"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default PostForm;
