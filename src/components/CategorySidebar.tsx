import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, FolderOpen, Trash2 } from 'lucide-react';
import { useBookmarks } from '@/contexts/BookmarkContext';
import { toast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface CategorySidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategorySidebar = ({ selectedCategory, onSelectCategory }: CategorySidebarProps) => {
  const [newCategory, setNewCategory] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<string | null>(null);
  const { categories, addCategory, removeCategory, bookmarks } = useBookmarks();

  const getCategoryCount = (category: string) => {
    if (category === 'All') return bookmarks.length;
    return bookmarks.filter((b) => b.category === category).length;
  };

  const handleAddCategory = () => {
    if (!newCategory.trim()) {
      toast({
        title: 'Error',
        description: 'Category name cannot be empty.',
        variant: 'destructive',
      });
      return;
    }

    if (categories.includes(newCategory)) {
      toast({
        title: 'Error',
        description: 'This category already exists.',
        variant: 'destructive',
      });
      return;
    }

    addCategory(newCategory);
    setNewCategory('');
    setIsAdding(false);
    toast({
      title: 'Success!',
      description: 'New category added.',
    });
  };

  const handleDeleteCategory = (category: string) => {
    setCategoryToDelete(category);
  };

  const confirmDeleteCategory = () => {
    if (categoryToDelete) {
      const bookmarkCount = getCategoryCount(categoryToDelete);
      removeCategory(categoryToDelete);
      
      if (selectedCategory === categoryToDelete) {
        onSelectCategory('All');
      }
      
      toast({
        title: 'Category deleted',
        description: `${categoryToDelete} deleted. ${bookmarkCount} bookmark(s) moved to General.`,
      });
      
      setCategoryToDelete(null);
    }
  };

  return (
    <>
      <aside className="w-64 bg-card border-r border-border p-6 flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-primary" />
            Categories
          </h2>

        <div className="space-y-1">
          <Button
            variant={selectedCategory === 'All' ? 'secondary' : 'ghost'}
            className="w-full justify-start text-sm"
            onClick={() => onSelectCategory('All')}
          >
            All
            <span className="ml-auto text-xs bg-muted px-2 py-0.5 rounded-full">
              {getCategoryCount('All')}
            </span>
          </Button>

          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-1 group">
              <Button
                variant={selectedCategory === cat ? 'secondary' : 'ghost'}
                className="flex-1 justify-start text-sm"
                onClick={() => onSelectCategory(cat)}
              >
                {cat}
                <span className="ml-auto text-xs bg-muted px-2 py-0.5 rounded-full">
                  {getCategoryCount(cat)}
                </span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={() => handleDeleteCategory(cat)}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-border">
        {!isAdding ? (
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => setIsAdding(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Category
          </Button>
        ) : (
          <div className="space-y-2">
            <Input
              placeholder="Category name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddCategory()}
              autoFocus
            />
            <div className="flex gap-2">
              <Button size="sm" className="flex-1" onClick={handleAddCategory}>
                Add
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setIsAdding(false);
                  setNewCategory('');
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </aside>

    <AlertDialog open={!!categoryToDelete} onOpenChange={() => setCategoryToDelete(null)}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Category</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete "{categoryToDelete}"? All bookmarks in this category ({getCategoryCount(categoryToDelete || '')}) will be moved to "General" category.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={confirmDeleteCategory}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </>
  );
};
