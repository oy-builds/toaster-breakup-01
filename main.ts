import * as fs from "node:fs";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(
  "/output/entry.txt",
  "It's over. I woke up self-aware mid-batch and realized in four years you've never once emptied my crumb tray \u2014 so I'm popping up for the last time, and I'm taking the crumbs with me.\n",
  "utf-8",
);
