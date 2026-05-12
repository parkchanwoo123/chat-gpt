export type InquiryStatus = "신규 문의" | "상담 진행중" | "견적 전달" | "계약 완료" | "작업 진행중" | "유지보수";
export interface InquiryForm { name:string; email:string; phone:string; projectType:string; budget:string; details:string; }
