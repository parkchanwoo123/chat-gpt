import { supabase } from "@/lib/supabase";
import { InquiryForm } from "@/types";

export async function createInquiry(data: InquiryForm) {
  return supabase.from("inquiries").insert({
    name: data.name,
    email: data.email,
    phone: data.phone,
    project_type: data.projectType,
    budget: data.budget,
    project_details: data.details,
    status: "신규 문의"
  });
}
