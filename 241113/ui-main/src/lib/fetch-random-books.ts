import { BookData } from "@/types";

const fetchRandomBook = async (): Promise<BookData[]> => {
  const url = "https://onebite-books-server-xi-sage.vercel.app/book/random";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default fetchRandomBook;
