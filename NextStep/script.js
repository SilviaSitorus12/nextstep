// Core data for careers, plans, prompts, and milestones.
const careers = [
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    badge: "Creative and research-focused",
    description:
      "UI/UX Designers create digital experiences that are useful, clear, and enjoyable for users.",
    skills: [
      "Design Thinking",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing"
    ],
    tools: ["Figma", "FigJam", "Notion", "Maze"],
    project:
      "Design a student planner app with wireframes, prototype screens, and a short case study.",
    roadmap: [
      "Learn Design Thinking",
      "Practice User Research",
      "Create Wireframes",
      "Build Figma Prototype",
      "Conduct Usability Testing",
      "Create Portfolio Case Study"
    ],
    assessmentQuestion: "I enjoy designing user interfaces.",
    recommendationMessage:
      "Your answers suggest that visual thinking, user empathy, and interface design may be a strong fit for you.",
    firstStep:
      "Start by learning Design Thinking and recreating one simple screen in Figma."
  },
  {
    id: "software-developer",
    title: "Software Developer",
    badge: "Builder and problem-solver",
    description:
      "Software Developers build websites, apps, and systems by turning ideas into working code.",
    skills: [
      "HTML, CSS, JavaScript",
      "Programming Logic",
      "APIs",
      "Version Control",
      "Debugging"
    ],
    tools: ["VS Code", "Git", "GitHub", "Postman"],
    project:
      "Build a student productivity dashboard with task tracking, notes, and a responsive interface.",
    roadmap: [
      "Learn HTML, CSS, and JavaScript fundamentals",
      "Practice solving small coding problems",
      "Build responsive web pages",
      "Learn Git and GitHub basics",
      "Work with APIs and dynamic data",
      "Deploy a portfolio-ready project"
    ],
    assessmentQuestion: "I enjoy solving coding problems.",
    recommendationMessage:
      "Your strongest score points toward building things with code and improving them through testing and iteration.",
    firstStep:
      "Begin with HTML, CSS, and JavaScript basics, then build one small responsive page."
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    badge: "Insight and storytelling with data",
    description:
      "Data Analysts collect, clean, and interpret data so teams can make smarter decisions.",
    skills: [
      "Spreadsheet Analysis",
      "SQL",
      "Data Cleaning",
      "Visualization",
      "Presentation Skills"
    ],
    tools: ["Excel", "Google Sheets", "SQL", "Tableau"],
    project:
      "Analyze student survey data and create a dashboard with insights and recommendations.",
    roadmap: [
      "Understand basic statistics and data types",
      "Practice cleaning data in spreadsheets",
      "Learn SQL for querying data",
      "Build charts and dashboards",
      "Interpret trends and write insights",
      "Publish a simple data portfolio report"
    ],
    assessmentQuestion: "I enjoy analyzing data.",
    recommendationMessage:
      "Your answers show a likely interest in spotting patterns, making sense of information, and explaining insights clearly.",
    firstStep:
      "Start with spreadsheet analysis and practice turning raw data into simple charts."
  },
  {
    id: "product-manager",
    title: "Product Manager",
    badge: "Strategy, coordination, and execution",
    description:
      "Product Managers guide products from idea to launch by balancing user needs, business goals, and teamwork.",
    skills: [
      "Problem Framing",
      "Communication",
      "Roadmapping",
      "Research",
      "Prioritization"
    ],
    tools: ["Notion", "Jira", "Trello", "Google Docs"],
    project:
      "Create a feature proposal for a campus app with user problem analysis, roadmap, and success metrics.",
    roadmap: [
      "Learn how products solve user problems",
      "Practice writing problem statements",
      "Study user interviews and competitor analysis",
      "Create a product requirements document",
      "Build a simple roadmap and priorities",
      "Present a feature proposal as a portfolio piece"
    ],
    assessmentQuestion: "I enjoy organizing teams and product ideas.",
    recommendationMessage:
      "Your results suggest you may enjoy connecting user problems, team coordination, and clear product direction.",
    firstStep:
      "Practice writing a simple product problem statement for an app or campus service you use."
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    badge: "Bridge between business and systems",
    description:
      "Business Analysts identify business needs, improve processes, and translate requirements into clearer solutions.",
    skills: [
      "Requirement Gathering",
      "Process Mapping",
      "Communication",
      "Documentation",
      "Analytical Thinking"
    ],
    tools: ["Lucidchart", "Miro", "Excel", "Google Docs"],
    project:
      "Map a manual campus process, identify pain points, and propose a digital improvement plan.",
    roadmap: [
      "Understand business processes and stakeholders",
      "Learn how to gather user requirements",
      "Practice writing clear documentation",
      "Create flowcharts and process maps",
      "Analyze gaps and propose solutions",
      "Turn your case into a portfolio presentation"
    ],
    assessmentQuestion: "I enjoy understanding business processes.",
    recommendationMessage:
      "Your strongest answer points toward understanding how systems and people work together to improve real workflows.",
    firstStep:
      "Pick one daily process around you and map each step before suggesting an improvement."
  }
];

const checklistData = [
  "Create CV",
  "Build Portfolio",
  "Update LinkedIn",
  "Upload GitHub Project",
  "Create Case Study",
  "Prepare Interview Story"
];

const assistantData = [
  {
    question: "I am an Information Systems student. What should I learn first?",
    answer:
      "Start with the foundations that are useful across many paths: communication, problem solving, spreadsheets, basic UI understanding, and beginner web or data skills. After that, try one small project so you can see which type of work feels most interesting."
  },
  {
    question: "How do I build my first portfolio?",
    answer:
      "Begin with one project that solves a real problem. Show the goal, your process, the tools you used, and what you learned. A simple portfolio with one strong case study is better than many unfinished ideas."
  },
  {
    question: "Which career path is suitable for beginners?",
    answer:
      "Software Developer, UI/UX Designer, and Data Analyst are all beginner-friendly if you start with small practice projects. Choose the one that feels most natural: building, designing, or analyzing information."
  },
  {
    question: "How should I prepare for an academy application?",
    answer:
      "Focus on the basics first: clean CV, clear motivation, one or two polished projects, and a short story about how you solve problems. Review the academy values, practice speaking about your work, and show steady learning progress."
  }
];

const opportunities = [
  {
    name: "Apple Developer Academy",
    category: "Academy",
    preparation: "Prepare motivation, teamwork stories, and one polished digital project.",
    deadline: "Deadline: Coming Soon"
  },
  {
    name: "UI/UX Competition",
    category: "Competition",
    preparation: "Practice case study storytelling, interface design, and presentation flow.",
    deadline: "Deadline: TBA"
  },
  {
    name: "Web Development Bootcamp",
    category: "Bootcamp",
    preparation: "Review HTML, CSS, JavaScript basics and complete a small responsive project.",
    deadline: "Deadline: Open Registration"
  },
  {
    name: "Internship Program",
    category: "Internship",
    preparation: "Strengthen your CV, portfolio, interview stories, and teamwork examples.",
    deadline: "Deadline: Rolling Intake"
  }
];

const semesterStages = [
  {
    id: "foundations",
    maxSemester: 2,
    focus: "Foundations",
    summary:
      "This is the best stage for core learning, experimenting often, and building confidence through repetition.",
    steps: [
      {
        title: "Learn fundamentals",
        detail:
          "Focus on the basics first so every future project feels easier to build and explain."
      },
      {
        title: "Build small projects",
        detail:
          "Use short projects to turn new concepts into something visible and easier to improve."
      }
    ]
  },
  {
    id: "portfolio-building",
    maxSemester: 4,
    focus: "Portfolio Building",
    summary:
      "You are ready to shape classroom learning into stronger public proof of skill and initiative.",
    steps: [
      {
        title: "Build portfolio",
        detail:
          "Turn class projects, case studies, or coding work into pieces that clearly show your thinking."
      },
      {
        title: "Join competitions",
        detail:
          "Use competitions to build teamwork experience, deadlines discipline, and stronger storytelling."
      },
      {
        title: "Learn GitHub",
        detail:
          "Document your work and make your progress easier for mentors, recruiters, and peers to see."
      }
    ]
  },
  {
    id: "internship-preparation",
    maxSemester: 8,
    focus: "Internship Preparation",
    summary:
      "This is a strong time to polish your story, make your profile visible, and prepare for applications.",
    steps: [
      {
        title: "Prepare CV",
        detail:
          "Rewrite your experience around skills, outcomes, and the roles you want to apply for next."
      },
      {
        title: "Apply internships",
        detail:
          "Create a weekly application routine and tailor your portfolio to the opportunities you choose."
      },
      {
        title: "Practice interviews",
        detail:
          "Prepare stories about projects, teamwork, and how you solve problems under pressure."
      }
    ]
  }
];

const badgeMilestones = [
  {
    threshold: 25,
    icon: "\uD83C\uDF31",
    title: "Beginner",
    description: "You have started turning plans into visible action."
  },
  {
    threshold: 50,
    icon: "\uD83D\uDE80",
    title: "Explorer",
    description: "You are building momentum and learning with intention."
  },
  {
    threshold: 75,
    icon: "\u2B50",
    title: "Builder",
    description: "Your portfolio preparation is becoming consistent and strong."
  },
  {
    threshold: 100,
    icon: "\uD83C\uDFC6",
    title: "Ready for Opportunities",
    description: "You completed the checklist and look ready for the next big step."
  }
];

const assistantWelcomeMessage = {
  sender: "assistant",
  text: "Hi! I'm your Guided Career Assistant. Pick a question and I'll respond with a saved guidance message."
};

const storageKeys = {
  theme: "nextStepTheme",
  profile: "nextStepProfile",
  assessment: "nextStepAssessment",
  favorites: "nextStepFavorites",
  checklist: "nextStepChecklist",
  legacyChecklist: "careerCompassChecklist",
  notes: "nextStepNotes",
  assistantHistory: "nextStepAssistantHistory"
};

// Cached DOM references keep the rest of the file easier to scan.
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeToggleLabel = document.getElementById("themeToggleLabel");
const profileForm = document.getElementById("profileForm");
const studentName = document.getElementById("studentName");
const studentMajor = document.getElementById("studentMajor");
const studentSemester = document.getElementById("studentSemester");
const dashboardStatus = document.getElementById("dashboardStatus");
const dashboardSummary = document.getElementById("dashboardSummary");
const actionPlanGrid = document.getElementById("actionPlanGrid");
const assessmentForm = document.getElementById("assessmentForm");
const assessmentQuestions = document.getElementById("assessmentQuestions");
const assessmentResult = document.getElementById("assessmentResult");
const careerSearch = document.getElementById("careerSearch");
const clearCareerSearch = document.getElementById("clearCareerSearch");
const careerSearchStatus = document.getElementById("careerSearchStatus");
const careerCardGrid = document.getElementById("careerCardGrid");
const favoriteCareerGrid = document.getElementById("favoriteCareerGrid");
const favoritesCount = document.getElementById("favoritesCount");
const explorerSection = document.getElementById("explorer");
const detailBadge = document.getElementById("detailBadge");
const detailTitle = document.getElementById("detailTitle");
const detailDescription = document.getElementById("detailDescription");
const detailSkills = document.getElementById("detailSkills");
const detailTools = document.getElementById("detailTools");
const detailProject = document.getElementById("detailProject");
const detailRoadmap = document.getElementById("detailRoadmap");
const checklistItems = document.getElementById("checklistItems");
const progressValue = document.getElementById("progressValue");
const progressBar = document.getElementById("progressBar");
const badgeGrid = document.getElementById("badgeGrid");
const notesForm = document.getElementById("notesForm");
const notesInput = document.getElementById("notesInput");
const notesStatus = document.getElementById("notesStatus");
const notesPreview = document.getElementById("notesPreview");
const assistantHistory = document.getElementById("assistantHistory");
const assistantQuestions = document.getElementById("assistantQuestions");
const clearAssistantHistory = document.getElementById("clearAssistantHistory");
const opportunityGrid = document.getElementById("opportunityGrid");

const state = {
  theme: loadThemePreference(),
  profile: loadProfileState(),
  assessment: loadAssessmentState(),
  favorites: loadFavoritesState(),
  checklist: loadChecklistState(),
  notes: loadNotesState(),
  assistantHistory: loadAssistantHistory(),
  searchQuery: "",
  selectedCareerId: careers[0].id
};

if (state.assessment?.recommendedCareerId) {
  state.selectedCareerId = state.assessment.recommendedCareerId;
}

// Shared helpers
function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn(`Storage read failed for ${key}.`, error);
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Storage write failed for ${key}.`, error);
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createEmptyStateMarkup(title, description) {
  return `
    <article class="empty-card">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(description)}</p>
    </article>
  `;
}

function clampSemester(value) {
  const semester = Number(value);

  if (!Number.isFinite(semester)) {
    return 2;
  }

  return Math.min(8, Math.max(1, Math.round(semester)));
}

function getCareerById(careerId) {
  return careers.find((career) => career.id === careerId);
}

function getSemesterStage(semesterValue) {
  const semester = clampSemester(semesterValue);

  return (
    semesterStages.find((stage) => semester <= stage.maxSemester) ||
    semesterStages[semesterStages.length - 1]
  );
}

function getProfileCompletion(profile) {
  const profileFields = [
    Boolean(profile.name.trim()),
    Boolean(profile.major.trim()),
    Boolean(profile.semester)
  ];

  const completedFields = profileFields.filter(Boolean).length;
  return Math.round((completedFields / profileFields.length) * 100);
}

function getSemesterProgress(semesterValue) {
  return Math.round((clampSemester(semesterValue) / 8) * 100);
}

function getChecklistProgress(checklistState = state.checklist) {
  const completedItems = checklistState.filter(Boolean).length;
  return Math.round((completedItems / checklistData.length) * 100);
}

function isFavorite(careerId) {
  return state.favorites.includes(careerId);
}

function getVisibleCareers() {
  const query = state.searchQuery.trim().toLowerCase();

  if (!query) {
    return careers;
  }

  return careers.filter((career) =>
    career.title.toLowerCase().includes(query)
  );
}

function ensureSelectedCareerIsVisible() {
  const visibleCareers = getVisibleCareers();

  if (visibleCareers.length === 0) {
    return;
  }

  const selectedCareerIsVisible = visibleCareers.some(
    (career) => career.id === state.selectedCareerId
  );

  if (!selectedCareerIsVisible) {
    state.selectedCareerId = visibleCareers[0].id;
  }
}

function setSelectedCareer(careerId) {
  const career = getCareerById(careerId);

  if (!career) {
    return;
  }

  state.selectedCareerId = career.id;
  renderCareerExplorer();
}

function goToCareerRoadmap(careerId) {
  state.searchQuery = "";
  careerSearch.value = "";
  state.selectedCareerId = careerId;
  renderCareerExplorer();

  explorerSection.scrollIntoView({ behavior: "smooth", block: "start" });

  window.setTimeout(() => {
    const selectedCard = careerCardGrid.querySelector(
      `[data-career-id="${careerId}"]`
    );

    if (selectedCard instanceof HTMLElement) {
      selectedCard.focus();
    }
  }, 240);
}

// State loading
function loadThemePreference() {
  const savedTheme = readStorage(storageKeys.theme);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  try {
    const parsedTheme = JSON.parse(savedTheme);

    if (parsedTheme === "dark" || parsedTheme === "light") {
      return parsedTheme;
    }
  } catch (error) {
    // Ignore invalid theme values and fall back to system preference.
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function loadProfileState() {
  const savedProfile = readStorage(storageKeys.profile);

  if (!savedProfile) {
    return {
      name: "",
      major: "",
      semester: 2
    };
  }

  try {
    const parsedProfile = JSON.parse(savedProfile);

    return {
      name:
        typeof parsedProfile?.name === "string" ? parsedProfile.name.trim() : "",
      major:
        typeof parsedProfile?.major === "string"
          ? parsedProfile.major.trim()
          : "",
      semester: clampSemester(parsedProfile?.semester)
    };
  } catch (error) {
    console.warn("Profile could not be loaded.", error);
    return {
      name: "",
      major: "",
      semester: 2
    };
  }
}

function loadAssessmentState() {
  const savedAssessment = readStorage(storageKeys.assessment);

  if (!savedAssessment) {
    return null;
  }

  try {
    const parsedAssessment = JSON.parse(savedAssessment);
    const scores = parsedAssessment?.scores;
    const recommendedCareerId = parsedAssessment?.recommendedCareerId;
    const highestScore = Number(parsedAssessment?.highestScore);

    const hasValidScores = careers.every((career) => {
      const score = Number(scores?.[career.id]);
      return score >= 1 && score <= 5;
    });

    if (
      !hasValidScores ||
      !getCareerById(recommendedCareerId) ||
      highestScore < 1 ||
      highestScore > 5
    ) {
      return null;
    }

    return {
      scores,
      recommendedCareerId,
      highestScore
    };
  } catch (error) {
    console.warn("Assessment result could not be loaded.", error);
    return null;
  }
}

function loadFavoritesState() {
  const savedFavorites = readStorage(storageKeys.favorites);

  if (!savedFavorites) {
    return [];
  }

  try {
    const parsedFavorites = JSON.parse(savedFavorites);

    if (!Array.isArray(parsedFavorites)) {
      return [];
    }

    return parsedFavorites.filter((careerId) => Boolean(getCareerById(careerId)));
  } catch (error) {
    console.warn("Favorite careers could not be loaded.", error);
    return [];
  }
}

function loadChecklistState() {
  const savedChecklist = readStorage(storageKeys.checklist);
  const legacyChecklist = readStorage(storageKeys.legacyChecklist);
  const checklistSource = savedChecklist || legacyChecklist;

  if (!checklistSource) {
    return checklistData.map(() => false);
  }

  try {
    const parsedChecklist = JSON.parse(checklistSource);

    if (
      Array.isArray(parsedChecklist) &&
      parsedChecklist.length === checklistData.length
    ) {
      if (!savedChecklist && legacyChecklist) {
        writeStorage(storageKeys.checklist, parsedChecklist);
      }

      return parsedChecklist;
    }
  } catch (error) {
    console.warn("Checklist progress could not be loaded.", error);
  }

  return checklistData.map(() => false);
}

function loadNotesState() {
  const savedNotes = readStorage(storageKeys.notes);

  if (!savedNotes) {
    return "";
  }

  try {
    const parsedNotes = JSON.parse(savedNotes);
    return typeof parsedNotes === "string" ? parsedNotes : "";
  } catch (error) {
    console.warn("Notes could not be loaded.", error);
    return "";
  }
}

function loadAssistantHistory() {
  const savedHistory = readStorage(storageKeys.assistantHistory);

  if (!savedHistory) {
    return [];
  }

  try {
    const parsedHistory = JSON.parse(savedHistory);

    if (!Array.isArray(parsedHistory)) {
      return [];
    }

    return parsedHistory.filter((message) => {
      return (
        (message?.sender === "user" || message?.sender === "assistant") &&
        typeof message?.text === "string" &&
        message.text.trim()
      );
    });
  } catch (error) {
    console.warn("Assistant history could not be loaded.", error);
    return [];
  }
}

// Theme handling
function applyTheme(theme) {
  state.theme = theme;
  root.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Activate light mode" : "Activate dark mode"
  );
  themeToggleLabel.textContent = theme === "dark" ? "Dark Mode" : "Light Mode";
}

function toggleTheme() {
  const nextTheme = state.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  writeStorage(storageKeys.theme, nextTheme);
}

// Dashboard rendering
function populateProfileForm() {
  studentName.value = state.profile.name;
  studentMajor.value = state.profile.major;
  studentSemester.value = String(state.profile.semester);
}

function renderDashboardSummary() {
  const stage = getSemesterStage(state.profile.semester);
  const greetingName = state.profile.name.trim() || "there";
  const profileProgress = getProfileCompletion(state.profile);
  const semesterProgress = getSemesterProgress(state.profile.semester);
  const checklistProgress = getChecklistProgress();
  const assessmentCareer = state.assessment
    ? getCareerById(state.assessment.recommendedCareerId)?.title
    : "Complete the assessment";

  dashboardSummary.innerHTML = `
    <p class="panel-label">Your dashboard</p>
    <div class="dashboard-headline">
      <h3>Hi ${escapeHtml(greetingName)}, welcome back.</h3>
      <p>
        Here is a quick view of your current study stage, your saved progress,
        and the focus that makes the most sense right now.
      </p>
    </div>

    <div class="dashboard-info-grid">
      <article class="info-card">
        <span class="info-label">Major</span>
        <p class="info-value">${escapeHtml(
          state.profile.major || "Add your major"
        )}</p>
      </article>
      <article class="info-card">
        <span class="info-label">Semester</span>
        <p class="info-value">Semester ${state.profile.semester}</p>
      </article>
      <article class="info-card">
        <span class="info-label">Recommended Focus</span>
        <p class="info-value">${stage.focus}</p>
      </article>
    </div>

    <div class="dashboard-metrics">
      <article class="metric-card">
        <span class="metric-label">Profile Completion</span>
        <div class="metric-ring" style="--progress: ${profileProgress};">
          <span>${profileProgress}%</span>
        </div>
        <p>Fill in your profile so the planner can stay more personal.</p>
      </article>

      <article class="metric-card">
        <span class="metric-label">Semester Journey</span>
        <div class="metric-ring" style="--progress: ${semesterProgress};">
          <span>Sem ${state.profile.semester}</span>
        </div>
        <p>Your current semester helps shape what the planner prioritizes.</p>
      </article>

      <article class="metric-card">
        <span class="metric-label">Readiness Snapshot</span>
        <p class="metric-value">${checklistProgress}% checklist progress</p>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-bar" style="width: ${checklistProgress}%;"></div>
        </div>
        <p>Career signal: ${escapeHtml(assessmentCareer)}</p>
      </article>
    </div>

    <div class="focus-spotlight">
      <span class="focus-chip">${stage.focus}</span>
      <p class="focus-description">${stage.summary}</p>
    </div>
  `;
}

function renderActionPlan() {
  const stage = getSemesterStage(state.profile.semester);
  const introCard = `
    <article class="timeline-card card">
      <span class="timeline-step">0</span>
      <h3>Focus for Semester ${state.profile.semester}</h3>
      <p>
        ${escapeHtml(stage.focus)} is your recommended focus right now. Use the
        steps below as a practical weekly plan.
      </p>
    </article>
  `;

  const stepCards = stage.steps
    .map(
      (step, index) => `
        <article class="timeline-card card">
          <span class="timeline-step">${index + 1}</span>
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.detail)}</p>
        </article>
      `
    )
    .join("");

  actionPlanGrid.innerHTML = introCard + stepCards;
}

// Assessment rendering
function renderAssessmentQuestions() {
  assessmentQuestions.innerHTML = careers
    .map(
      (career, index) => `
        <div class="assessment-question">
          <div class="assessment-question-header">
            <h4>
              <label for="score-${career.id}">
                ${index + 1}. ${career.assessmentQuestion}
              </label>
            </h4>
            <span class="question-count">Question ${index + 1}</span>
          </div>
          <div class="score-row">
            <label for="score-${career.id}">Choose a score</label>
            <select
              id="score-${career.id}"
              class="score-select"
              name="${career.id}"
              required
            >
              <option value="">Choose 1 to 5</option>
              <option value="1">1 - Not really</option>
              <option value="2">2 - A little</option>
              <option value="3">3 - Somewhat</option>
              <option value="4">4 - Quite a lot</option>
              <option value="5">5 - Very much</option>
            </select>
          </div>
        </div>
      `
    )
    .join("");
}

function populateAssessmentForm() {
  if (!state.assessment) {
    return;
  }

  careers.forEach((career) => {
    const scoreSelect = document.getElementById(`score-${career.id}`);

    if (scoreSelect instanceof HTMLSelectElement) {
      scoreSelect.value = String(state.assessment.scores[career.id]);
    }
  });
}

function getAssessmentScores() {
  return careers.reduce((scores, career) => {
    const scoreSelect = document.getElementById(`score-${career.id}`);
    scores[career.id] =
      scoreSelect instanceof HTMLSelectElement ? Number(scoreSelect.value) : 0;
    return scores;
  }, {});
}

function calculateRecommendation(scores) {
  let highestScore = 0;
  let recommendedCareer = careers[0];

  // Ties resolve in the same order as the career list to keep results predictable.
  careers.forEach((career) => {
    const score = Number(scores[career.id]);

    if (score > highestScore) {
      highestScore = score;
      recommendedCareer = career;
    }
  });

  return {
    scores,
    recommendedCareerId: recommendedCareer.id,
    highestScore
  };
}

function renderAssessmentPlaceholder() {
  assessmentResult.innerHTML = `
    <p class="panel-label">Assessment Result</p>
    <h3>Complete the assessment to receive your career recommendation.</h3>
    <p>
      Your recommended path, explanation, and suggested first step will appear
      here after you submit the assessment.
    </p>
  `;
}

function renderAssessmentResult() {
  if (!state.assessment) {
    renderAssessmentPlaceholder();
    return;
  }

  const career = getCareerById(state.assessment.recommendedCareerId);

  if (!career) {
    renderAssessmentPlaceholder();
    return;
  }

  assessmentResult.innerHTML = `
    <p class="panel-label">Assessment Result</p>
    <span class="result-highlight">Top score: ${state.assessment.highestScore}/5</span>
    <h3>${career.title}</h3>
    <p class="assessment-result-summary">
      This recommendation is saved in your browser and ready to connect with the
      roadmap below.
    </p>

    <div class="result-stack">
      <div class="result-block">
        <span class="result-label">Recommended Career</span>
        <p class="result-value">${career.title}</p>
      </div>
      <div class="result-block">
        <span class="result-label">Short Explanation</span>
        <p>${career.recommendationMessage}</p>
      </div>
      <div class="result-block">
        <span class="result-label">Suggested First Step</span>
        <p>${career.firstStep}</p>
      </div>
    </div>

    <button
      class="secondary-button"
      type="button"
      data-roadmap-career="${career.id}"
    >
      View Roadmap
    </button>
  `;
}

// Career explorer and favorites
function renderCareerDetailPlaceholder(message, helperText) {
  detailBadge.textContent = "Career details";
  detailTitle.textContent = "No career selected";
  detailDescription.textContent = message;
  detailSkills.innerHTML = "";
  detailTools.innerHTML = "";
  detailProject.textContent = helperText;
  detailRoadmap.innerHTML = "";
}

function renderCareerDetail(careerId) {
  const career = getCareerById(careerId);

  if (!career) {
    renderCareerDetailPlaceholder(
      "No matching career is visible right now.",
      "Try clearing the search or selecting another card."
    );
    return;
  }

  detailBadge.textContent = career.badge;
  detailTitle.textContent = career.title;
  detailDescription.textContent = career.description;
  detailSkills.innerHTML = career.skills.map((skill) => `<li>${skill}</li>`).join("");
  detailTools.innerHTML = career.tools.map((tool) => `<li>${tool}</li>`).join("");
  detailProject.textContent = career.project;
  detailRoadmap.innerHTML = career.roadmap.map((step) => `<li>${step}</li>`).join("");
}

function renderCareerExplorer() {
  const visibleCareers = getVisibleCareers();
  ensureSelectedCareerIsVisible();

  careerSearchStatus.textContent = `${visibleCareers.length} careers shown`;

  if (visibleCareers.length === 0) {
    careerCardGrid.innerHTML = `
      <article class="empty-card">
        <h3>No careers matched your search</h3>
        <p>Try a different title such as UI/UX Designer or Product Manager.</p>
      </article>
    `;

    renderCareerDetailPlaceholder(
      "No career matches this search yet.",
      "Clear the search field to explore the full set of paths."
    );

    return;
  }

  careerCardGrid.innerHTML = visibleCareers
    .map(
      (career) => `
        <article
          class="career-card ${career.id === state.selectedCareerId ? "is-active" : ""}"
          tabindex="0"
          data-career-id="${career.id}"
          aria-label="View details for ${career.title}"
          aria-pressed="${career.id === state.selectedCareerId}"
        >
          <div class="career-card-top">
            <span class="career-tag">Career Path</span>
            <button
              class="bookmark-button ${isFavorite(career.id) ? "is-active" : ""}"
              type="button"
              data-favorite-id="${career.id}"
              aria-label="${isFavorite(career.id) ? "Remove" : "Save"} ${career.title} ${
                isFavorite(career.id) ? "from" : "to"
              } favorites"
              aria-pressed="${isFavorite(career.id)}"
            >
              ${isFavorite(career.id) ? "&#9733;" : "&#9734;"}
            </button>
          </div>

          <h3>${career.title}</h3>
          <p>${career.description}</p>

          <div>
            <span class="card-section-label">Recommended Skills</span>
            <ul class="pill-list">
              ${career.skills.map((skill) => `<li>${skill}</li>`).join("")}
            </ul>
          </div>

          <div>
            <span class="card-section-label">Recommended Tools</span>
            <ul class="pill-list">
              ${career.tools.map((tool) => `<li>${tool}</li>`).join("")}
            </ul>
          </div>

          <div>
            <span class="card-section-label">Suggested Portfolio Project</span>
            <p>${career.project}</p>
          </div>
        </article>
      `
    )
    .join("");

  renderCareerDetail(state.selectedCareerId);
}

function renderFavorites() {
  const favoriteCareers = careers.filter((career) => isFavorite(career.id));

  favoritesCount.textContent = `${favoriteCareers.length} saved`;

  if (favoriteCareers.length === 0) {
    favoriteCareerGrid.innerHTML = createEmptyStateMarkup(
      "No saved careers yet.",
      "Bookmark careers from the explorer to build your shortlist."
    );

    return;
  }

  favoriteCareerGrid.innerHTML = favoriteCareers
    .map(
      (career) => `
        <article class="favorite-card">
          <div class="favorite-card-top">
            <div>
              <span class="career-tag">Saved Career</span>
              <h3>${career.title}</h3>
            </div>
            <button
              class="bookmark-button is-active"
              type="button"
              data-favorite-id="${career.id}"
              aria-label="Remove ${career.title} from favorites"
              aria-pressed="true"
            >
              &#9733;
            </button>
          </div>

          <p>${career.description}</p>
          <p><strong>Suggested Project:</strong> ${career.project}</p>

          <div class="favorite-card-actions">
            <button
              class="secondary-button"
              type="button"
              data-open-career="${career.id}"
            >
              Open Roadmap
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function toggleFavorite(careerId) {
  const alreadySaved = isFavorite(careerId);

  state.favorites = alreadySaved
    ? state.favorites.filter((id) => id !== careerId)
    : [...state.favorites, careerId];

  writeStorage(storageKeys.favorites, state.favorites);
  renderCareerExplorer();
  renderFavorites();
}

// Checklist and badges
function renderBadges() {
  const checklistProgress = getChecklistProgress();

  badgeGrid.innerHTML = badgeMilestones
    .map(
      (badge) => `
        <article class="badge-item ${checklistProgress >= badge.threshold ? "is-unlocked" : "is-locked"}">
          <span class="badge-icon">${badge.icon}</span>
          <h4>${badge.title}</h4>
          <p>${badge.description}</p>
        </article>
      `
    )
    .join("");
}

function renderChecklist() {
  checklistItems.innerHTML = checklistData
    .map(
      (item, index) => `
        <li class="checklist-item ${state.checklist[index] ? "is-checked" : ""}">
          <input
            id="checklist-${index}"
            type="checkbox"
            data-index="${index}"
            ${state.checklist[index] ? "checked" : ""}
          />
          <label for="checklist-${index}">${item}</label>
        </li>
      `
    )
    .join("");

  const progress = getChecklistProgress();
  progressValue.textContent = `${progress}%`;
  progressBar.style.width = `${progress}%`;
  renderBadges();
}

// Notes
function renderNotes() {
  notesInput.value = state.notes;

  if (!state.notes.trim()) {
    notesPreview.innerHTML = `
      <p class="notes-preview-empty">
        No notes yet.
        Write reminders and important goals here.
      </p>
    `;
    return;
  }

  const noteParagraph = document.createElement("p");
  noteParagraph.className = "notes-preview-text";
  noteParagraph.textContent = state.notes;
  notesPreview.innerHTML = "";
  notesPreview.appendChild(noteParagraph);
}

// Assistant
function renderAssistantQuestionButtons() {
  assistantQuestions.innerHTML = assistantData
    .map(
      (item) => `
        <button class="question-button" type="button" data-question="${item.question}">
          ${item.question}
        </button>
      `
    )
    .join("");
}

function renderAssistantHistory() {
  const messages =
    state.assistantHistory.length > 0
      ? state.assistantHistory
      : [assistantWelcomeMessage];

  assistantHistory.innerHTML = messages
    .map(
      (message) => `
        <article class="assistant-message assistant-message--${message.sender}">
          <span class="assistant-role">${
            message.sender === "assistant" ? "Guided Assistant" : "You"
          }</span>
          <p>${escapeHtml(message.text)}</p>
        </article>
      `
    )
    .join("");

  assistantHistory.scrollTop = assistantHistory.scrollHeight;
}

function addAssistantConversation(question) {
  const answer = assistantData.find((item) => item.question === question);

  if (!answer) {
    return;
  }

  state.assistantHistory = [
    ...state.assistantHistory,
    { sender: "user", text: question },
    { sender: "assistant", text: answer.answer }
  ];

  writeStorage(storageKeys.assistantHistory, state.assistantHistory);
  renderAssistantHistory();
}

// Opportunities
function renderOpportunities() {
  opportunityGrid.innerHTML = opportunities
    .map(
      (opportunity) => `
        <article class="opportunity-card card">
          <div class="opportunity-meta">
            <span class="opportunity-category">${opportunity.category}</span>
            <span class="deadline-pill">${opportunity.deadline}</span>
          </div>
          <h3>${opportunity.name}</h3>
          <p><strong>Recommended Preparation:</strong> ${opportunity.preparation}</p>
        </article>
      `
    )
    .join("");
}

// Event handling
themeToggle.addEventListener("click", toggleTheme);

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  state.profile = {
    name: studentName.value.trim(),
    major: studentMajor.value.trim(),
    semester: clampSemester(studentSemester.value)
  };

  writeStorage(storageKeys.profile, state.profile);
  dashboardStatus.textContent = "Dashboard saved in your browser.";
  renderDashboardSummary();
  renderActionPlan();
});

profileForm.addEventListener("input", () => {
  dashboardStatus.textContent = "You have unsaved profile changes.";
});

assessmentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!assessmentForm.reportValidity()) {
    return;
  }

  state.assessment = calculateRecommendation(getAssessmentScores());
  writeStorage(storageKeys.assessment, state.assessment);
  renderAssessmentResult();
  renderDashboardSummary();
});

assessmentResult.addEventListener("click", (event) => {
  const target = event.target;
  const roadmapButton =
    target instanceof HTMLElement
      ? target.closest("[data-roadmap-career]")
      : null;

  if (!(roadmapButton instanceof HTMLButtonElement)) {
    return;
  }

  goToCareerRoadmap(roadmapButton.dataset.roadmapCareer);
});

careerSearch.addEventListener("input", (event) => {
  state.searchQuery = event.target.value;
  renderCareerExplorer();
});

clearCareerSearch.addEventListener("click", () => {
  state.searchQuery = "";
  careerSearch.value = "";
  renderCareerExplorer();
});

careerCardGrid.addEventListener("click", (event) => {
  const target = event.target;
  const favoriteButton =
    target instanceof HTMLElement ? target.closest("[data-favorite-id]") : null;

  if (favoriteButton instanceof HTMLButtonElement) {
    toggleFavorite(favoriteButton.dataset.favoriteId);
    return;
  }

  const card = target instanceof HTMLElement ? target.closest("[data-career-id]") : null;

  if (card instanceof HTMLElement) {
    setSelectedCareer(card.dataset.careerId);
  }
});

careerCardGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  if (event.target instanceof HTMLButtonElement) {
    return;
  }

  const target = event.target;
  const card = target instanceof HTMLElement ? target.closest("[data-career-id]") : null;

  if (!(card instanceof HTMLElement)) {
    return;
  }

  event.preventDefault();
  setSelectedCareer(card.dataset.careerId);
});

favoriteCareerGrid.addEventListener("click", (event) => {
  const target = event.target;
  const favoriteButton =
    target instanceof HTMLElement ? target.closest("[data-favorite-id]") : null;

  if (favoriteButton instanceof HTMLButtonElement) {
    toggleFavorite(favoriteButton.dataset.favoriteId);
    return;
  }

  const openButton =
    target instanceof HTMLElement ? target.closest("[data-open-career]") : null;

  if (openButton instanceof HTMLButtonElement) {
    goToCareerRoadmap(openButton.dataset.openCareer);
  }
});

checklistItems.addEventListener("change", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLInputElement) || target.type !== "checkbox") {
    return;
  }

  const index = Number(target.dataset.index);
  state.checklist[index] = target.checked;

  writeStorage(storageKeys.checklist, state.checklist);
  renderChecklist();
  renderDashboardSummary();
});

notesForm.addEventListener("submit", (event) => {
  event.preventDefault();

  state.notes = notesInput.value;
  writeStorage(storageKeys.notes, state.notes);
  notesStatus.textContent = "Notes saved in your browser.";
  renderNotes();
});

notesInput.addEventListener("input", () => {
  notesStatus.textContent = "You have unsaved note changes.";
});

assistantQuestions.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  addAssistantConversation(target.dataset.question);
});

clearAssistantHistory.addEventListener("click", () => {
  state.assistantHistory = [];
  writeStorage(storageKeys.assistantHistory, state.assistantHistory);
  renderAssistantHistory();
});

// Initial render
applyTheme(state.theme);
populateProfileForm();
renderDashboardSummary();
renderActionPlan();
renderAssessmentQuestions();
populateAssessmentForm();
renderAssessmentResult();
renderCareerExplorer();
renderFavorites();
renderChecklist();
renderNotes();
renderAssistantQuestionButtons();
renderAssistantHistory();
renderOpportunities();
