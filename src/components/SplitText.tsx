import { useEffect, useRef, useState, type ElementType } from 'react';

type Props = {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
};

// Splits text into words, each sliding up out of an overflow mask. Replays each time
// the element scrolls into view (and hides again when scrolled away).
export function SplitText({ text, className = '', as: Tag = 'div', delay = 0, stagger = 70 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="word-mask" style={{ display: 'inline-block', marginRight: '0.28em' }}>
          <span
            className={`word-inner ${isInView ? 'is-in' : ''}`}
            style={{ transitionDelay: `${delay + i * stagger}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}