export default function KpiCards(){
  const items=[
    {label:"신규 리드",value:"42",delta:"+18%"},
    {label:"전환율",value:"31%",delta:"+4.1%"},
    {label:"활성 프로젝트",value:"12",delta:"+2"},
    {label:"월 매출 추정",value:"₩28.4M",delta:"+11%"}
  ];
  return <section className="kpi">{items.map(i=><div className="card" key={i.label}><p className="muted">{i.label}</p><h3>{i.value}</h3><small>{i.delta}</small></div>)}</section>
}
