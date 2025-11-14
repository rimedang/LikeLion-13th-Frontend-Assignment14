import React, { useState } from 'react';

function PostForm({ onAdd }) {
  // 🚨 수정: 'title', 'setTitle'을 'name', 'setName'으로 변경
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 이제 'name' 변수가 정상적으로 동작합니다.
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
        value={name}
        onChange={(e) => setName(e.target.value)}
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
