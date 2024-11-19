import { BookData } from "@/types";

const fetchOnBook = async (bookId: number): Promise<BookData | null> => {
  const url = `https://onebite-books-server-xi-sage.vercel.app/book/${bookId}`;

  try {
    const response = await fetch(url);
    if (!response) throw new Error();

    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default fetchOnBook;
