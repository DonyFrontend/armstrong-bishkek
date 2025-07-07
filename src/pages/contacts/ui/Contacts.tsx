import { useMediaQuery } from "@/shared/hooks/useMedia";
import MainHeader from "@/widgets/main-header/ui/MainHeader";
import { Mail, LocateIcon, Phone } from "lucide-react";
import whatsapp from "@/shared/assets/icons/whatsapp.svg";
import tg from "@/shared/assets/icons/tg.svg";
import instagram from "@/shared/assets/icons/instagram.svg";
import x from "@/shared/assets/icons/x.svg";
import facebook from "@/shared/assets/icons/facebook.svg";
import ContactsPanel from "@/widgets/contacts-panel/ui/ContactsPanel";

const Contacts = () => {
  const mobile = useMediaQuery("(max-width:768px)");

  return (
    <div className="bg-black text-white relative w-full h-full flex justify-center pb-10">
      <div className="w-main pt-8">
        <div
          className={`${!mobile && "absolute top-4 left-1/2 -translate-x-1/2"}`}
        >
          <MainHeader mobile={mobile} />
        </div>
        <div
          className={`mt-[170px] ${mobile ? "flex-col" : "flex"
            } w-full gap-x-5 justify-between`}
        >
          {mobile && (
            <div className="w-full">
              <ContactsPanel />
            </div>
          )}
          <div
            className={`${mobile ? "w-full" : "w-1/2"
              } flex flex-col gap-y-10 justify-center`}
          >
            <div className="h-[300px] bg-[linear-gradient(180deg,_#febc30,_#d4bd8d)] w-full rounded-[10px] flex justify-center items-center">
              <p className="text-center font-bold text-[40px]">
                arm1strong <br />
                <span className="text-[30px]">промокод на 15%</span>
              </p>
            </div>
            <section className="flex flex-col gap-y-2">
              <article className="flex text-[30px] font-bold items-center gap-x-3">
                <Mail className="w-auto h-auto shrink-0" color="#febc30" />
                <p>test@mail.com</p>
              </article>
              <article className="flex text-[30px] font-bold items-center gap-x-3">
                <LocateIcon
                  color="#febc30"
                  className="w-auto h-auto shrink-0"
                />
                <p>
                  улица Чокана Валиханова, 2 ТЦ Аю Гранд, 1 этаж Бишкек,
                  Кыргызстан
                </p>
              </article>
              <article className="flex text-[30px] font-bold items-center gap-x-3">
                <Phone className="w-auto h-auto shrink-0" color="#febc30" />
                <p>+996 555 123456</p>
              </article>
            </section>
            <div className="flex gap-x-6 p-2">
              <img className="w-[40px] h-auto shrink-0" src={whatsapp} alt="" />
              <img className="w-[40px] h-auto shrink-0" src={tg} alt="" />
              <img
                className="w-[40px] h-auto shrink-0"
                src={instagram}
                alt=""
              />
              <img className="w-[40px] h-auto shrink-0" src={x} alt="" />
              <img className="w-[40px] h-auto shrink-0" src={facebook} alt="" />
            </div>
          </div>
          {!mobile && (
            <div className="w-1/2 flex">
              <ContactsPanel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
