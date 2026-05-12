import InquiryForm from "@/components/forms/inquiry-form";

export default function HomePage() {
  return (
    <main>
      <section className="hero container">
        <p className="muted">AI Agent & SNS Marketing Portfolio</p>
        <h1>Antigravity AI — Premium Operational Semi-SaaS</h1>
        <p className="muted">기존 프리미엄 포트폴리오 감성을 유지한 채 실제 운영 가능한 CRM 플랫폼으로 업그레이드되었습니다.</p>
      </section>
      <section className="container" style={{paddingBottom:"4rem"}}>
        <div className="grid" style={{gridTemplateColumns:"1.1fr .9fr"}}>
          <div className="card"><h3>핵심 기능</h3><ul><li>실시간 문의 수집 및 DB 저장</li><li>관리자 인증/보호 라우트</li><li>CRM 고객/프로젝트 관리</li><li>분석 대시보드 및 알림</li></ul></div>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
