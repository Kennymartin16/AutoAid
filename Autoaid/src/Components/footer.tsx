import Header from "./Header";
import social from "/home-images/social.png";

const Footer = () => {
  return (
    <>
      <section className="max-w-full bg-dark">
        <div className=" flex gap-[181px] pt-[117px]">
          <div className="flex flex-col gap-[78.41px]">
            <p className="text-5xl font-bold text-white leading-[67px] h-[164.18px] w-[463px]">
              Get in touch with us for your service
            </p>
            <div className="">
              <img src={social} className="w-40 h-7" />
            </div>
          </div>
          <div className="w-[471px] h-[292px]">
            <div>
              <p className="leading-8 text-lg text-white opacity-60">
                Help line Noumber
              </p>
              <p className="leading-9 text-2xl text-white">1800 265 24 52</p>
            </div>
            <div className="mt-8">
              <p className="leading-8 text-lg text-white opacity-60">Address</p>
              <p className="leading-9 text-2xl text-white ">
                NH 234 Public Square San Francisco 65368
              </p>
            </div>
            <div className="mt-8">
              <p className="leading-8 text-lg text-white opacity-60">
                We are open
              </p>
              <p className="leading-9 text-2xl text-white">
                Monday to Friday 9:00 AM to 10:00 AM
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="border-2 p-4">
        <Header/>
      </div>
    </>
  );
};

export default Footer;
