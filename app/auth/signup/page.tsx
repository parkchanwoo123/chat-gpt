"use client";
import { supabase } from "@/lib/supabase";
export default function Signup(){async function submit(fd:FormData){await supabase.auth.signUp({email:String(fd.get("email")),password:String(fd.get("password"))});}
return <main className="container hero"><form action={submit} className="card grid"><h1>관리자 회원가입</h1><input className="input" name="email"/><input className="input" type="password" name="password"/><button className="btn btn-primary">가입하기</button></form></main>}
