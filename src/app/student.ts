
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  pic: string;
  skill: string;
  city: string;
  company: string;
  grades: number[];
  tags?: string[];
  expanded?: boolean;
}
