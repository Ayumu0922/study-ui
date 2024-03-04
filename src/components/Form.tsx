import React from "react";
import { FcGoogle } from "react-icons/fc";

const Form = () => {
  return (
    <div className=" bg-white  px-10 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className=" text-5xl font-bold">ようこそ！！</h1>
      <p className=" font-medium text-lg text-gray-500 mt-4">
        利用には会員登録が必要です。
      </p>
      <div className=" mt-8">
        <div>
          <label htmlFor="" className=" text-lg font-medium">
            メールアドレス
          </label>
          <input
            type="email"
            placeholder="メールアドレス..."
            className=" w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          />
        </div>
        <div>
          <label htmlFor="" className=" text-lg font-medium">
            パスワード
          </label>
          <input
            type="password"
            placeholder="パスワード..."
            className=" w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          />
        </div>
        <div className=" mt-8 flex justify-between items-center">
          <div>
            <input
              type="checkbox"
              id="confirmation"
              className=" cursor-pointer"
            />
            <label
              htmlFor="confirmation"
              className=" cursor-pointer ml-2 font-medium text-base"
            >
              利用規約に同意する
            </label>
          </div>
          <button className=" font-medium text-base text-green-500 cursor-pointer">
            パスワードを忘れた方
          </button>
        </div>
        <div className=" mt-8 flex flex-col gap-y-4">
          <button className=" active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-green-500 text-white text-lg font-bold hover:bg-green-400">
            ログイン
          </button>
          <button className="flex gap-3 items-center justify-center active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-blue-500 text-white text-lg font-bold hover:bg-blue-400">
            <FcGoogle size={20} />
            Googleでログイン
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
