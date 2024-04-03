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
  const [openDisqus, setOpenDisqus] = useState<boolean>(
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
        <>
          {openDisqus ? (
            <DiscussionEmbed
              shortname={disqus.shortname}
              config={disqus.settings}
            />
          ) : (
            <div className="w-full flex justify-center">
              <button
                onClick={() => setOpenDisqus(true)}
                className="w-96 btn btn-primary"
              >
                Show Comments
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export type DisqusProps = {
  title: string;
  className?: string;
};

export default Disqus;
