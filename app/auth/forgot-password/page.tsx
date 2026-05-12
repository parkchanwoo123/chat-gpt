"use client";
import { supabase } from "@/lib/supabase";
export default function Forgot(){async function submit(fd:FormData){await supabase.auth.resetPasswordForEmail(String(fd.get("email")));}
return <main className="container hero"><form action={submit} className="card grid"><h1>비밀번호 재설정</h1><input className="input" name="email"/><button className="btn btn-primary">재설정 메일 발송</button></form></main>}
