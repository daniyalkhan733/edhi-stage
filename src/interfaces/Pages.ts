export default interface Pages {
    id: number;
    attributes: {
      title: string;
      description: string;
      content: string;
      url: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }