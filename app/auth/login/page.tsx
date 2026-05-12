"use client";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Login(){
  const [message, setMessage] = useState("");
  async function submit(formData: FormData){
    const email=String(formData.get("email")||""); const password=String(formData.get("password")||"");
    const {error}=await supabase.auth.signInWithPassword({email,password});
    setMessage(error?error.message:"로그인 성공");
  }
  return <main className="container hero"><form action={submit} className="card grid"><h1>관리자 로그인</h1><input className="input" name="email"/><input className="input" type="password" name="password"/><button className="btn btn-primary">로그인</button><Link href="/auth/forgot-password">비밀번호 찾기</Link><p>{message}</p></form></main>
}
