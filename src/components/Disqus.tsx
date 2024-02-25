import { useEffect, useState } from "react";
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
  const [openDisqus, setOpenDisqus] = useState(
    localStorage.getItem("openDisqus") === "true" || false
  );
  const { disqus } = config;
  disqus.settings.identifier = title;
  disqus.settings.title = title;

  useEffect(() => {
    localStorage.setItem("openDisqus", openDisqus ? "true" : "false");
  }, [openDisqus]);

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
