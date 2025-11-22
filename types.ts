export enum ServiceType {
  GRAPHIC_DESIGN = 'Graphic Design',
  VISUAL_IDENTITY = 'Visual Identity',
  PHOTOGRAPHY = 'Photography & Production',
  MARKETING = 'Digital Marketing'
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface AIAnalysisResult {
  projectName: string;
  slogan: string;
  summary: string;
  recommendedServices: string[];
  estimatedBudgetSplit: { name: string; value: number }[];
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}