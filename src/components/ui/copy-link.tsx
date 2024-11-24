import { useEffect, useRef, useState } from 'react';
import { LinkIcon, MaterialCheckIcon } from '~/components/ui/icons';
import { cn } from '~/lib/utils';

export default function CopyLink({
  href,
  className,
}: {
  href?: string;
  className?: string;
}) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  const onClick = async () => {
    await navigator.clipboard.writeText(href ?? window.location.href);
    setIsClicked(true);
    timerRef.current = setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <button className={cn('relative', className)} onClick={onClick}>
      <span className="sr-only">{isClicked ? 'copied' : 'copy'}</span>
      <MaterialCheckIcon
        className={cn(
          'absolute opacity-0 transition',
          isClicked && 'opacity-100',
        )}
      />
      <LinkIcon className={cn('transition', isClicked && 'opacity-0')} />
    </button>
  );
}
