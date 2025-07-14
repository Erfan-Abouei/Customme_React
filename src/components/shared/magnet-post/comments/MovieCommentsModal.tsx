import CommentNotFound from "./CommentNotFound";
import { useMagnetSectionContext } from "@/hooks/useMagnetSectionContext";
import clsx from "clsx";
import { memo, type SyntheticEvent } from "react";
import CommentContainer from "./CommentContainer";
import CommentLoader from "./CommentLoader";
import CommentsModalHeader from "./CommentsModalHeader";
import { usePostCommentsQuery } from "@/services/query/magnetPostsQueries";

const MovieCommentsModal = () => {
    const { selectedMagnet } = useMagnetSectionContext();
    const { data: comments, fetchNextPage, isFetchingNextPage, hasNextPage } = usePostCommentsQuery(selectedMagnet?.id as number);
    const { isOpenCommentsSection } = useMagnetSectionContext();

    const handleInfinityScroll = (e: SyntheticEvent) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        if (scrollTop + clientHeight >= scrollHeight - 5 && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    };

    const commentLoader = Array.from({ length: 3 }).map((_, i) => <CommentLoader key={i} />);

    const allComments = Array.isArray(comments?.pages)
        ? comments.pages.flatMap(page => Array.isArray(page.data?.comments) ? page.data.comments : [])
        : [];

    return (
        <div
            className={clsx(
                `z-20 absolute bottom-0 left-0 right-0 w-full h-1/2 bg-white rounded-t-2xl transition-all`,
                {
                    "translate-y-full": !isOpenCommentsSection,
                    "translate-y-0": isOpenCommentsSection,
                }
            )}
        >
            <CommentsModalHeader />

            <div
                onScroll={handleInfinityScroll}
                className="border-8 border-transparent page__scroll--custom overflow-auto flex flex-col gap-y-4 px-2 h-[calc(100%-48.8px)]"
            >
                {!comments && commentLoader}

                {comments && allComments.length === 0 && !hasNextPage && <CommentNotFound />}

                {comments && allComments.map(comment => (
                    <CommentContainer commentData={comment} key={comment.id} />
                ))}

                {hasNextPage && comments && commentLoader}
            </div>
        </div>
    );
};

export default memo(MovieCommentsModal);
