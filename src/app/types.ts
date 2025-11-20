// app/page.tsx

export type Skill = {
    domain: string;
    items: string[];
};

export type SkillResponse = {
    skills: Skill[];
};


// app/components/cora.tsx

export  type Chat = {
    userId: string;
    text: string;
};

export  type CoraRequest = {
    prompt: string;
}

export  type CoraResponse = {
      reply: string;
  }