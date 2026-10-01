import { PostsService } from "./posts.service";

describe("PostsService", () => {
  let postsService: PostsService;

  const post = {
    text: "Test post",
  };

  beforeEach(() => {
    postsService = new PostsService();

    postsService.create({
      text: "Existing post",
    });
  });

  it("should add a new post", () => {
    const createdPost = postsService.create(post);

    expect(createdPost).toEqual({
      ...post,
      id: "2",
      date: expect.any(String),
    });
  });

  it("should find a post", () => {
    const createdPost = postsService.create(post);

    const foundPost = postsService.find(createdPost.id);

    expect(foundPost).toEqual(createdPost);
  });
});
