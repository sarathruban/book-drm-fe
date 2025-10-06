export function listBooks() {
  return [
    {
      id: 1,
      title: "The Great Hackathon",
      author: "Alice",
      cover: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      title: "React Adventures",
      author: "Bob",
      cover: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      title: "JavaScript Mastery",
      author: "Charlie",
      cover: "https://picsum.photos/200/300?random=3",
    },
    {
      id: 4,
      title: "Node.js Essentials",
      author: "David",
      cover: "https://picsum.photos/200/300?random=4",
    },
    {
      id: 5,
      title: "Frontend Wizardry",
      author: "Eve",
      cover: "https://picsum.photos/200/300?random=5",
    },
    {
      id: 6,
      title: "Backend Secrets",
      author: "Frank",
      cover: "https://picsum.photos/200/300?random=6",
    },
    {
      id: 7,
      title: "CSS Tricks",
      author: "Grace",
      cover: "https://picsum.photos/200/300?random=7",
    },
    {
      id: 8,
      title: "HTML Magic",
      author: "Hank",
      cover: "https://picsum.photos/200/300?random=8",
    },
    {
      id: 9,
      title: "TypeScript Guide",
      author: "Ivy",
      cover: "https://picsum.photos/200/300?random=9",
    },
    {
      id: 10,
      title: "Design Patterns",
      author: "Jack",
      cover: "https://picsum.photos/200/300?random=10",
    },
  ];
}

export function individualBooksApi() {
  return {
    id: 10,
    title: "Design Patterns",
    author: "Jack",
    cover: "https://picsum.photos/200/300?random=10",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ea tenetur molestiae necessitatibus veniam reprehenderit, labore iusto nam temporibus inventore vero iste possimus nemo ex perferendis, minus blanditiis alias corrupti?",
    language: "English",
  };
}
