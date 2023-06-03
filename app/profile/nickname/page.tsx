"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { loading } from "@/lib/recoil";

type Inputs = {
  nickname: string;
};

export default function Nickname() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const [isAvailable, setIsAvailable] = useState<string>("_");
  const setIsLoading = useSetRecoilState(loading);
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (isAvailable !== data.nickname) {
      alert("닉네임 중복 검사를 해주세요.");
    } else {
      setIsLoading(true);
      const result = await axios.put("/api/user/nickname", {
        data: { nickname: data.nickname },
      });
      router.replace("/profile");
      router.refresh();
      setIsLoading(false);
    }
  };

  async function checkNickname() {
    try {
      setIsLoading(true);
      const nickname = getValues("nickname");
      const request = await axios.get("/api/user/nickname", {
        params: {
          nickname: nickname,
        },
      });
      setIsAvailable(nickname);
      setIsLoading(false);
    } catch {
      alert("닉네임 중복 검사를 다시 해주세요.");
    }
  }

  function availableCheck() {
    if (isAvailable === getValues("nickname")) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold">닉네임 설정</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-white p-4 rounded-lg mt-8"
      >
        <input
          placeholder="ex) 큰사이언"
          {...register("nickname", {
            required: { value: true, message: "닉네임을 입력해주세요." },
            maxLength: {
              value: 8,
              message: "닉네임은 8글자 이하로 설정해주세요.",
            },
          })}
          className="ring-2 ring-sky-500 p-2 rounded-lg outline-none bg-slate-50"
        />
        {errors.nickname && (
          <span className="text-red-500 mt-1">{errors.nickname.message}</span>
        )}

        {availableCheck() ? (
          <div className="flex mt-2 text-sm items-center text-green-500">
            <CheckCircleIcon className="w-6 h-6" />
            <div className="ml-1">닉네임을 사용할 수 있습니다.</div>
          </div>
        ) : (
          <div className="flex mt-2 text-sm items-center text-red-500">
            <XCircleIcon className="w-6 h-6" />
            <div className="ml-1">닉네임 중복 검사를 해야합니다.</div>
          </div>
        )}

        <button
          onClick={checkNickname}
          type="button"
          className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 transition duration-200 text-white font-semibold mt-2"
        >
          중복 검사
        </button>
        <button
          type="submit"
          className="bg-sky-400 p-2 rounded-lg hover:bg-sky-500 transition duration-200 text-white font-semibold mt-2"
        >
          제출
        </button>
      </form>
    </div>
  );
}
