"use client";
import { Book } from "@/lib/features/books/booksSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@radix-ui/themes";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { bookSchema } from "../bookSchema";
import FormInput from "./FormInput";

type FormValues = Omit<Book, "id">;

interface BookFormProps {
  handleFormSubmit: (book: FormValues) => void;
  book?: Book;
}

const initialValues: FormValues = {
  name: "",
  price: 0,
  category: "",
  description: "",
};

const BookForm: React.FC<BookFormProps> = ({ handleFormSubmit, book }) => {
  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(bookSchema),
    defaultValues: book ? book : initialValues,
  });
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setValue("price", isNaN(value) ? 0 : value); // Convert to number or fallback to 0 if NaN
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      handleFormSubmit(data);
    } catch (err) {
      console.error("Failed to save the book", err);
    }
  };

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    console.error("Form submission error:", errors, e);
  };

  return (
    <div className="max-w-xl">
      <form className=" space-y-3 " onSubmit={handleSubmit(onSubmit, onError)}>
        <FormInput label="Name" name="name" control={control} errors={errors} />
        <FormInput
          label="Price"
          name="price"
          control={control}
          errors={errors}
          onChange={handlePriceChange}
          type="number"
        />
        <FormInput
          label="Category"
          name="category"
          control={control}
          errors={errors}
        />
        <FormInput
          label="Description"
          name="description"
          type="textarea"
          control={control}
          errors={errors}
        />
        <Button>{book ? "Update Book" : "Submit New Book"} </Button>
      </form>
    </div>
  );
};

export default BookForm;
