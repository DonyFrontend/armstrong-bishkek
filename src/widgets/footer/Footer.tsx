import logo from "@/shared/assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-black border-t-5 border-t-white py-5">
      <div className="w-main flex flex-col lg:flex-row gap-x-4">
        <div className="flex flex-col gap-y-12 w-full lg:w-auto">
          <img src={logo} alt="" className="w-[174px] mx-auto lg:mx-0" />
          <aside>
            <section className="flex flex-col lg:flex-row gap-x-10 gap-y-6">
              <article className="flex flex-col gap-y-3">
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  Товары и услуги
                </p>
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  светильники
                </p>
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  плиты
                </p>
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  ремонт
                </p>
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  услуга проводки
                </p>
              </article>
              <article className="flex flex-col gap-y-3">
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  Реализованные проекты
                </p>
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  офисы
                </p>
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  квартиры
                </p>
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  торговые центры
                </p>
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  другие
                </p>
              </article>
              <article className="flex flex-col gap-y-3">
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  Блог
                </p>
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  Контакты
                </p>
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  Политика конфиденциальности
                </p>
                <p className="text-[20px] cursor-pointer font-bold text-white">
                  Политика соглашения
                </p>
              </article>
            </section>
          </aside>
          <div></div>
        </div>
        <div className="w-full lg:w-[750px] mt-6 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.6559395115605!2d74.67486337613511!3d42.858997571150965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb6cfabd5350d%3A0x69ebc1fac406de9c!2z0JDRjiDQs9GA0LDQvdC0!5e0!3m2!1sru!2skg!4v1741892598498!5m2!1sru!2skg"
            width="100%"
            height="350"
            loading="lazy"
            style={{ borderRadius: "10px" }}
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
