import { useEffect } from 'react';
import type { GiscusSchema } from '~/cfg-schema';

const giscusThemes = {
  light: 'https://giscus.app/themes/noborder_light.css',
  dark: 'https://giscus.app/themes/noborder_gray.css',
} as const;

export const changeGiscusTheme = (theme: string) => {
  const giscusTheme = giscusThemes[theme as keyof typeof giscusThemes];
  if (!giscusTheme) return;

  const iframe = document.querySelector<HTMLIFrameElement>(
    'iframe.giscus-frame',
  );

  // @see https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  const giscusConfig = {
    theme: giscusTheme,
  };
  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: giscusConfig } },
    'https://giscus.app',
  );
};

export const GiscusSection = ({
  giscus,
  ...props
}: React.HTMLAttributes<HTMLElement> & { giscus: GiscusSchema }) => {
  useEffect(() => {
    const theme: keyof typeof giscusThemes =
      document.documentElement.classList.contains('dark') ? 'dark' : 'light';

    const giscusAttributes = {
      src: 'https://giscus.app/client.js',
      'data-repo': giscus.repo,
      'data-repo-id': giscus.repoId,
      'data-category': giscus.category,
      'data-category-id': giscus.categoryId,
      'data-mapping': giscus.mapping,
      'data-strict': giscus.strict ? '1' : '0',
      'data-reactions-enabled': giscus.reactionsEnabled ? '1' : '0',
      'data-emit-metadata': giscus.emitMetadata ? '1' : '0',
      'data-input-position': giscus.inputPosition,
      'data-lang': giscus.lang,
      'data-theme': giscusThemes[theme],
      crossorigin: 'anonymous',
      async: '',
    };

    const giscusScript = document.createElement('script');
    Object.entries(giscusAttributes).forEach(([key, value]) =>
      giscusScript.setAttribute(key, value),
    );
    document.querySelector('#giscus')?.appendChild(giscusScript);
  }, []);

  return (
    <section {...props} style={{ minHeight: '372px' }} id="giscus"></section>
  );
};
