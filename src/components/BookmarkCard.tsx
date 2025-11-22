import { Bookmark } from '@/types/bookmark';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Trash2, ExternalLink } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface BookmarkCardProps {
  bookmark: Bookmark;
  onDelete: (id: string) => void;
}

export const BookmarkCard = ({ bookmark, onDelete }: BookmarkCardProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bookmark.url);
      toast({
        title: 'Copied!',
        description: 'Link copied to clipboard.',
      });
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to copy.',
        variant: 'destructive',
      });
    }
  };

  const handleOpen = () => {
    window.open(bookmark.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group relative overflow-hidden bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02] animate-fade-in">
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <img
            src={bookmark.favicon}
            alt=""
            className="w-8 h-8 rounded-md flex-shrink-0"
            onError={(e) => {
              e.currentTarget.src = 'https://www.google.com/s2/favicons?sz=64&domain=example.com';
            }}
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-sm line-clamp-1 mb-1">
              {bookmark.title}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {bookmark.url}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleOpen}
            className="flex-1 text-xs"
          >
            <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
            Open
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="flex-1 text-xs"
          >
            <Copy className="w-3.5 h-3.5 mr-1.5" />
            Copy
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(bookmark.id)}
            className="text-xs text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      <div className="absolute top-2 right-2">
        <span className="text-[10px] font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
          {bookmark.category}
        </span>
      </div>
    </Card>
  );
};
