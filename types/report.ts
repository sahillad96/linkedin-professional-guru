export type CareerInput = {
  name: string;
  professionalInfo: string;
  targetRole: string;
  targetCompany?: string;
  careerGoal: string;
  resumeText?: string;
  jobDescription?: string;
};

export type CareerReport = {
  status: "SUCCESS";
  report_version: string;
  candidate: { name: string };
  career_assessment: {
    overall_score: number;
    ats_score: number;
    experience_score: number;
    recruiter_visibility_score: number;
    hiring_readiness_score: number;
    role_match_score: number;
    transition_readiness_score: number;
    confidence: number;
    readiness_level: string;
    transition_status: string;
  };
  executive_summary: {
    profile_maturity: string;
    summary: string;
    top_strengths: string[];
    top_risks: string[];
    top_opportunity: string;
  };
  linkedin_analysis: {
    headline: string;
    about: string;
    experience: string;
    skills: string;
    projects: string[];
  };
  ats_analysis: {
    matched_keywords: string[];
    missing_keywords: string[];
    priority_improvements: string[];
  };
  target_role_analysis: {
    role: string;
    why_it_fits: string;
    direct_experience: string[];
    transferable_experience: string[];
    project_evidence: string[];
    learning_evidence: string[];
    biggest_gap: string;
    quick_win: string;
    required_skills: string[];
    recommended_projects: string[];
  };
  company_fit_analysis: {
    company: string;
    match_score: number;
    hiring_readiness: string;
    biggest_gap: string;
    recommended_action: string;
  } | null;
  career_transition_analysis: {
    current_advantages: string[];
    primary_gaps: string[];
    top_steps: string[];
    current_position: string;
    target_goal: string;
    estimated_timeline: string;
  };
  recruiter_verdict: {
    shortlist_decision: string;
    interview_probability: string;
    most_valuable_strength: string;
    primary_concern: string;
    highest_impact_change: string;
  };
  action_plan_30_days: {
    week_1: string[];
    week_2: string[];
    week_3: string[];
    week_4: string[];
  };
  next_steps: string[];
  metadata: {
    source: string;
    model: string;
    validation_status: string;
    validated: boolean;
  };
};