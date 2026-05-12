import KpiCards from "@/components/admin/kpi-cards";

export default function AdminPage(){return <div className="grid"><h1>Dashboard</h1><KpiCards/><div className="card"><h3>최근 활동</h3><p className="muted">새 문의 3건 · 상태 변경 5건 · 프로젝트 업데이트 2건</p></div></div>}
