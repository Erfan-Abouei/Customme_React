import type { Post } from "@/services/dto/magnet-post/magnet-post.dto"

export interface InitialState {
    // string[] for test
    magnets: Post[]
    selectedMagnet: Post | null
    isLoadingMagnets: boolean
}