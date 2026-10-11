export const profile = {
  name: "Houze Xu",
  avatar: "/avatar.png",
  cover: "/background.png",
  github: "https://github.com/fduTristin",
  email: "hzxu26@m.fudan.edu.cn",
  location: "Shanghai, China",
  school: "Fudan University",
  about:
    "I'm a first-year Ph.D. student in [FVL](https://fvl.fudan.edu.cn/), College of Computer Science, Fudan University, under the supervision of [Zuxuan Wu](https://zxwu.azurewebsites.net/) and [Ziyi Ye](https://zxwu.azurewebsites.net/).",
  education: [
    {
      period: "2026.09 — Present",
      detail: "Fudan University, PhD in Computer Science",
    },
    {
      period: "2022.09 — 2026.06",
      detail: "Fudan University, Bachelor of Science in Computer Science",
    },
  ],
  research:
    "My current research focuses on Embodied AI, especially long-horizon planning.",
  publications: [
    {
      id: "openvitac",
      title:
        "OpenViTac: Learning and Benchmarking Visuo-Tactile Policies in a Unified Sim-and-Real Framework",
      authors: [
        "Yifan Wu",
        "Qin Li",
        "Nan Min",
        "Guojin Zhong",
        "Haoyu Zhao",
        "Zhiyuan Li",
        "Houze Xu",
        "Shengqi Xu",
        "Xingyao Lin",
        "Zijie Diao",
        "Zhaoxiang Liu",
        "Shiguo Lian",
        "Shunlin Lu",
        "Shihao Zhao",
        "Ziyi Ye",
        "Zuxuan Wu",
        "Yu-Gang Jiang",
      ],
      image: "/publications/openvitac-teaser.webp",
      imageWidth: 2000,
      imageHeight: 1446,
      imageAlt: "Overview of the OpenViTac visuo-tactile benchmark and OpenVTLA framework",
      venue: "arXiv preprint, 2026",
      venueShort: "arXiv",
      year: 2026,
      paperUrl: "https://arxiv.org/pdf/2610.10384v1",
      githubUrl: "https://github.com/FVL-Repo/OpenViTac",
    },
  ],
  teaching: [
    {
      role: "Operating Systems (Honors Track)",
      subtitle: "Teaching Assistant",
      terms: [
        {
          when: "Fall 2025",
          bullets: [
            'Developed and maintained the [course website](https://osh2025.fducslg.com/).',
            "Responsible for designing and managing **Lab 0 (Booting)** and **Lab 1 (Physical Memory Allocator)**.",
          ],
        },
      ],
    },
    {
      role: "Introduction to Computer System",
      subtitle: "Teaching Assistant",
      terms: [
        {
          when: "Fall 2025",
          bullets: [
            "Developed and maintained the [course website](https://ics-25fall-fdu.github.io/).",
            "Responsible for designing and managing the **GitLab** and the **Y86-64 Simulator** project.",
          ],
        },
        {
          when: "Fall 2024",
          bullets: [
            "Responsible for designing and managing the **GitLab** and the **CacheLab**.",
            "Course repository: [FDUCSLG/ICS-24Fall-FDU](https://github.com/FDUCSLG/ICS-24Fall-FDU)",
          ],
        },
      ],
    },
  ],
  copyright: "© 2026 Houze Xu. All rights reserved.",
};
