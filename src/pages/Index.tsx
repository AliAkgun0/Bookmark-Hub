import { useState } from 'react';
import { BookmarkProvider, useBookmarks } from '@/contexts/BookmarkContext';
import { CategorySidebar } from '@/components/CategorySidebar';
import { BookmarkCard } from '@/components/BookmarkCard';
import { AddBookmarkDialog } from '@/components/AddBookmarkDialog';
import { Bookmark } from 'lucide-react';

const BookmarkApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { bookmarks, removeBookmark } = useBookmarks();

  const filteredBookmarks =
    selectedCategory === 'All'
      ? bookmarks
      : bookmarks.filter((b) => b.category === selectedCategory);

  return (
    <div className="flex h-screen bg-gradient-subtle overflow-hidden">
      <CategorySidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-8">
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                    <Bookmark className="w-6 h-6 text-white" />
                  </div>
                  Bookmark Hub
                </h1>
                <p className="text-muted-foreground">
                  {filteredBookmarks.length} bookmark{filteredBookmarks.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'All' && ` - ${selectedCategory}`}
                </p>
              </div>
              <AddBookmarkDialog />
            </div>
          </header>

          {filteredBookmarks.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Bookmark className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No bookmarks yet
              </h3>
              <p className="text-muted-foreground">
                Start by adding your first bookmark!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredBookmarks.map((bookmark) => (
                <BookmarkCard
                  key={bookmark.id}
                  bookmark={bookmark}
                  onDelete={removeBookmark}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const Index = () => {
  return (
    <BookmarkProvider>
      <BookmarkApp />
    </BookmarkProvider>
  );
};

export default Index;
