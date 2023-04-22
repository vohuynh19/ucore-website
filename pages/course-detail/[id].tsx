import { useRouter } from "next/router";
import Plyr from "plyr-react";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <p>
      Post: {id}
      <Plyr
        source={{
          type: "video",
          sources: [
            {
              src: "gu_F25rcqnI",
              provider: "youtube",
            },
          ],
        }}
      />
    </p>
  );
};

export default Post;
