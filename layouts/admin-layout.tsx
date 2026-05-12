import Link from "next/link";
import { ReactNode } from "react";

const links = ["dashboard","customers","inquiries","projects","analytics","notifications","settings"];

export default function AdminLayout({children}:{children:ReactNode}){
  return <div>
    <aside className="sidebar">
      <h3>Antigravity Admin</h3>
      <nav className="grid" style={{marginTop:"1rem"}}>
        {links.map((v)=><Link key={v} href={v==="dashboard"?"/admin":`/admin/${v}`}>{v}</Link>)}
      </nav>
    </aside>
    <main className="main">{children}</main>
  </div>;
}
