import { HiMiniXMark } from "react-icons/hi2";
import CommentNotFound from "./CommentNotFound";
import { useMovieModalContext } from "@/hooks/useMovieModalContext";
import clsx from "clsx";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { getPostComments } from "@/services/handle-magnet-post-request";
import { memo, useCallback, useRef, useState, type SyntheticEvent } from "react";
import { useOneTime } from "@/hooks/useOneTime";
import type { CommentsResponse } from "@/services/dto/magnet-post/magnet-post-comments.dto";
import CommentContainer from "./CommentContainer";
import CommentLoader from "./CommentLoader";
import CommentsModalHeader from "./CommentsModalHeader";

const MovieCommentsModal = () => {
    const selectedPostId = useSelector(
        (state: RootState) => state.magnetPosts.selectedMagnet?.id
    );
    const { isOpenCommentsSection } = useMovieModalContext();

    const [comments, setComments] = useState<CommentsResponse | null>(null);
    const [hasMore, setHasMore] = useState(true);
    const page = useRef<number>(1);
    const isLoading = useRef<boolean>(false);
    const handleInfinityScroll = (e: SyntheticEvent) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        if (scrollTop + clientHeight >= scrollHeight - 5 && hasMore) {
            fetchPostComments();
        }
    }

    const fetchPostComments = useCallback(async () => {
        if (!selectedPostId || isLoading.current || !hasMore) return;
        isLoading.current = true;

        const data = await getPostComments(selectedPostId, page.current);
        if (!data) {
            setHasMore(false);
            isLoading.current = false;
            return;
        }

        setComments((prev) => {
            if (!prev) return data;
            return {
                ...prev,
                data: {
                    ...prev.data,
                    comments: [...prev.data.comments, ...data.data.comments],
                    pager: data.data.pager,
                },
            };
        });

        const totalPages = data.data.pager.total_pages;
        if (page.current >= totalPages) {
            setHasMore(false);
        } else {
            page.current++;
        }

        isLoading.current = false;
    }, [selectedPostId, hasMore]);

    useOneTime(fetchPostComments);

    const commentLoader = Array.from({ length: 3 }).map((_, i) => <CommentLoader key={i} />);
    const commentsResult = Array.isArray(comments?.data.comments)
        ? comments.data.comments.map((comment) => (
            <CommentContainer commentData={comment} key={comment.id} />
        ))
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
            {/* Comments Header */}
            <CommentsModalHeader />

            {/* Comment Content */}
            <div
                onScroll={handleInfinityScroll}
                className="border-8 border-transparent page__scroll--custom overflow-auto flex flex-col gap-y-4 px-2 h-[calc(100%-48.8px)]"
            >
                {!comments && commentLoader}

                {comments && comments.data.comments.length === 0 && !hasMore && <CommentNotFound />}

                {comments && commentsResult}

                {hasMore && comments && commentLoader}
            </div>
        </div>
    );
};

export default memo(MovieCommentsModal);
