import { instance } from "@/shared/api/instance";
import type { IPostContact } from "../types/postContactTypes";

export const postContact = async ({
  setLoading,
  name,
  number,
  comment = "Hello!",
  setStatus,
}: IPostContact) => {
  setLoading(true);
  try {
    const form = new FormData();
    form.append("name", name);
    form.append("phone", number);
    form.append("comment", comment);
    await instance
      .post("/add-request", form)
      .then(() => setStatus("Данные успешно отправлены"))
      .then((data) => console.log("Contact Data", data));
  } catch (error) {
    throw new Error(error as string);
  } finally {
    setLoading(false);
  }
};
