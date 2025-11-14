import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

function PostPage() {
  const [users, setUsers] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  // GET: 게시글 불러오기
  useEffect(() => {
    axios
      .get(`${API_URL}/users?_limit=5`) //테스트 API에서 게시글 5개 가져오기
      .then((res) => setUsers(res.data)) // 받아온 데이터를 posts 상태에 저장
      .catch((err) => console.error(err));
  }, [API_URL]);

  const addUser = (newUser) => {
    // 이름 변경 (newUser는 name, email 객체)
    axios
      .post(`${API_URL}/users`, newUser) // users 엔드포인트
      .then((res) => setUsers((prev) => [res.data, ...prev])); // setUsers
  };

  const updateUser = (updatedUser) => {
    // 이름 변경
    axios
      .patch(
        `${API_URL}/users/${updatedUser.id}`, // users 엔드포인트
        updatedUser
      )
      .then((res) => {
        setUsers(
          (prev) => prev.map((u) => (u.id === updatedUser.id ? res.data : u)) // p -> u
        );
      });
  };

  // DELETE: 게시글 삭제
  const deleteUser = (id) => {
    // 이름 변경
    axios
      .delete(`${API_URL}/users/${id}`) // users 엔드포인트
      .then(() => setUsers((prev) => prev.filter((u) => u.id !== id))); // setUsers, p -> u
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>유저 프로필 관리</h1>
      <PostForm onAdd={addUser} />
      <PostList
        users={users}
        onUpdate={updateUser}
        onDelete={deleteUser}
      />{' '}
    </div>
  );
}

export default PostPage;
