# Antigravity AI Semi-SaaS CRM Platform

기존 포트폴리오 감성을 유지하면서 실제 운영 가능한 한국형 Semi-SaaS CRM으로 확장한 Next.js + Supabase 프로젝트입니다.

## 주요 기능
- 실운영 문의 폼 (Supabase 저장)
- Supabase Auth 기반 관리자 인증
- 관리자 대시보드/CRM/프로젝트/분석/알림 모듈
- 운영용 DB 스키마 및 마이그레이션 포함
- Vercel + Supabase 배포 준비(SEO, robots, sitemap)

## 로컬 실행
1. `cp .env.example .env.local`
2. Supabase URL/Anon Key 입력
3. `npm install`
4. `npm run dev`

## Supabase 설정
1. Supabase 프로젝트 생성
2. `supabase/migrations/001_init.sql` 실행
3. Auth Email provider 활성화
4. 필요 시 RLS 정책 추가

## 배포 가이드
### Vercel
- Git 저장소 연결
- Environment Variables 설정
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Build command: `npm run build`

### 관리자 세팅
- `/auth/signup`에서 관리자 가입
- 로그인 후 `/admin` 접근
- 문의→고객→프로젝트 전환 워크플로우 운영
