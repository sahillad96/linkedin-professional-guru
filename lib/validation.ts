import { z } from "zod";

const limited = (max: number) => z.string().trim().max(max);

export const careerInputSchema = z.object({
  name: limited(120).min(2),
  professionalInfo: limited(20000).min(100),
  targetRole: limited(200).min(2),
  targetCompany: limited(200).optional().default(""),
  careerGoal: limited(4000).min(10),
  resumeText: limited(30000).optional().default(""),
  jobDescription: limited(20000).optional().default("")
});

const score = z.number().int().min(0).max(100);
const list = z.array(z.string()).max(20);

export const careerReportSchema = z.object({
  status: z.literal("SUCCESS"),
  report_version: z.string(),
  candidate: z.object({ name: z.string() }),
  career_assessment: z.object({
    overall_score: score,
    ats_score: score,
    experience_score: score,
    recruiter_visibility_score: score,
    hiring_readiness_score: score,
    role_match_score: score,
    transition_readiness_score: score,
    confidence: z.number().min(0).max(1),
    readiness_level: z.string(),
    transition_status: z.string()
  }),
  executive_summary: z.object({
    profile_maturity: z.string(),
    summary: z.string(),
    top_strengths: list,
    top_risks: list,
    top_opportunity: z.string()
  }),
  linkedin_analysis: z.object({
    headline: z.string(),
    about: z.string(),
    experience: z.string(),
    skills: z.string(),
    projects: list
  }),
  ats_analysis: z.object({
    matched_keywords: list,
    missing_keywords: list,
    priority_improvements: list
  }),
  target_role_analysis: z.object({
    role: z.string(),
    why_it_fits: z.string(),
    direct_experience: list,
    transferable_experience: list,
    project_evidence: list,
    learning_evidence: list,
    biggest_gap: z.string(),
    quick_win: z.string(),
    required_skills: list.max(5),
    recommended_projects: list.max(2)
  }),
  company_fit_analysis: z.object({
    company: z.string(),
    match_score: score,
    hiring_readiness: z.string(),
    biggest_gap: z.string(),
    recommended_action: z.string()
  }).nullable(),
  career_transition_analysis: z.object({
    current_advantages: list,
    primary_gaps: list,
    top_steps: list,
    current_position: z.string(),
    target_goal: z.string(),
    estimated_timeline: z.string()
  }),
  recruiter_verdict: z.object({
    shortlist_decision: z.enum(["YES", "MAYBE", "NO"]),
    interview_probability: z.enum(["Low", "Medium", "High"]),
    most_valuable_strength: z.string(),
    primary_concern: z.string(),
    highest_impact_change: z.string()
  }),
  action_plan_30_days: z.object({
    week_1: list.max(2),
    week_2: list.max(2),
    week_3: list.max(2),
    week_4: list.max(2)
  }),
  next_steps: list.max(10),
  metadata: z.object({
    source: z.string(),
    model: z.string(),
    validation_status: z.string(),
    validated: z.literal(true)
  })
});

export type CareerReportValidated = z.infer<typeof careerReportSchema>;