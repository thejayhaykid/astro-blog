import { useEffect, useState } from "react";
import { XMLParser } from "fast-xml-parser";

const Letterboxd = () => {
  const [jsFeed, setJsFeed] = useState(null);
  const letterboxdRSS = "https://letterboxd.com/jakehayes/rss/";

  useEffect(() => {
    const parser = new XMLParser();

    fetch(letterboxdRSS).then((response) => {
      setJsFeed(parser.parse(response.data));
    });
  }, []);

  useEffect(() => {
    console.log(jsFeed);
  }, [jsFeed]);

  return (
    <div class="flex flex-row w-screen justify-center content-start min-h-[var(--screen-height)] dark:bg-gray-900 dark:text-gray-50 pt-8">
      {jsFeed}
    </div>
  );
};

export default Letterboxd;
