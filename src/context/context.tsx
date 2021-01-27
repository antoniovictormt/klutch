import React from 'react';

interface Emprestimo {
  nomeTabela: string,
  numeroParcelas: number,
  valorParcela: number,
}

interface table {
  name: string
}

interface PostsContextData {
  emprestimo: Emprestimo[];
  tableMode: table;
  isLoading: boolean;
  fetchPosts: () => void;
  removePost: (postId: number) => void;
}



export const postsContextDefaultValue: PostsContextData = {
  emprestimo: [],
  tableMode: { name: "" },
  isLoading: false,
  fetchPosts: () => null,
  removePost: () => null,

}

export const PostsContext = React.createContext(postsContextDefaultValue);
