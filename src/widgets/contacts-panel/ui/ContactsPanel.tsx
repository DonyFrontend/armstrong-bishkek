import background from "@/shared/assets/images/contacts_background.png";
import { useState } from "react";
import { postContact } from "../model/service/postContact";
import { useSearchParams } from "react-router-dom";

const ContactsPanel = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [searchParams] = useSearchParams();
  const productName = searchParams.get("product");
  console.log(productName);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await postContact({ setLoading, name, number, comment, setStatus });
    setName("");
    setNumber("");
    setComment("");
  };

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="w-full h-full flex justify-center rounded-[10px] items-center bg-cover bg-no-repeat bg-center"
    >
      <form
        action=""
        onSubmit={handleSubmit}
        className="p-3 -z-[0] flex w-[70%] flex-col items-center gap-y-8 rounded-[10px] backdrop-blur-[10px]"
      >
        <h4 className="text-white text-[40px] font-bold">Выйти на связь</h4>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-white placeholder:text-gray-500 text-black placeholder:text-[20px] rounded-[30px] px-3 p-2"
          required
          placeholder="Имя"
          type="text"
          maxLength={30}
        />
        <div className="flex w-full items-center justify-center">
          <div className="text-black h-max bg-white text-[20px] rounded-l-[30px] py-[5px]">
            +996
          </div>
          <input
            value={number}
            onChange={(e) => {
              const val = e.target.value;
              if (val.length <= 9) setNumber(val);
            }}
            className="w-full bg-white placeholder:text-gray-500 text-black placeholder:text-[20px] rounded-r-[30px] px-3 py-[8px]"
            required
            placeholder="123456789"
            type="number"
          />
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <textarea
            value={productName ? `Хочу подробнее узнать о "${productName}"` : comment}
            name=""
            id=""
            placeholder="Введите комментарий"
            maxLength={1000}
            className="max-h-[300px] min-h-[200px] bg-white w-full rounded-[10px] text-black p-3 placeholder:text-gray-500"
            onChange={(e) => setComment(e.target.value)}
          >
          </textarea>
          <span>{comment.length}/1000</span>
        </div>
        <button
          type="submit"
          disabled={loading == true}
          className={`p-2 rounded-[10px] cursor-pointer flex justify-center items-center px-4 text-[20px] text-white ${loading ? "bg-yellow-700" : "bg-main"
            }`}
        >
          {loading && (
            <div className="w-[20px] rounded-full bg-none h-[20px] justify-self-center animate-spin border-t botder-b border-t-white border-b-white"></div>
          )}{" "}
          <p className={`${loading && "invisible"}`}>Отправить</p>
        </button>
        {status && <p className="text-[18px] text-green-500">{status}</p>}
      </form>
    </div>
  );
};

export default ContactsPanel;