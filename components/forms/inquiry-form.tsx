"use client";
import { FormEvent, useState } from "react";
import { createInquiry } from "@/services/inquiry-service";

export default function InquiryForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      projectType: String(fd.get("projectType") || ""),
      budget: String(fd.get("budget") || ""),
      details: String(fd.get("details") || "")
    };
    if (!payload.name || !payload.email || !payload.details) return setMsg("필수 항목을 입력해주세요.");
    setLoading(true);
    const { error } = await createInquiry(payload);
    setLoading(false);
    setMsg(error ? "문의 등록 실패. 잠시 후 다시 시도해주세요." : "문의가 성공적으로 등록되었습니다.");
    if (!error) e.currentTarget.reset();
  }

  return <form className="card grid" onSubmit={onSubmit}>
    <h3>프로젝트 문의</h3>
    <input className="input" name="name" placeholder="이름" />
    <input className="input" type="email" name="email" placeholder="이메일" />
    <input className="input" name="phone" placeholder="연락처" />
    <input className="input" name="projectType" placeholder="프로젝트 유형" />
    <select name="budget"><option>예산 선택</option><option>500만원 이하</option><option>500-1500만원</option><option>1500만원+</option></select>
    <textarea rows={4} name="details" placeholder="프로젝트 상세 내용" />
    <button className="btn btn-primary" disabled={loading}>{loading ? "전송 중..." : "문의 보내기"}</button>
    {msg && <p className="muted">{msg}</p>}
  </form>;
}
