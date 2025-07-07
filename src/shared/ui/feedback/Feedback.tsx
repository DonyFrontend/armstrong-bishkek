import type { IFeedback } from "@/pages/main/model/types/types";
import { formatDate } from "@/shared/lib/formatDate/formateDate";

const Feedback = ({ created_at, name, review }: IFeedback) => {
  return (
    <article className="bg-white text-black rounded-[12px] p-5 shadow-md max-w-md w-full">
      <h3 className="text-[20px] font-bold mb-3">{name}</h3>
      <p className="text-[16px] whitespace-pre-line mb-4">{review}</p>
      <span className="text-gray-400 text-sm">{formatDate(created_at)}</span>
    </article>
  );
};

export default Feedback;
