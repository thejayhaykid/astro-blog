import { DiscussionEmbed } from "disqus-react";

const config = {
  disqus: {
    enable: true,
    shortname: "jakehayes-1",
    settings: {
      url: window.location.href,
      language: "en_US",
      identifier: "",
      title: "",
    },
  },
};

const Disqus = ({ className, title }: DisqusProps) => {
  const { disqus } = config;
  disqus.settings.identifier = title;
  disqus.settings.title = title;

  return (
    <div className={className}>
      {disqus.enable && (
        <DiscussionEmbed
          shortname={disqus.shortname}
          config={disqus.settings}
        />
      )}
    </div>
  );
};

export type DisqusProps = {
  title: string;
  className?: string;
};

export default Disqus;
