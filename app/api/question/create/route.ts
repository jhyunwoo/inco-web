import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const createResult = await prisma?.questions.createMany({
    data: [
      {
        question: "데이터 통신은 데이터 처리와 ___(으)로 구성된다.",
        options: [
          "프로토콜",
          "허브",
          "데이터 분석",
          "데이터 구성",
          "데이터 분류",
        ],
        answer: "데이터 전송",
        type: "select",
        chaptersId: "clia7tncg0000zn99at3qx3r9",
      },
      {
        question:
          "데이터 통신시스템의 5대 구성요소는 송신기,수신기,메시지,전송매체,___이다.",
        options: ["스위치", "허브", "립리터", "ISP", "DNS"],
        answer: "프로토콜",
        type: "select",
        chaptersId: "clia7tncg0000zn99at3qx3r9",
      },
      {
        question: "네트워크에서 전송되는 작은 데이터 조각을 ___(이)라고 한다.",
        options: ["프레임", "세그먼트", "비트", "바이트"],
        answer: "패킷",
        type: "select",
        chaptersId: "clia7tncg0000zn99at3qx3r9",
      },
      {
        question: "컴퓨터는 ___과(와) ___만 이해한다.",
        options: ["A, B", "진실, 거짓", "양, 음", "1, -1"],
        answer: "0, 1",
        type: "select",
        chaptersId: "clia7tncg0000zn99at3qx3r9",
      },
      {
        question: "정보를 표시하는 최소의 단위를 ___(이)라고 한다.",
        options: ["바이트", "픽셀", "그램", "헤르츠", "파운드"],
        answer: "비트",
        type: "select",
        chaptersId: "clia7tncg0000zn99at3qx3r9",
      },
      {
        question:
          "특정 건물이나 지역을 범위로 하고 속도가 빠르며 오류 발생 확률이 낮은 네트워크를 ___(이)라고 한다.",
        options: ["왠", "ISP", "온프레미스", "클라우드"],
        answer: "랜",
        type: "select",
        chaptersId: "clia7tncg0000zn99at3qx3r9",
      },
      {
        question:
          "전기 통신 사업자가 제공하는 서비스를 사용하여 구축된 속도가 느리고 오류가 발생하기 쉬운 네트워크를 ___ (이)라고 한다.",
        options: ["랜", "ISP", "온프레미스", "클라우드"],
        answer: "왠",
        type: "select",
        chaptersId: "clia7tncg0000zn99at3qx3r9",
      },
      {
        question:
          "인터넷에 연결하려면 우선 ___와(과)  인터넷 회선을 결정하고 계약한다.",
        options: ["ISO", "TCP/IP", "IQ", "IU", "IBM"],
        answer: "ISP",
        type: "select",
        chaptersId: "clia7tncg0000zn99at3qx3r9",
      },
      {
        question: "외부에 공개하기 위한 네트워크를___(이)라고 한다. ",
        options: ["이더넷", "DNS", "이큐에스", "DDoS"],
        answer: "DMZ",
        type: "select",
        chaptersId: "clia7tncg0000zn99at3qx3r9",
      },
      {
        question: "기업의 서버는 ___(이)나 클라우드 중 하나로 운영되고 있다.",
        options: [
          "허브",
          "스위치",
          "프로토콜",
          "FAA",
          "AWS",
          "Azure",
          "Google Cloud",
        ],
        answer: "온프레미스",
        type: "select",
        chaptersId: "clia7tncg0000zn99at3qx3r9",
      },
      {
        question: "통신하기 위한 규칙을 ___(이)라고 한다. ",
        options: ["프레임", "퀴리", "DNS", "ISP"],
        answer: "프로토콜",
        type: "select",
        chaptersId: "clia87lmt0000zn1l76ff8k4a",
      },
      {
        question: "프로토콜의 주요 요소로 ___, ___,타이밍이있다.",
        options: [
          "주기, 정복",
          "주소, 순서",
          "주소, 의미",
          "구문, 주소",
          "캡슐화, 주소",
          "캡슐화, 제어",
        ],
        answer: "구문, 의미",
        type: "select",
        chaptersId: "clia87lmt0000zn1l76ff8k4a",
      },
      {
        question: "프로토콜의 주요 기능에 대한 설명으로 옳은 것을 고르시오.",
        options: [
          "주소 지정은 데이터를 보내는 송신측의 주소를 지정하여 데이터가 목적지로 정확하게 전송될 수 있도록 하는 기능이다.",
          "순서 제어는 주소나 오류검출 부호 등과 같은 프로토콜 제어정보를 부가하는 것이다.",
          "데이터의 단편화 및 재조립은 전송되는 패킷에 전송 순서를 부여하는 기능이다.",
          "캡슐화는 패킷에 트레일러만 덧붙이는 것을 말한다.",
          "연결 제어는 전송 도중에 발생하는 오류를 검출하고 정정하는 기능이다.",
          "오류 제어는 패리리 비트, CRC, DNS 등을 사용한다.",
          "동기화는 하나의 통신 회선을 여러 가입자가 동시에 이용할 수 있도록 하는 기능이다.",
          "다중화는 송수신 측이 같은 상태를 유지하도록 타이밍을 맞추는 기능이다.",
        ],
        answer:
          "흐름 제어는 수신 측에서 데이터가 흘러 넘치지 않도록 수신 측의 처리 능력에 따라 송신 측에서 송신 데이터의 양을 조절하는 기능이다.",
        type: "select",
        chaptersId: "clia87lmt0000zn1l76ff8k4a",
      },
      {
        question: "ISO라는 국제표준화기구가 ___을(를) 제정했다. ",
        options: ["DNS 모델", "서브넷 모델", "ISP 모델", "패킷 모델"],
        answer: "OSI 모델",
        type: "select",
        chaptersId: "clia87lmt0000zn1l76ff8k4a",
      },
      {
        question:
          "TCP/IP 모델의 4계층에는 ___계층, ___계층, ___계층, ___계층이 있다.",
        options: [
          "물리, 데이터 링크, 네트워크, 전송",
          "데이터 링크, 네트워크, 전송, 세션",
          "네트워크, 전송 세션, 표현",
          "전송, 세션, 표현, 응용",
          "네트워크 접속, 데이터 링크, 전송, 응용",
          "네트워크 접속, 인터넷, 표현, 응용",
          "물리, 인터넷, 표현, 응용",
        ],
        answer: "네트워크 접속, 인터넷, 전송, 응용",
        type: "select",
        chaptersId: "clia87lmt0000zn1l76ff8k4a",
      },
      {
        question:
          "데이터를 상대방에게 보낼 떄 각 층에서 헤더를 붙이는 것을 ___(이)라고 한다. ",
        options: ["역캡슐화", "노멀라이즈", "온프레미스", "캐싱", "디텍팅"],
        answer: "캡슐화",
        type: "select",
        chaptersId: "clia87lmt0000zn1l76ff8k4a",
      },
      {
        question: "전기신호는 ___신호와 ___신호가 있다. ",
        options: ["랜, 왠", "0, 1", "비트, 바이트", "엑티브, 패시브"],
        answer: "아날로그, 디지털",
        type: "select",
        chaptersId: "clia87lmt0002zn1l7t4o3rjp",
      },
      {
        question:
          "___ 케이블은 실드로 보호되어 있지 않아 노이즈의 영향을 쉽게 받는다.",
        options: ["STP", "ATP", "KTP", "NTP", "OTP"],
        answer: "UTP",
        type: "select",
        chaptersId: "clia87lmt0002zn1l7t4o3rjp",
      },
      {
        question:
          "___ 케이블은 실드로 보호되어 있어 노이즈의 영향을 매우 적게 받는다.",
        options: ["CTP", "TTP", "UPT", "QTP", "XTP"],
        answer: "STP",
        type: "select",
        chaptersId: "clia87lmt0002zn1l7t4o3rjp",
      },
      {
        question: "랜 케이블의 양쪽 끝에는 ___ 커넥터가 붙어있다.",
        options: ["RJ-30", "AM-21", "DF-45", "AM-45"],
        answer: "RJ-45",
        type: "select",
        chaptersId: "clia87lmt0002zn1l7t4o3rjp",
      },
      {
        question: "랜 케이블에는 다이렉트 케이블과 ___ 케이블이 있다.",
        options: ["액티브", "패시브", "인터렉티브", "스마트", "더미"],
        answer: "크로스",
        type: "select",
        chaptersId: "clia87lmt0002zn1l7t4o3rjp",
      },
      {
        question:
          "랜 케이블은 구리 선 여덟 개로 구성되지만, 실제로 사용하는 것은 ___개이다. ",
        options: ["1", "2", "3", "5", "6", "7"],
        answer: "4",
        type: "select",
        chaptersId: "clia87lmt0002zn1l7t4o3rjp",
      },
      {
        question: "컴퓨터끼리 연결한다면 ___ 케이블을 사용한다.",
        options: ["다이렉트", "동적", "정적", "스마트", "더미"],
        answer: "크로스",
        type: "select",
        chaptersId: "clia87lmt0002zn1l7t4o3rjp",
      },
      {
        question: "___은(는) 네트워크를 연장하기 위한 장비이다. ",
        options: ["스위치", "온프레미스", "클라우드", "랙"],
        answer: "리피터",
        type: "select",
        chaptersId: "clia87lmt0002zn1l7t4o3rjp",
      },
      {
        question: "허브는 수신한 데이터를 모든 ___(으)로 전송한다.",
        options: ["패킷", "스위치", "라우터", "ISP"],
        answer: "포트",
        type: "select",
        chaptersId: "clia87lmt0002zn1l7t4o3rjp",
      },
      {
        question: "허브는 일반적으로 ___(이)라고 부른다.",
        options: ["스마트 허브", "라우팅 허브", "액티브 허브", "패시브 허브"],
        answer: "더미 허브",
        type: "select",
        chaptersId: "clia87lmt0002zn1l7t4o3rjp",
      },
      {
        question:
          "___ 허브는 정보전송을  해당되는  mac address의 포트로만 데이터를 전송하는 방식을 사용하는 허브이다.",
        options: ["더미 허브", "라우팅 허브", "액티브 허브", "패시브 허브"],
        answer: "스위칭",
        type: "select",
        chaptersId: "clia87lmt0002zn1l7t4o3rjp",
      },
    ],
  });
  return NextResponse.json(createResult);
}
