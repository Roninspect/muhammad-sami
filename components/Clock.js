'use client';

import { useEffect, useState } from 'react';

const format = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Dhaka',
  hour: 'numeric',
  minute: '2-digit',
});

/** Live local time in Chattogram. Renders a placeholder on the server, fills in on mount. */
export default function Clock() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    const tick = () => setNow(format.format(new Date()));
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, []);
  return (
    <time className="clock" aria-label={now ? `Local time ${now}` : undefined}>
      {now ?? '--:--'}
    </time>
  );
}
