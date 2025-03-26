import SuggestedVideo from "../components/SuggestedVideos";
import { videos } from "../types/videos";
export default function SuggestedVideosPage() {
  return <SuggestedVideo videos={videos} currentVideoId={videos[0].id} />;
}
