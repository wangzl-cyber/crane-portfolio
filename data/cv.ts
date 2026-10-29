// ============================================================
// CV 数据
// 内容在 data/cv.json 中维护，也可以登录 /admin/ 后台修改。
// ============================================================

import cvData from "./cv.json";

export type CvEntry = {
  period: string;
  title: string;
  detail?: string;
};

type CvData = {
  education: CvEntry[];
  exhibitions: CvEntry[];
  awards: CvEntry[];
  residencies: CvEntry[];
  skills: string[];
};

export const cv = cvData as unknown as CvData;
