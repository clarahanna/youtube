import Subscribe from "../components/Subscribe";

import { videos } from "../types/videos";
export default function SubscribePage() {
  return (
    <Subscribe
      title={videos[0].title}
      subscribers={videos[0].subscribers}
      channel={videos[0].channel}
      avatarUrl={videos[0].src}
      description={videos[0].description}
      likes={videos[0].likes}
      dislikes={videos[0].dislikes}
      views={videos[0].views}
    />
  );
}
