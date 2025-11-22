import { createContext, useContext, ReactNode } from 'react';
import { Bookmark } from '@/types/bookmark';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { getFavicon } from '@/lib/getFavicon';

interface BookmarkContextType {
  bookmarks: Bookmark[];
  categories: string[];
  addBookmark: (title: string, url: string, category: string) => void;
  removeBookmark: (id: string) => void;
  addCategory: (category: string) => void;
  removeCategory: (category: string) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within BookmarkProvider');
  }
  return context;
};

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarks, setBookmarks] = useLocalStorage<Bookmark[]>('bookmarks', []);
  const [categories, setCategories] = useLocalStorage<string[]>('categories', ['General', 'Work', 'Personal']);

  const addBookmark = (title: string, url: string, category: string) => {
    const newBookmark: Bookmark = {
      id: crypto.randomUUID(),
      title,
      url,
      category,
      favicon: getFavicon(url),
      createdAt: Date.now(),
    };
    setBookmarks([newBookmark, ...bookmarks]);
  };

  const removeBookmark = (id: string) => {
    setBookmarks(bookmarks.filter((b) => b.id !== id));
  };

  const addCategory = (category: string) => {
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    }
  };

  const removeCategory = (category: string) => {
    // Move all bookmarks from deleted category to "General"
    setBookmarks(
      bookmarks.map((bookmark) =>
        bookmark.category === category
          ? { ...bookmark, category: 'General' }
          : bookmark
      )
    );
    // Remove the category from the list
    setCategories(categories.filter((cat) => cat !== category));
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        categories,
        addBookmark,
        removeBookmark,
        addCategory,
        removeCategory,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
