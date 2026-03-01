import { propChain } from "./projects/propchain";
import { settleMate } from "./projects/settlemate";
import { quickWebAi } from "./projects/quickweb-ai";
import { taskify } from "./projects/taskify";
import { disasterManagementPlatform } from "./projects/disaster-management-platform";
import { ghumoFiro } from "./projects/ghumofiro";

export type ProjectStatus = "stable" | "warning" | "issues" | "update";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: {
    story: string[];
    howItWorks: string[];
    vision: string[];
  };
  images: string[];
  videoId: string;
  tags: string[];
  github: string;
  demo: string;
  conclusion: string[];
  status?: ProjectStatus;
  statusMessage?: string;
}

export const projects: Project[] = [
  ghumoFiro,
  propChain,
  settleMate,
  quickWebAi,
  taskify,
  disasterManagementPlatform,
];
