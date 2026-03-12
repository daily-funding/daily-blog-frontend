/* eslint-disable @next/next/no-img-element */
import { mockTopPosts } from "../data/mockTopPosts"

export default function TopCarousel() {
    const mockPost = mockTopPosts.posts[0]
    return <img src={mockPost.preview_image} alt=""/>
}

//TODO:- 너 carousel 구현 시작하고 있었고 header 부분이 구분되어 있길래 이걸 어떻게 해야 위에 얹을 수 있나 고민중이었다
//TODO:- 그리고 지금 당장은 mock data에서 데이터 뽑아와서 사진 1개만 띄워보는거 했던거임 ㅇㅋ?