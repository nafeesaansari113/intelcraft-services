
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  detailContent?: DetailSection[];
  outcomes?: Outcome[];
}

export interface DetailSection {
  title: string;
  subtitle?: string;
  challenge?: string;
  solution?: string;
  approach?: string;
  results?: string[];
  points?: string[];
  codeSnippet?: string;
  codeLanguage?: string;
  isTechnical?: boolean;
}

export interface Outcome {
  label: string;
  value: string;
  icon: string;
}
