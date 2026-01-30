import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";

export type Post = {
  id: string;
  title: string;
  content: string;
  isDeleted: boolean;
};

type PostStore = {
  posts: Post[];
  addPost: (title: string, content: string) => void;
  updatePost: (id: string, title: string, content: string) => void;
  softDeletePost: (id: string) => void;
  recoverPost: (id: string) => void;
  deletePermanently: (id: string) => void;
};

export const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      posts: [],

      addPost: (title, content) =>
        set((state) => ({
          posts: [
            ...state.posts,
            { id: uuid(), title, content, isDeleted: false },
          ],
        })),

      updatePost: (id, title, content) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === id ? { ...p, title, content } : p
          ),
        })),

      softDeletePost: (id) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === id ? { ...p, isDeleted: true } : p
          ),
        })),

      recoverPost: (id) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === id ? { ...p, isDeleted: false } : p
          ),
        })),

      deletePermanently: (id) =>
        set((state) => ({
          posts: state.posts.filter((p) => p.id !== id),
        })),
    }),
    { name: "posts-storage" }
  )
);
