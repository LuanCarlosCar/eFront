"use client";

import Cookies from "js-cookie";
import Image from "next/image";
import logo from "../../public/eFront.svg";
import splashhome from "../../public/splashhome.svg";
import { Poppins } from "next/font/google";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import arms from "../../public/animation/arms.json";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const imageStyle = {
  width: "100%",

  zIndex: 40,
};
interface UserProps {
  name: string;
  password: string;
}

export default function Home() {
  const [formData, setFormData] = useState<UserProps | null>(null);
  const [isCheck, setIsCheck] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isloading) {
      setTimeout(() => {
        Cookies.set("auth_token", formData!.name);

        router.push("/dashboard");

        setIsloading(false);

        toast("Login bem sucedido!", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
      }, 1000);
    }
  }, [isloading]);

  function handleLogin() {
    const { name, password } = formData || {};

    if (!name || !password) {
      return toast("Usuário e senha são obrigatórios!", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    }

    setIsloading(true);
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value } as UserProps);
  }

  function renderloading() {
    if (!isloading) {
      return <></>;
    }

    const lottieStyle = {
      width: "90%",
      height: "90%",
    };
    return (
      <div className=" z-10 fixed top-0 h-screen w-screen bg-white/[.4] flex justify-center items-center">
        <Lottie animationData={arms} style={lottieStyle} />
      </div>
    );
  }

  return (
    <div className={`${poppins.className} w-screen h-screen bg-blue-main`}>
      <header className=" bg-white flex justify-between px-80 py-8">
        <Image src={logo} alt="logo" />

        <ul className=" flex justify-between text-black-1 gap-10">
          <li className=" cursor-pointer duration-300 hover:text-blue-sub">
            Sobre o eFront
          </li>
          <li className=" cursor-pointer duration-300 hover:text-blue-sub">
            Centro de segurança
          </li>
        </ul>
      </header>

      <main className="h-[80vh] flex justify-center  items-center">
        <div className="justify-center flex items-center gap-8 h-270">
          <section>
            <div className=" relative w-350 h-full ">
              <Image src={splashhome} alt="logo" style={imageStyle} />
              <div className=" absolute bottom-0 ml-8 mb-8">
                <p className=" text-4xl">
                  Tenha relatórios em tempo real, monitorando e analisando os
                  resultados de maneira eficiente.
                </p>
              </div>
            </div>
          </section>

          <section className=" bg-white w-240 h-full rounded-3xl px-6 py-12">
            <h2 className=" text-2xl text-center text-blue-sub mb-10">
              Acesse o eFront
            </h2>

            <input
              className=" w-full p-4 bg-pl-gray rounded-lg mb-6 text-black"
              type="text"
              name="name"
              placeholder="Usuário"
              onChange={handleOnChange}
            />
            <input
              className=" w-full p-4 bg-pl-gray rounded-lg mb-6 text-black "
              type="password"
              name="password"
              placeholder="Senha"
              onChange={handleOnChange}
            />

            <label
              onClick={() => setIsCheck(!isCheck)}
              className="flex items-center cursor-pointer text-gray-400 mb-10"
            >
              <div className="w-6 h-6 border-2 rounded-md mr-2   border-gray-400 p-1 ">
                <div
                  data-checkedBox={isCheck}
                  className={`w-full h-full rounded transition-all duration-300 border-gray-400 bg-white  data-[checkedBox=true]:border-gray-400 data-[checkedBox=true]:bg-blue-sub `}
                ></div>
              </div>
              Lembrar minha senha
            </label>

            <button
              onClick={handleLogin}
              className=" w-full bg-blue-sub border text-center text-lg py-4 rounded-lg mb-6  duration-300 hover:text-blue-sub hover:bg-white hover:border-blue-sub"
            >
              Entrar na conta
            </button>

            <button className=" w-full bg-pl-gray border border-transparent text-center text-blue-sub text-lg py-4 rounded-lg duration-300 hover:text-blue-sub hover:bg-white hover:border-blue-sub">
              Criar uma conta
            </button>

            <a>Esqueci a minha senha</a>
          </section>
        </div>
      </main>

      <footer className=" w-full bg-white flex justify-center items-center py-3 absolute bottom-0">
        <p className=" text-blue-sub text-lg">Todos os direitos reservados</p>
      </footer>
      {renderloading()}
    </div>
  );
}
