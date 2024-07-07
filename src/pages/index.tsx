import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const IndexPage: React.FC<PageProps> = () => {
  const [birthtime, setBirthtime] = React.useState<Date | null>(null);
  const [billionSecondsLater, setBillionSecondsLater] =
    React.useState<Date | null>(null);
  // variable for storing 1 billion seconds after
  const billionSeconds = 1000000000 * 1000;
  // when the birthtime is set, calculate the time when 1 billion seconds have passed
  React.useEffect(() => {
    if (birthtime) {
      const billionlater = new Date(birthtime.getTime() + billionSeconds);
      setBillionSecondsLater(billionlater);
    } else {
      setBillionSecondsLater(null);
    }
  }, [birthtime]);

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Timestones</h1>
      {/* add input to enter a date and time */}
      <input
        type="datetime-local"
        onChange={(e) => setBirthtime(new Date(e.target.value))}
      />
      {/* display the 1 billion seconds after */}
      <p>
        1 Billionth second: <b>{billionSecondsLater?.toString()}</b>
      </p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Timestones</title>;
