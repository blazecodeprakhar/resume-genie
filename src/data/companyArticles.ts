export interface CompanyArticle {
  bg: string;
  tag: string;
  title: string;
  meta: string;
  body: string;
}

export const companyArticles: Record<string, CompanyArticle> = {
  google: {
    bg: 'linear-gradient(135deg,#1E40AF,#2563EB)',
    tag: 'FAANG · Google',
    title: 'The Google Resume: What Gets You Shortlisted (From a Former Google Recruiter)',
    meta: '🔥 Most searched · Updated June 2026 · ~1% acceptance rate',
    body: `
      <h3>How Google Screens Resumes</h3>
      <p>Google uses both automated ATS screening and human recruiter review. The automated system scans for keywords matching the job description, then human recruiters do a 30-second scan focusing on: current title and company, graduation date (for new grads), and the first 1-2 bullets of your most recent role.</p>
      <p>According to Yana S., former Google and Meta Tech Recruiter: <em>"Google is a data-driven company where every employee is expected to incorporate data into their daily work. Your resume must reflect this mindset — quantify your achievements wherever possible."</em></p>

      <h3>The XYZ Formula — Google's Own Template</h3>
      <p>Google's official careers page recommends this exact bullet formula:</p>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-blue-500 bg-blue-500/5 dark:bg-blue-500/10 text-foreground/90"><strong>Accomplished [X] as measured by [Y] by doing [Z]</strong><br><br>Example: "Increased server response speed by 22% (X) measured by 99th percentile latency (Y) by refactoring the database query layer and adding Redis caching (Z)"</div>
      <p>Every bullet on your Google resume should follow this structure. If you can't add a metric, you either need to find one or cut the bullet.</p>

      <h3>What Google Recruiters Scan First (In Order)</h3>
      <ol class="list-decimal pl-5 space-y-2 my-4">
        <li><strong>Current job title and company</strong> (2 seconds) — known brands get more attention</li>
        <li><strong>Graduation date</strong> — for new grads, they check if you're on track</li>
        <li><strong>First bullet of most recent role</strong> (5-10 seconds) — this is the single most important line</li>
        <li><strong>Education section</strong> — degree, institution, GPA if listed</li>
        <li><strong>Skills/tech stack</strong> — matching to job requirements</li>
      </ol>

      <h3>Google-Specific Keywords by Role</h3>
      <p><strong>Software Engineer (SWE):</strong> distributed systems, Kubernetes, Go/Python/Java/C++, large-scale systems, latency, throughput, ML pipelines, code review, open source</p>
      <p><strong>Product Manager:</strong> product roadmap, OKRs, A/B testing, user research, GTM, product-market fit, cross-functional, data-driven decisions</p>
      <p><strong>Data / ML:</strong> TensorFlow, PyTorch, BigQuery, SQL, statistical modeling, experimentation, feature engineering, model deployment</p>

      <h3>Format Rules for Google</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Length:</strong> 1 page for under 10 years experience; 2 pages for senior engineers only</li>
        <li><strong>Font:</strong> Arial, Calibri, or similar — 10–12pt</li>
        <li><strong>No graphics, charts, or tables</strong> — Google's ATS and many human reviewers use plain text viewing</li>
        <li><strong>No photo</strong> — standard in the US/global tech companies</li>
        <li><strong>File format:</strong> PDF always</li>
      </ul>

      <h3>5 Reasons Google Rejects Strong Candidates</h3>
      <ol class="list-decimal pl-5 space-y-2 my-4">
        <li>Vague bullets without numbers ("worked on backend systems" → rejected)</li>
        <li>Resume doesn't match the specific role JD (generic resumes sent to multiple Google teams)</li>
        <li>Too long — 3+ page resumes signal poor communication skills at Google</li>
        <li>Missing key tech stack keywords from the JD</li>
        <li>No evidence of "leadership" — Google wants leaders at every level, not just followers</li>
      </ol>

      <h3>Google India Salary Ranges (2026)</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Experience</th><th class="border p-2 text-left">Package (India)</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">SWE (L3)</td><td class="border p-2">Fresher/0-2 yr</td><td class="border p-2">₹20–35 LPA</td></tr>
          <tr><td class="border p-2">SWE (L4)</td><td class="border p-2">2–5 years</td><td class="border p-2">₹40–70 LPA</td></tr>
          <tr><td class="border p-2">SWE (L5)</td><td class="border p-2">5–10 years</td><td class="border p-2">₹70–130 LPA</td></tr>
          <tr><td class="border p-2">Product Manager</td><td class="border p-2">3–6 years</td><td class="border p-2">₹45–90 LPA</td></tr>
          <tr><td class="border p-2">Data Scientist</td><td class="border p-2">2–5 years</td><td class="border p-2">₹30–65 LPA</td></tr>
        </tbody>
      </table>

      <div class="my-6 p-4 rounded-r-lg border-l-4 border-green-500 bg-green-500/5 dark:bg-green-500/10 text-foreground/90">💡 <strong>FreeResumeKit tip:</strong> Our AI automatically writes your experience bullets using the XYZ formula — just describe what you did and the AI converts it to Google-ready bullet points. Free, instant, no sign-up.</div>
    `
  },
  amazon: {
    bg: 'linear-gradient(135deg,#232F3E,#FF9900)',
    tag: 'FAANG · Amazon',
    title: 'The Amazon Resume: How to Write Leadership Principles Into Every Bullet',
    meta: '🔥 200K+ monthly searches · Updated June 2026',
    body: `
      <h3>Amazon's Unique Hiring Philosophy</h3>
      <p>Amazon is unlike any other company in that its 16 Leadership Principles (LPs) are not just culture values — they are the literal criteria used to evaluate every candidate at every stage, including the resume screen. Your resume must reflect these principles through specific, quantified achievements.</p>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-amber-500 bg-amber-500/5 dark:bg-amber-500/10 text-foreground/90">⚠️ Amazon uses a "Bar Raiser" system — a senior employee who isn't on the hiring team reviews every final candidate to ensure they "raise the bar" of Amazon's current talent level. Your resume needs to impress people who don't know your field.</div>

      <h3>The 16 Leadership Principles — Which Ones to Show on Your Resume</h3>
      <p>You can't show all 16, but these are the ones that appear most in resume screening:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Customer Obsession:</strong> Show work that directly improved customer experience or metrics</li>
        <li><strong>Ownership:</strong> Bullets where you went beyond your job scope to get something done</li>
        <li><strong>Bias for Action:</strong> Show speed — "delivered in 3 weeks" vs "completed the project"</li>
        <li><strong>Deliver Results:</strong> Hard numbers — always. Revenue, users, latency, cost savings</li>
        <li><strong>Think Big:</strong> Projects with broad impact, new initiatives, scale</li>
        <li><strong>Dive Deep:</strong> Root cause analysis, debugging, detailed problem-solving</li>
      </ul>

      <h3>Amazon's STAR Format for Resume Bullets</h3>
      <p>Unlike Google's XYZ formula, Amazon strongly prefers the STAR format in bullets:<br>
      <strong>Situation → Task → Action → Result</strong></p>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-blue-500 bg-blue-500/5 dark:bg-blue-500/10 text-foreground/90">Example: "Led effort to reduce checkout abandonment rate (S) targeting 15% improvement (T) by redesigning the payment confirmation UX and adding one-click checkout (A), resulting in 23% reduction in abandonment and $4.2M incremental annual revenue (R)"</div>

      <h3>Amazon Resume Format Rules</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>1 page for under 7 years experience; 2 pages acceptable for senior/principal roles</li>
        <li>Reverse chronological format always</li>
        <li>Use keywords from the job description — Amazon's ATS (Taleo) scores keyword matches</li>
        <li>Always include: current role, company, dates, 3-5 STAR bullets, skills section</li>
        <li>Amazon India tech salaries: ₹25–150 LPA depending on level</li>
      </ul>

      <h3>Amazon India Hiring Highlights</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Level</th><th class="border p-2 text-left">India Package</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">SDE-1</td><td class="border p-2">Entry</td><td class="border p-2">₹28–45 LPA</td></tr>
          <tr><td class="border p-2">SDE-2</td><td class="border p-2">Mid</td><td class="border p-2">₹45–80 LPA</td></tr>
          <tr><td class="border p-2">SDE-3</td><td class="border p-2">Senior</td><td class="border p-2">₹80–150 LPA</td></tr>
          <tr><td class="border p-2">Data Scientist</td><td class="border p-2">Mid</td><td class="border p-2">₹30–65 LPA</td></tr>
          <tr><td class="border p-2">Product Manager</td><td class="border p-2">Mid</td><td class="border p-2">₹40–80 LPA</td></tr>
        </tbody>
      </table>
    `
  },
  microsoft: {
    bg: 'linear-gradient(135deg,#0078D4,#106EBE)',
    tag: 'FAANG · Microsoft',
    title: 'The Microsoft Resume: Growth Mindset, Azure Skills, and What Satya Nadella Changed',
    meta: '📈 High demand · Updated June 2026',
    body: `
      <h3>How Microsoft Changed Its Hiring Under Satya Nadella</h3>
      <p>Before Satya Nadella, Microsoft was known for stack ranking and competitive internal culture. After his 2014 appointment, Microsoft transformed to value collaboration, learning, and growth mindset. This directly affects what recruiters look for on resumes in 2026.</p>
      <p>Microsoft recruiters now specifically look for evidence of: learning from failure, mentoring others, cross-team collaboration, and continuous skill development — not just past wins.</p>

      <h3>Growth Mindset Signals Microsoft Wants to See</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Certifications and courses you've completed (Microsoft Learn, Azure, LinkedIn Learning)</li>
        <li>Examples of mentoring junior team members</li>
        <li>Projects where you learned a new technology to solve a problem</li>
        <li>Cross-functional work — partnering with design, PM, data teams</li>
        <li>Open source contributions (GitHub profile linked)</li>
      </ul>

      <h3>Azure and Cloud Keywords That Matter</h3>
      <p>With Azure as Microsoft's fastest-growing business, cloud experience is heavily weighted for most engineering and tech roles:</p>
      <p>Azure Functions, Azure Kubernetes Service, Azure DevOps, Active Directory, Power Platform, Microsoft 365, Cosmos DB, Azure ML, C#/.NET, TypeScript, Power BI, Teams integration</p>

      <h3>Microsoft Resume Format</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Clean, single or two-column layout (no tables — these break ATS)</li>
        <li>1–2 pages; senior roles can go to 2 pages</li>
        <li>Strong skills section with explicit tech stack</li>
        <li>List Microsoft certifications prominently (AZ-900, AZ-104, etc.)</li>
        <li>GitHub/LinkedIn links in header</li>
      </ul>

      <h3>Microsoft India Salary Ranges (2026)</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Level</th><th class="border p-2 text-left">India Package</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">SWE-60</td><td class="border p-2">Entry</td><td class="border p-2">₹20–40 LPA</td></tr>
          <tr><td class="border p-2">SWE-62</td><td class="border p-2">Mid</td><td class="border p-2">₹40–75 LPA</td></tr>
          <tr><td class="border p-2">SWE-65/Principal</td><td class="border p-2">Senior</td><td class="border p-2">₹80–140 LPA</td></tr>
          <tr><td class="border p-2">PM</td><td class="border p-2">Mid</td><td class="border p-2">₹35–65 LPA</td></tr>
        </tbody>
      </table>
    `
  },
  tcs: {
    bg: 'linear-gradient(135deg,#1a237e,#2C3E8C)',
    tag: 'India IT · TCS',
    title: 'TCS Resume Guide 2026: NQT, Ninja vs Digital vs Prime — Complete Fresher Breakdown',
    meta: "🔥 India's most searched company guide · Updated June 2026",
    body: `
      <h3>TCS Hiring Structure 2026</h3>
      <p>TCS hires approximately 40,000 freshers per year through its National Qualifier Test (NQT). Your NQT score determines which salary tier you land in — this is the most important thing to know about TCS hiring.</p>

      <h3>TCS Salary Tiers Based on NQT Performance</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Tier</th><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Package</th><th class="border p-2 text-left">How to Qualify</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2"><strong>Ninja</strong></td><td class="border p-2">System Engineer</td><td class="border p-2">₹3.6 LPA</td><td class="border p-2">Clear NQT cutoff score</td></tr>
          <tr><td class="border p-2"><strong>Digital</strong></td><td class="border p-2">IT Analyst</td><td class="border p-2">₹7 LPA</td><td class="border p-2">High NQT score + Advanced Coding Test</td></tr>
          <tr><td class="border p-2"><strong>Prime</strong></td><td class="border p-2">IT Analyst - Premium</td><td class="border p-2">₹9 LPA</td><td class="border p-2">Top performers only — rare</td></tr>
          <tr><td class="border p-2"><strong>BPS</strong></td><td class="border p-2">Business Process</td><td class="border p-2">₹2.5–3 LPA</td><td class="border p-2">Separate BPS test</td></tr>
        </tbody>
      </table>

      <h3>TCS Eligibility Criteria 2026</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Minimum 60% in 10th, 12th, and graduation — all three, no exceptions</li>
        <li>No active backlogs at time of application</li>
        <li>Any degree: B.E./B.Tech, B.Sc, BCA, MCA, MBA accepted</li>
        <li>2024, 2025, 2026 batch all eligible for current drives</li>
        <li>Gap year allowed if explained — up to 2 years acceptable with certification proof</li>
      </ul>

      <h3>The TCS Resume Format That Passes iAssure ATS</h3>
      <p>TCS uses iAssure ATS — their internal resume screening system. It parses your resume and scores it against TCS's criteria. Here's the format that maximizes your score:</p>
      <ol class="list-decimal pl-5 space-y-2 my-4">
        <li><strong>Header:</strong> Name (large), email, phone, LinkedIn</li>
        <li><strong>Career Objective:</strong> 2-3 lines. Mention "software development," "technology," and your degree specifically</li>
        <li><strong>Education:</strong> CGPA/percentage prominently at the top — put this before skills for TCS</li>
        <li><strong>Technical Skills:</strong> Java, Python, C++, SQL, HTML/CSS (whatever you know). TCS checks these against their training program requirements</li>
        <li><strong>Projects:</strong> 2-3 projects. Always include: project name, tech stack used, brief description, your role</li>
        <li><strong>Internships:</strong> Even 1-month internships. TCS specifically asks about these in technical interviews</li>
        <li><strong>Certifications:</strong> NPTEL, Coursera, HackerRank — TCS values verified certifications</li>
      </ol>

      <h3>TCS Technical Interview — What They Ask About Your Resume</h3>
      <p>TCS technical interviewers literally go through your resume line by line. They will ask you to explain every project, every technology listed, and every internship. Do not list any technology you can't explain basics of.</p>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-amber-500 bg-amber-500/5 dark:bg-amber-500/10 text-foreground/90">⚠️ TCS Interview Key Questions: OOPs concepts (polymorphism, inheritance), DBMS (joins, normalization), your academic project in detail (explain the tech stack, challenges, and outcome), basic coding in C/Java/Python</div>

      <h3>TCS HR Round — What They Always Ask</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>"Are you willing to relocate anywhere in India?" — Always say yes</li>
        <li>"Are you comfortable working night shifts?" — Say yes, you can adjust</li>
        <li>"Tell me about yourself" — Focus on skills and project experience, not family</li>
        <li>If you have a gap: explain as "skill development" and list what you learned</li>
      </ul>
    `
  },
  infosys: {
    bg: 'linear-gradient(135deg,#007CC3,#005A9E)',
    tag: 'India IT · Infosys',
    title: 'Infosys Resume & Hiring Guide 2026 — HackWithInfy, InfyTQ, and Getting ₹9.5 LPA',
    meta: '🔥 High demand · India fresher guide · Updated June 2026',
    body: `
      <h3>Infosys Hiring Numbers 2026</h3>
      <p>Infosys hires between 16,000 and 80,000 freshers per year depending on market conditions. In the 2025–2026 cycle, they are actively hiring for digital transformation roles. The company uses two main pathways: standard hiring (₹3.6 LPA) and specialist tracks that pay significantly more.</p>

      <h3>Infosys Salary Tracks — Which One Gets You More</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Track</th><th class="border p-2 text-left">How to Get It</th><th class="border p-2 text-left">Package</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">Systems Engineer</td><td class="border p-2">Standard InfyTQ/campus hiring</td><td class="border p-2">₹3.6 LPA</td></tr>
          <tr><td class="border p-2">Digital Specialist</td><td class="border p-2">Strong InfyTQ score + campus drive</td><td class="border p-2">₹4.5–6.5 LPA</td></tr>
          <tr><td class="border p-2">Specialist Programmer</td><td class="border p-2">HackWithInfy Top 3 or direct referral</td><td class="border p-2">₹9.5 LPA</td></tr>
        </tbody>
      </table>

      <h3>InfyTQ — Your Secret Weapon</h3>
      <p>InfyTQ is Infosys's free learning and assessment platform. Completing InfyTQ certifications (Java, Python, Database, etc.) gives you a verified Infosys badge that almost guarantees shortlisting. Recruiters at campus drives immediately flag InfyTQ certified candidates.</p>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-green-500 bg-green-500/5 dark:bg-green-500/10 text-foreground/90">✅ Strategy: Complete InfyTQ certifications before applying. Add "InfyTQ Certified — Java Programming" and "InfyTQ Certified — Database Fundamentals" to your resume's certifications section. This alone can increase your shortlisting chances significantly.</div>

      <h3>HackWithInfy — Path to ₹9.5 LPA</h3>
      <p>HackWithInfy is Infosys's annual coding competition. The top performers get direct Specialist Programmer offers at ₹9.5 LPA — more than 2x the standard package. Registration opens annually (typically March-May). Any final year engineering student can apply. If you're good at competitive programming, this is your fastest path to a high Infosys package.</p>

      <h3>Infosys Resume Format (iRecruit ATS)</h3>
      <p>Infosys uses iRecruit (internal) for campus and SmartRecruiters for lateral hires. Both systems prefer:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>One page, clean single-column layout</li>
        <li>CGPA prominently displayed (must be 6.5+)</li>
        <li>InfyTQ certifications listed explicitly</li>
        <li>Projects with tech stack described in ATS-readable plain text</li>
        <li>Standard section headers only — "Work Experience," "Skills," "Education"</li>
      </ul>

      <h3>Infosys Selection Process 2026</h3>
      <ol class="list-decimal pl-5 space-y-2 my-4">
        <li><strong>Online Assessment (60 min):</strong> Verbal ability, logical reasoning, mathematical ability</li>
        <li><strong>Technical Interview:</strong> Core CS concepts — C/Java/Python, DBMS, OOPs, your project</li>
        <li><strong>HR Interview:</strong> Communication skills, willingness to relocate, attitude assessment</li>
      </ol>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-amber-500 bg-amber-500/5 dark:bg-amber-500/10 text-foreground/90">⚠️ No negative marking in the Infosys online test. Attempt everything. Focus on accuracy over speed in the mathematical section.</div>
    `
  },
  wipro: {
    bg: 'linear-gradient(135deg,#0047AB,#0077B5)',
    tag: 'India IT · Wipro',
    title: 'Wipro Resume & Hiring Guide 2026 — Elite NLTH, Certifications, and Phenom ATS',
    meta: '📈 India fresher guide · Updated June 2026',
    body: `
      <h3>Wipro Hiring Structure 2026</h3>
      <p>Wipro conducts hiring through two main channels: standard Project Engineer hiring (₹3.5 LPA) and the Elite National Level Talent Hunt (NLTH) program (₹6.5 LPA). Understanding this distinction is the most important thing about Wipro hiring.</p>

      <h3>Wipro Salary Tracks</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Program</th><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Package</th><th class="border p-2 text-left">Key Requirement</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">Standard</td><td class="border p-2">Project Engineer</td><td class="border p-2">₹3.5 LPA</td><td class="border p-2">60% throughout, no backlogs</td></tr>
          <tr><td class="border p-2">Elite NLTH</td><td class="border p-2">Project Engineer - Elite</td><td class="border p-2">₹6.5 LPA</td><td class="border p-2">Strong coding test performance</td></tr>
          <tr><td class="border p-2">Turbo</td><td class="border p-2">Senior Project Engineer</td><td class="border p-2">Varies</td><td class="border p-2">Lateral hire, 2+ years experience</td></tr>
        </tbody>
      </table>

      <h3>Phenom ATS — What It Scores Your Resume On</h3>
      <p>Wipro uses Phenom People ATS — one of the most sophisticated commercial ATS platforms. It scores resumes on: keyword match with JD, education credentials, certifications, project relevance, and skill recency.</p>
      <p>Domain certifications dramatically boost your Phenom score:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>AWS Solutions Architect (any level) — high score boost</li>
        <li>CISSP or Security+ for cybersecurity roles</li>
        <li>PMP or Scrum Master for project management roles</li>
        <li>Wipro's own certifications from WILP (for lateral hires)</li>
      </ul>

      <h3>Secret Tip: List Client Geography</h3>
      <p>Wipro's client base is heavily US and UK focused. If you've had any experience working with US or UK clients (even in previous internships or academic projects), explicitly mention the client geography on your resume. This signals that you can work with Wipro's primary revenue-generating clients.</p>

      <h3>Wipro Resume Format</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>One page, clean layout — no creative templates</li>
        <li>Certifications section is more important at Wipro than at TCS/Infosys</li>
        <li>Mention willingness to relocate and shift work in your objective</li>
        <li>Include GitHub or portfolio link if you have project code</li>
      </ul>
    `
  },
  hcl: {
    bg: 'linear-gradient(135deg,#0073CF,#005FA8)',
    tag: 'India IT · HCL Technologies',
    title: 'HCL Technologies Resume Guide 2026 — Best Option for Students With Lower CGPA',
    meta: '📈 India fresher guide · Updated June 2026',
    body: `
      <h3>Why HCL is Different from TCS/Infosys/Wipro</h3>
      <p>HCL Technologies operates differently from the other top-3 Indian IT companies. They focus on long-term infrastructure outsourcing and product engineering services, meaning they value hands-on project experience over academic grades. This makes HCL the best option for students with CGPA below 7.5 who have strong projects and skills.</p>

      <h3>HCL's Key Advantage: Project Focus</h3>
      <p>HCL recruiters actually read your project descriptions in detail — unlike TCS's automated NQT-first approach. A well-documented, technically strong project can get you shortlisted at HCL even if your CGPA is 6.5. This is genuinely unusual among major Indian IT companies.</p>

      <h3>HCL Eligibility — Most Lenient Among Big 4</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>60% minimum — same as TCS/Wipro</li>
        <li><strong>Up to 1 standing backlog allowed</strong> — unique among major IT companies</li>
        <li>All engineering branches accepted</li>
        <li>BCA, MCA, B.Sc also accepted for certain roles</li>
      </ul>

      <h3>HCL Resume Tips</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Lead with your strongest project — write 4-5 lines describing what you built, what tech you used, and what problem it solved</li>
        <li>Include GitHub link if your project code is clean and well-commented</li>
        <li>HCL Taleo ATS: clean single-column format, standard section headers</li>
        <li>Mention infrastructure and cloud skills if you have any — HCL's core business is infrastructure services</li>
        <li>For TechBee program: 12th pass students can apply for earn-while-you-learn program</li>
      </ul>

      <h3>HCL Packages 2026</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Package</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">Graduate Engineer Trainee</td><td class="border p-2">₹3.5 LPA</td></tr>
          <tr><td class="border p-2">Technical Support Engineer</td><td class="border p-2">₹3–4 LPA</td></tr>
          <tr><td class="border p-2">TechBee (After training)</td><td class="border p-2">₹3 LPA + perks</td></tr>
          <tr><td class="border p-2">Experienced (2-5 years)</td><td class="border p-2">₹6–15 LPA</td></tr>
        </tbody>
      </table>
    `
  },
  mckinsey: {
    bg: 'linear-gradient(135deg,#003366,#1a4f8a)',
    tag: 'Consulting · McKinsey',
    title: 'The McKinsey Resume: What Screeners Actually Look At (And in What Order)',
    meta: '🔥 High demand · Updated June 2026 · <1% acceptance rate',
    body: `
      <h3>How McKinsey Screens Resumes — The 1-3 Minute Review</h3>
      <p>McKinsey recruits accept less than 1% of applicants. According to ex-McKinsey screeners, a resume review at McKinsey takes 1-3 minutes and follows a very specific order:</p>

      <h3>The McKinsey Screening Sequence (Exact Order)</h3>
      <ol class="list-decimal pl-5 space-y-2 my-4">
        <li><strong>University name (2-3 seconds):</strong> Screeners immediately look for school prestige. If the school is a known target (IIM, IIT, Harvard, Oxford, INSEAD), the resume gets a closer look. Unknown schools must compensate with exceptional performance everywhere else.</li>
        <li><strong>GPA and test scores (2-3 seconds):</strong> Fastest quantitative signal. 3.7+/4.0 or 8.5+/10 is an instant green flag. GMAT or CAT score if listed.</li>
        <li><strong>Company names (3-5 seconds):</strong> Brand-name employers signal rigorous vetting. Goldman Sachs, Google, another consulting firm = strong signal.</li>
        <li><strong>First bullet of most recent role (5-10 seconds):</strong> This is the single most important bullet on your entire resume. If it does not show quantified impact, the screener may not read further.</li>
        <li><strong>Everything else (30-90 seconds):</strong> Only if the above passed.</li>
      </ol>

      <h3>McKinsey Resume Format Rules (Non-Negotiable)</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>One page strictly.</strong> No exceptions for junior candidates. Senior hires can go to two pages.</li>
        <li>Clean, dense layout — consistent fonts, 0.5–1.0 inch margins, clear section headings</li>
        <li>Fonts: Arial or Calibri, 10–11pt. No creative fonts, no colors</li>
        <li>Sections: Education (first), Experience, Leadership/Activities, Skills</li>
        <li>No photos, no graphics, no skill bars</li>
      </ul>

      <h3>The Four Qualities McKinsey Evaluates</h3>
      <ol class="list-decimal pl-5 space-y-2 my-4">
        <li><strong>Problem solving / Analytical ability:</strong> Evidence of quantitative work, analysis, data-driven decisions</li>
        <li><strong>Achieving results / Impact:</strong> Every bullet must show what you achieved, not what you did</li>
        <li><strong>Personal impact / Leadership:</strong> Leading teams, initiatives, and change — even in small ways</li>
        <li><strong>Communication:</strong> Your resume itself is a communication test — clarity, structure, conciseness</li>
      </ol>

      <h3>Bullet Writing for McKinsey</h3>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-red-500 bg-red-500/5 dark:bg-red-500/10 text-foreground/90">❌ Weak: "Responsible for analyzing market data and creating reports for management"</div>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-green-500 bg-green-500/5 dark:bg-green-500/10 text-foreground/90">✅ Strong: "Developed financial model analyzing 5-year market expansion opportunity; identified $50M incremental revenue pathway, presented to C-suite, led to approved strategic investment"</div>

      <h3>McKinsey India Packages (2026)</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Background</th><th class="border p-2 text-left">Package</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">Business Analyst</td><td class="border p-2">IIM/top MBA fresher</td><td class="border p-2">₹25–35 LPA</td></tr>
          <tr><td class="border p-2">Junior Associate</td><td class="border p-2">2-3 years post-MBA</td><td class="border p-2">₹40–60 LPA</td></tr>
          <tr><td class="border p-2">Associate</td><td class="border p-2">Post-MBA, 4-5 years</td><td class="border p-2">₹60–100 LPA</td></tr>
        </tbody>
      </table>
    `
  },
  goldman: {
    bg: 'linear-gradient(135deg,#1B3A6B,#2D5BA8)',
    tag: 'Finance · Goldman Sachs',
    title: 'Goldman Sachs Resume Guide: The #1 Most Prestigious Bank and What Gets You In',
    meta: '🔥 Finance guide · Updated June 2026 · Vault #1 Prestige',
    body: `
      <h3>Goldman Sachs: The Numbers</h3>
      <p>Goldman Sachs is ranked #1 most prestigious investment bank in the world (Vault 2025). They receive hundreds of thousands of applications yearly for a few thousand positions. In India, Goldman has a major presence in Bangalore and Mumbai with tech, operations, and finance roles.</p>

      <h3>What Goldman Sachs Screeners Look For</h3>
      <p>Goldman is first a prestige filter: IITs, IIMs, top US/UK universities, and CA certifications receive immediate attention. But even from top schools, your bullets must show financial impact.</p>
      <p><strong>Every bullet must contain a financial metric:</strong> deal value, portfolio size, return percentage, cost reduction in $, revenue generated, AUM managed, transaction volume.</p>

      <h3>Goldman Resume Format</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>One page strictly for undergraduate/MBA candidates</li>
        <li>Reverse chronological format</li>
        <li>GPA included always if above 3.5/4.0 or 8.0/10</li>
        <li>No creative design — clean, plain, professional</li>
        <li>Finance certifications prominent: CFA Level 1/2/3, FRM, CA</li>
      </ul>

      <h3>Goldman-Specific Bullet Examples</h3>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-blue-500 bg-blue-500/5 dark:bg-blue-500/10 text-foreground/90">Example (Finance intern): "Analyzed portfolio of 12 NBFC clients with combined AUM of ₹2,400 Cr; identified 3 credit risk flags resulting in pre-emptive renegotiation of ₹380 Cr exposure"</div>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-blue-500 bg-blue-500/5 dark:bg-blue-500/10 text-foreground/90">Example (Tech role): "Built real-time risk monitoring dashboard processing 2.3M daily trades across 14 asset classes; reduced P&L reporting time from 4 hours to 18 minutes"</div>

      <h3>Goldman Sachs India Salary Ranges (2026)</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Level</th><th class="border p-2 text-left">Package</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">Analyst (Finance)</td><td class="border p-2">Entry/MBA</td><td class="border p-2">₹18–30 LPA + bonus</td></tr>
          <tr><td class="border p-2">Associate</td><td class="border p-2">Post-MBA 2-4 yr</td><td class="border p-2">₹30–60 LPA + bonus</td></tr>
          <tr><td class="border p-2">SWE Analyst (Tech)</td><td class="border p-2">Entry</td><td class="border p-2">₹20–40 LPA</td></tr>
          <tr><td class="border p-2">VP</td><td class="border p-2">7-10 years</td><td class="border p-2">₹80–180 LPA + bonus</td></tr>
        </tbody>
      </table>
    `
  },
  meta: {
    bg: 'linear-gradient(135deg,#0866FF,#0052CC)',
    tag: 'FAANG · Meta',
    title: 'The Meta Resume: How to Show Scale, Speed, and Impact That Gets Noticed',
    meta: '💡 AI roles up 300% · Updated June 2026',
    body: `
      <h3>Meta's "Move Fast" Culture and What It Means for Your Resume</h3>
      <p>Meta's original motto was "Move fast and break things." Even after dropping the "break things" part, the move-fast ethos remains core to their culture — and their hiring. Meta recruiters want to see evidence that you ship things quickly, iterate on feedback, and build products that real people use at scale.</p>

      <h3>What Meta Recruiters Look for in 30 Seconds</h3>
      <p>Meta recruiters do a faster initial scan than Google — approximately 20-30 seconds. They're answering: "Has this person built anything real at scale? Can they survive Meta's pace?"</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Scale numbers (users, requests per second, data volume, revenue)</li>
        <li>Products shipped — not just "worked on" but "launched" or "shipped"</li>
        <li>AI/ML experience — especially in 2026, Meta is deeply investing in AI</li>
        <li>Speed signals — "delivered in 2 weeks," "prototyped in 48 hours," "launched MVP in 3 months"</li>
      </ul>

      <h3>Meta's AI Hiring Surge (2026)</h3>
      <p>Meta is one of the most aggressive AI hirers globally in 2025-2026. PyTorch (created by Meta), LLM research, and AI infrastructure roles are paying 30-50% above standard engineering compensation.</p>
      <p>AI keywords that boost Meta applications in 2026: PyTorch, LLaMA, transformer architecture, RLHF, inference optimization, CUDA, distributed training, model serving, RAG, multimodal models</p>

      <h3>Meta India Salary Ranges (2026)</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Level</th><th class="border p-2 text-left">Package</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">SWE E3</td><td class="border p-2">Entry</td><td class="border p-2">₹35–55 LPA</td></tr>
          <tr><td class="border p-2">SWE E4</td><td class="border p-2">Mid</td><td class="border p-2">₹55–95 LPA</td></tr>
          <tr><td class="border p-2">SWE E5</td><td class="border p-2">Senior</td><td class="border p-2">₹95–160 LPA</td></tr>
          <tr><td class="border p-2">ML Engineer</td><td class="border p-2">Mid</td><td class="border p-2">₹60–120 LPA</td></tr>
        </tbody>
      </table>
    `
  },
  apple: {
    bg: 'linear-gradient(135deg,#1D1D1F,#3D3D3F)',
    tag: 'FAANG · Apple',
    title: 'The Apple Resume: Precision, Craft, and How to Show You Think Like Apple',
    meta: '🍎 Most secretive hiring · Updated June 2026',
    body: `
      <h3>Apple's Culture of Secrecy (Including in Hiring)</h3>
      <p>Apple is more secretive about its hiring process than any other major tech company. But through recruiter interviews and candidate reports, a clear picture has emerged: Apple hires for obsessive attention to detail, genuine passion for Apple products, and a track record of excellence in a specific craft.</p>
      <h3>What Apple Looks For That's Different</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Craft over credentials:</strong> A stunning design portfolio can beat an IIT degree. A deeply engineered open source project can beat a Google internship.</li>
        <li><strong>Genuine Apple passion:</strong> Recruiters look for people who use and love Apple products. If you've built apps for Apple platforms, list them prominently with download numbers or user reviews.</li>
        <li><strong>Long-term thinking:</strong> Apple moves slower and more deliberately than Google or Meta. They want people who think deeply, not just quickly.</li>
      </ul>
      <h3>Apple Resume Format</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Ultra-clean, minimal design — Apple is the design company, and a messy resume signals poor taste</li>
        <li>1 page for most roles; 2 pages for senior engineering or hardware</li>
        <li>Portfolio link mandatory for design, UX, and creative roles</li>
        <li>App Store links for any published apps</li>
        <li>Keywords: Swift, Objective-C, Metal, Core ML, ARKit, Xcode, HIG (Human Interface Guidelines)</li>
      </ul>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-blue-500 bg-blue-500/5 dark:bg-blue-500/10 text-foreground/90">💡 If you've ever contributed to open source Apple frameworks or filed detailed, well-documented bug reports in Apple's Feedback Assistant, mention this. Apple engineers know how rare this is and it signals genuine engagement with their ecosystem.</div>
    `
  },
  netflix: {
    bg: 'linear-gradient(135deg,#E50914,#B20710)',
    tag: 'FAANG · Netflix',
    title: 'The Netflix Resume: Only Exceptional. The Keeper Test Applied to Hiring.',
    meta: '💰 Highest paying tech company · Updated June 2026',
    body: `
      <h3>Netflix's "Keeper Test"</h3>
      <p>Netflix CEO Reed Hastings's famous question to managers: "Would I fight to keep this person if they said they were leaving?" Netflix applies this same question to every candidate. They don't hire "good" — only "exceptional." A weak bullet that a good candidate might leave in is actually worse at Netflix than a blank line.</p>
      <h3>Netflix Resume Rules</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Keep your resume shorter rather than longer — cutting weak bullets is a strength signal at Netflix</li>
        <li>Show judgment and taste — not just skills. "Decided to sunset the feature" is as impressive as "built the feature" at Netflix</li>
        <li>Context and scale matter enormously: "built video streaming feature used by 240M+ subscribers" vs "built video streaming feature"</li>
        <li>Freedom and responsibility culture: show autonomy — things you owned and decided alone</li>
      </ul>
      <h3>Netflix Pays the Highest Salaries in Tech</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Level</th><th class="border p-2 text-left">US Total Comp</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">SWE</td><td class="border p-2">Mid</td><td class="border p-2">$300K–$500K/year</td></tr>
          <tr><td class="border p-2">Senior SWE</td><td class="border p-2">Senior</td><td class="border p-2">$500K–$900K/year</td></tr>
          <tr><td class="border p-2">Data Science</td><td class="border p-2">Mid</td><td class="border p-2">$280K–$450K/year</td></tr>
        </tbody>
      </table>
      <p>Netflix India offices are smaller but growing, primarily in Hyderabad and Bangalore with tech and content operations roles.</p>
    `
  },
  nvidia: {
    bg: 'linear-gradient(135deg,#4a7c00,#76B900)',
    tag: 'FAANG · NVIDIA',
    title: 'NVIDIA Resume Guide 2026 — The Hottest Tech Company to Work For',
    meta: '🚀 Hottest employer 2025–2026 · GPU/AI roles booming',
    body: `
      <h3>Why NVIDIA is the Dream Job of 2026</h3>
      <p>NVIDIA's stock grew over 200% in 2024, making it briefly the most valuable company on Earth. Its GPUs power virtually every AI model in existence. NVIDIA is now the most sought-after tech employer for AI/ML engineers globally — and competition for roles has never been higher.</p>
      <h3>What NVIDIA Looks for on Resumes</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>GPU computing knowledge:</strong> CUDA programming, GPU architecture, parallel computing</li>
        <li><strong>AI/ML infrastructure:</strong> Experience with training large models, distributed training, inference optimization</li>
        <li><strong>Systems programming:</strong> C++, CUDA C, low-level performance optimization</li>
        <li><strong>Research contributions:</strong> arXiv papers, conference publications (NeurIPS, ICML, CVPR), open source ML tools</li>
      </ul>
      <h3>NVIDIA Keywords 2026</h3>
      <p>CUDA, TensorRT, Triton, cuDNN, NCCL, RAPIDS, Megatron-LM, NeMo, PyTorch, JAX, HPC, GPU cluster management, model parallelism, quantization, pruning, inference serving</p>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-green-500 bg-green-500/5 dark:bg-green-500/10 text-foreground/90">💡 NVIDIA especially values candidates with published research or significant open source contributions to ML frameworks. If you have any GitHub repos with stars or citations, lead with them prominently.</div>
      <h3>NVIDIA India Presence</h3>
      <p>NVIDIA has a growing R&D center in Pune and Bangalore. India roles focus on GPU driver development, DL framework optimization, and automotive AI (NVIDIA Drive). Compensation is among the highest in Indian tech — ₹40-120 LPA for experienced engineers.</p>
    `
  },
  bcg: {
    bg: 'linear-gradient(135deg,#00A651,#007A3D)',
    tag: 'Consulting · BCG',
    title: 'BCG Resume Guide — Creative Problem-Solving and the Rocket Model Bullet Formula',
    meta: '📊 Consulting guide · <1% acceptance rate · Updated June 2026',
    body: `
      <h3>BCG vs McKinsey — What's Different</h3>
      <p>BCG and McKinsey are both top-tier consulting firms, but BCG skews slightly more toward intellectual curiosity and creative problem-solving versus McKinsey's emphasis on pure prestige and analytical horsepower. BCG also accepts a slightly wider range of undergraduate backgrounds.</p>
      <h3>BCG's "Rocket Model" for Bullet Points</h3>
      <p>BCG coaches describe the ideal bullet as a "rocket" — result first, then what you did to achieve it:</p>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-blue-500 bg-blue-500/5 dark:bg-blue-500/10 text-foreground/90">Result first: "Drove 28% reduction in customer churn by redesigning the onboarding flow based on qualitative user research across 150 interviews and A/B testing 6 variants"</div>
      <h3>BCG Resume Essentials</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>1 page for most candidates; 2 pages only for 8+ years experience</li>
        <li>Education section first — GPA, school, relevant coursework, honors</li>
        <li>Intellectual interests section valued at BCG (shows curiosity) — briefly list 2-3 non-work intellectual pursuits</li>
        <li>Leadership outside of work counts here more than at McKinsey</li>
      </ul>
    `
  },
  deloitte: {
    bg: 'linear-gradient(135deg,#006400,#86BC25)',
    tag: 'Consulting · Deloitte',
    title: 'Deloitte Resume Guide India 2026 — Domain Expertise, Big 4, and Getting In Without IIM',
    meta: '📊 India consulting guide · 80K+ India employees · Updated June 2026',
    body: `
      <h3>Deloitte India — The Numbers</h3>
      <p>Deloitte is the world's largest professional services firm and has over 80,000 employees in India alone. It is also the most accessible top-tier consulting firm — meaning you don't necessarily need an IIM degree to get in, especially for domain-specific roles.</p>
      <h3>Deloitte's Different Hiring Approach</h3>
      <p>Unlike McKinsey/BCG which prioritize prestige, Deloitte heavily weights domain expertise (BFSI, healthcare, supply chain, technology) for consulting roles. A CA with strong BFSI knowledge can get a Deloitte consulting offer over a generic IIM graduate.</p>
      <h3>Resume Tips Specific to Deloitte India</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Mention specific Deloitte practices you're targeting: Strategy & Analytics, Technology Consulting, Risk Advisory, Financial Advisory, or Tax & Regulatory</li>
        <li>CA qualification is extremely valuable for Audit, Financial Advisory, and Tax practices</li>
        <li>Industry certifications (CISA, CISSP, AWS, CFA) are highly valued</li>
        <li>Deloitte uses Workday ATS — clean, single-column formatting essential</li>
        <li>Community and CSR involvement matters at Deloitte more than at other consulting firms</li>
      </ul>
      <h3>Deloitte India Packages (2026)</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Level</th><th class="border p-2 text-left">Package</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">Business Analyst</td><td class="border p-2">Fresher/1 yr</td><td class="border p-2">₹7–12 LPA</td></tr>
          <tr><td class="border p-2">Consultant</td><td class="border p-2">2-4 years</td><td class="border p-2">₹15–25 LPA</td></tr>
          <tr><td class="border p-2">Senior Consultant</td><td class="border p-2">4-7 years</td><td class="border p-2">₹25–40 LPA</td></tr>
          <tr><td class="border p-2">Manager</td><td class="border p-2">7-10 years</td><td class="border p-2">₹40–65 LPA</td></tr>
        </tbody>
      </table>
    `
  },
  'pwc-ey-kpmg': {
    bg: 'linear-gradient(135deg,#D04A02,#a83b02)',
    tag: 'Consulting · Big 4',
    title: 'PwC, EY, and KPMG India Resume Guide 2026 — CA, MBA, and Getting Into Big 4',
    meta: '💼 Big 4 complete guide · Updated June 2026',
    body: `
      <h3>Big 4 Overview: PwC, EY, KPMG</h3>
      <p>Along with Deloitte, PwC, EY, and KPMG audit 100% of Fortune 500 companies. In India, all four Big 4 firms have massive practices employing tens of thousands. Here's how each firm differs in what they look for:</p>
      <h3>PwC India</h3>
      <p><strong>What they want:</strong> Strong analytical skills, CA/CFA for finance roles, technology consulting skills for digital transformation practice. PwC has the strongest brand in tax and regulatory advisory in India.</p>
      <p><strong>Resume tip:</strong> Mention specific PwC service lines: Assurance, Tax, Advisory, or Digital — recruiters screen for service line fit.</p>
      <h3>EY (Ernst & Young)</h3>
      <p><strong>What they want:</strong> EY has the strongest consulting and strategy practice among Big 4 India. They value MBA + domain knowledge. EY GDS (Global Delivery Services) in India is huge — technology and finance roles are common entry points.</p>
      <p><strong>Resume tip:</strong> EY values "EYQ" — entrepreneurial spirit. Show side projects, business ideas, or anything that demonstrates initiative beyond your job description.</p>
      <h3>KPMG India</h3>
      <p><strong>What they want:</strong> KPMG is strongest in audit, risk, and financial services consulting. CA with Big 4 articleship experience is the fastest path. Risk management, cybersecurity, and forensic accounting are growing practice areas.</p>
      <p><strong>Resume tip:</strong> KPMG explicitly values "integrity and ethics" markers — volunteer work, leadership roles, and community involvement carry more weight here than at McKinsey or BCG.</p>
      <h3>Big 4 Salary Ranges India (2026)</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Firm</th><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Package</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">All Big 4</td><td class="border p-2">Associate/Analyst (Fresher)</td><td class="border p-2">₹6–12 LPA</td></tr>
          <tr><td class="border p-2">All Big 4</td><td class="border p-2">Senior Associate (2-4 yr)</td><td class="border p-2">₹12–22 LPA</td></tr>
          <tr><td class="border p-2">All Big 4</td><td class="border p-2">Manager (5-8 yr)</td><td class="border p-2">₹22–40 LPA</td></tr>
          <tr><td class="border p-2">All Big 4</td><td class="border p-2">Senior Manager (8+ yr)</td><td class="border p-2">₹40–70 LPA</td></tr>
        </tbody>
      </table>
    `
  },
  cognizant: {
    bg: 'linear-gradient(135deg,#1464F6,#0A4BC4)',
    tag: 'India IT · Cognizant',
    title: 'Cognizant Resume & Hiring Guide 2026 — GenC, GenC Next, and Communication Round',
    meta: '📈 India IT guide · Updated June 2026',
    body: `
      <h3>Cognizant's Two Hiring Tracks</h3>
      <p>Cognizant hires through two main programs for freshers: GenC (standard) and GenC Next (higher package for better coders). Understanding which track to target is the first decision to make.</p>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Track</th><th class="border p-2 text-left">Focus</th><th class="border p-2 text-left">Package</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">GenC</td><td class="border p-2">General IT training</td><td class="border p-2">₹4 LPA</td></tr>
          <tr><td class="border p-2">GenC Next</td><td class="border p-2">Strong coding skills</td><td class="border p-2">₹4.5 LPA</td></tr>
          <tr><td class="border p-2">GenC Elevate</td><td class="border p-2">Emerging tech specialists</td><td class="border p-2">₹5–6 LPA</td></tr>
        </tbody>
      </table>
      <h3>Communication Round — The Cognizant Differentiator</h3>
      <p>Cognizant has a heavy US and UK client base. Their communication assessment round carries more weight than at TCS or Infosys. They assess spoken English, comprehension, and business communication. If your English communication is strong, Cognizant should be your top target among mass recruiters.</p>
      <h3>Cognizant Resume Format (Workday ATS)</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>One page, clean single-column layout</li>
        <li>Strong English in your objective and descriptions — Cognizant HR reads these</li>
        <li>Projects with clear problem-solution-outcome structure</li>
        <li>Cognizant values cloud and digital skills — Azure, AWS basics, Salesforce, SAP</li>
      </ul>
    `
  },
  accenture: {
    bg: 'linear-gradient(135deg,#5B1F99,#7B2FBE)',
    tag: 'India IT · Accenture',
    title: 'Accenture India Resume Guide 2026 — Communication, Attitude, and the Consulting Entry Path',
    meta: '📈 India IT guide · ₹4.5–6.5 LPA · Updated June 2026',
    body: `
      <h3>Accenture: Where IT Meets Consulting</h3>
      <p>Accenture is positioned between a traditional IT company and a management consulting firm. They serve Fortune 500 clients in strategy, technology, and operations. This means they value communication and consulting mindset alongside technical skills — making them unique among Indian IT mass recruiters.</p>
      <h3>What Accenture Weighs Differently</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Communication (25% of evaluation):</strong> The communication assessment round is an elimination stage. Candidates who clear technical tests but fail communication are rejected. Practice business English extensively.</li>
        <li><strong>Attitude and adaptability:</strong> Accenture explicitly evaluates culture fit and learning agility. Show in your resume that you've adapted to new technologies and environments.</li>
        <li><strong>Client-facing experience:</strong> Any internship or project where you worked with external stakeholders is highly valued.</li>
      </ul>
      <h3>Accenture Packages 2026</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Package</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">Associate Software Engineer (ASE)</td><td class="border p-2">₹4.5 LPA</td></tr>
          <tr><td class="border p-2">Senior ASE (1-2 years)</td><td class="border p-2">₹5.5–6.5 LPA</td></tr>
          <tr><td class="border p-2">Accenture Strategy entry</td><td class="border p-2">₹12–18 LPA (MBA required)</td></tr>
        </tbody>
      </table>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-blue-500 bg-blue-500/5 dark:bg-blue-500/10 text-foreground/90">💡 Accenture hires significantly for non-CS backgrounds — business analysts, HR, finance, and operations roles. If you're a non-CS graduate, Accenture and Cognizant offer the best fresher opportunities among top IT companies.</div>
    `
  },
  jpmorgan: {
    bg: 'linear-gradient(135deg,#003087,#0042A8)',
    tag: 'Finance · JP Morgan',
    title: 'JP Morgan India Resume Guide 2026 — Tech Division, Finance Roles, and What Gets You In',
    meta: '💰 Finance guide · Strong India presence · Updated June 2026',
    body: `
      <h3>JP Morgan in India</h3>
      <p>JP Morgan Chase has one of the largest India operations of any global bank — with 50,000+ employees in Bangalore, Mumbai, and Hyderabad. This makes it one of the most accessible global investment bank brands for Indian job seekers.</p>
      <h3>JP Morgan India Roles: Two Very Different Tracks</h3>
      <p><strong>Technology Track:</strong> JP Morgan India tech is essentially a FAANG-style engineering organization. They interview like Google — data structures, algorithms, system design. Compensation is competitive with top Indian tech companies.</p>
      <p><strong>Finance Track:</strong> Investment banking, corporate finance, risk, and quant roles. MBA (IIM, XLRI, ISB) or CA strongly preferred. Financial modeling, Excel, and domain knowledge critical.</p>
      <h3>JP Morgan India Packages (2026)</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Role</th><th class="border p-2 text-left">Level</th><th class="border p-2 text-left">Package</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">SWE Analyst (Tech)</td><td class="border p-2">Entry</td><td class="border p-2">₹20–40 LPA</td></tr>
          <tr><td class="border p-2">Finance Analyst</td><td class="border p-2">Entry/MBA</td><td class="border p-2">₹15–25 LPA</td></tr>
          <tr><td class="border p-2">Quant Researcher</td><td class="border p-2">Entry/PhD</td><td class="border p-2">₹30–60 LPA</td></tr>
          <tr><td class="border p-2">VP (Tech or Finance)</td><td class="border p-2">7-10 years</td><td class="border p-2">₹80–180 LPA</td></tr>
        </tbody>
      </table>
    `
  },
  'sbi-hdfc': {
    bg: 'linear-gradient(135deg,#00539B,#003A6D)',
    tag: 'Finance · Indian Banks',
    title: 'SBI, HDFC, ICICI, Axis Resume Guide 2026 — The Indian Banking Resume Format',
    meta: '📈 Indian banking guide · Millions of applicants · Updated June 2026',
    body: `
      <h3>Indian Banking Hiring — Different Rules</h3>
      <p>Indian bank hiring is fundamentally different from private sector tech companies. The resume is often less important than your competitive exam score (IBPS, SBI PO, IBPS Clerk), and the format expected is more traditional and detailed.</p>
      <h3>Resume Format for Indian Government/PSU Banks (SBI, Bank of Baroda)</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Include full address, date of birth, and photograph (these are expected here unlike private sector)</li>
        <li>IBPS/SBI exam score prominently listed</li>
        <li>Academic percentages for all years</li>
        <li>Any banking-related certifications: JAIIB, CAIIB, NISM</li>
        <li>Language proficiency (regional language is valued for branch operations)</li>
      </ul>
      <h3>Resume Format for Private Banks (HDFC, ICICI, Axis, Kotak)</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>More similar to standard private sector format</li>
        <li>MBA (Finance) or CA strongly preferred for roles above bank teller/associate</li>
        <li>Sales metrics critically important for relationship manager roles</li>
        <li>Portfolio size, AUM managed, revenue generated from client relationships</li>
        <li>AMFI/NISM certifications for mutual fund/wealth management roles</li>
      </ul>
      <h3>Salary Ranges (2026)</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Bank / Role</th><th class="border p-2 text-left">Package</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">SBI PO</td><td class="border p-2">₹7–8 LPA (with perks)</td></tr>
          <tr><td class="border p-2">HDFC Relationship Manager</td><td class="border p-2">₹6–12 LPA + incentives</td></tr>
          <tr><td class="border p-2">ICICI Management Trainee</td><td class="border p-2">₹7–10 LPA</td></tr>
          <tr><td class="border p-2">Axis Bank IT Officer</td><td class="border p-2">₹8–14 LPA</td></tr>
        </tbody>
      </table>
    `
  },
  'swiggy-zomato': {
    bg: 'linear-gradient(135deg,#FC8019,#e06a10)',
    tag: 'Startup · Food Tech',
    title: 'Swiggy & Zomato Resume Guide 2026 — Metrics at Scale and the Startup Mindset',
    meta: '🚀 India startup guide · Updated June 2026',
    body: `
      <h3>What Swiggy and Zomato Want</h3>
      <p>Both Swiggy and Zomato have grown from startups to massive operations companies. They hire for execution speed, data-driven thinking, and the ability to operate at Indian consumer scale (hundreds of millions of orders).</p>
      <h3>The Metrics That Matter at Food-Tech</h3>
      <p>For Product, Engineering, and Ops roles, show metrics that resonate with food-tech business models:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>GMV (Gross Merchandise Value) impacted</li>
        <li>Delivery time improvements</li>
        <li>Customer acquisition cost (CAC) and lifetime value (LTV)</li>
        <li>Conversion rate improvements</li>
        <li>Restaurant onboarding or partner retention metrics</li>
        <li>Orders per hour, fulfillment rate, cancellation rate</li>
      </ul>
      <h3>Resume Tips for Swiggy/Zomato</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Side projects and products you've built are valued more than grades</li>
        <li>Show bias for action — "shipped in 2 weeks," "A/B tested within 48 hours"</li>
        <li>Consumer apps or marketplace experience is a strong differentiator</li>
        <li>Cross-functional work (coordinating between tech, ops, and marketing) is highly valued</li>
        <li>Both companies use Workday ATS — standard, clean format</li>
      </ul>
    `
  },
  'razorpay-cred': {
    bg: 'linear-gradient(135deg,#3395FF,#0052CC)',
    tag: 'Startup · Fintech',
    title: 'Razorpay, CRED, PhonePe Resume Guide 2026 — Ownership and the Fintech Mindset',
    meta: '🚀 Fintech startup guide · Updated June 2026',
    body: `
      <h3>The Fintech Startup Difference</h3>
      <p>Indian fintech companies — Razorpay, CRED, PhonePe, BharatPe, Zepto — hire very differently from both IT services companies and product-focused giants like Swiggy. They want candidates who understand payments infrastructure, financial compliance, and user trust simultaneously.</p>
      <h3>CRED: India's Most Selective Startup</h3>
      <p>CRED has famously rejected IIT/IIM graduates for not demonstrating enough ownership and impact. Their hiring bar is comparable to mid-level FAANG. What they want:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Complete ownership of a product or feature — not just "contributed to"</li>
        <li>Evidence of good taste and product thinking, not just execution</li>
        <li>Written communication skills (they evaluate your resume writing style)</li>
        <li>Projects or products with visible, public user impact</li>
      </ul>
      <h3>Razorpay and PhonePe: Payments Infrastructure Focus</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Payments systems knowledge: UPI, payment gateway architecture, PCI DSS, settlement systems</li>
        <li>Financial compliance vocabulary: KYC, AML, RBI guidelines</li>
        <li>High-reliability engineering: 99.99% uptime, failover systems, distributed transactions</li>
      </ul>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-amber-500 bg-amber-500/5 dark:bg-amber-500/10 text-foreground/90">⚠️ CRED explicitly looks for what decisions you made independently — not what team you were part of. Rewrite every bullet to show personal decision-making, not group participation.</div>
    `
  },
  flipkart: {
    bg: 'linear-gradient(135deg,#2874F0,#1a5cc4)',
    tag: 'Startup · E-Commerce',
    title: 'Flipkart Resume Guide 2026 — FAANG-Style for Tech, Supply Chain for Business',
    meta: '🛒 India e-commerce guide · Updated June 2026',
    body: `
      <h3>Flipkart After Walmart: What Changed</h3>
      <p>After Walmart's $16B acquisition, Flipkart operates with both startup agility and corporate rigor. Engineering teams follow FAANG-style interviews. Business teams now have Walmart's global supply chain knowledge available. This creates two very different hiring environments within the same company.</p>
      <h3>Flipkart Engineering (Tech Roles)</h3>
      <p>Flipkart engineering interviews are essentially Google/Amazon style — data structures, algorithms, system design, and behavioral rounds. Your resume needs to reflect this:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Scale: billions of page views, millions of transactions, 100K concurrent users</li>
        <li>Tech stack: Java, Kotlin, Go, Python, MySQL, Kafka, Cassandra, Redis</li>
        <li>Strong DSA and system design signals</li>
        <li>Campus hiring: IIT, NIT, BITS Pilani most common sources</li>
      </ul>
      <h3>Flipkart Business/Product Roles</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>E-commerce metrics: conversion rate, GMV, AOV, NPS, seller NPS</li>
        <li>Supply chain: inventory turnover, fulfillment time, return rate</li>
        <li>MBA from IIM/XLRI/ISB for senior business roles strongly preferred</li>
        <li>Walmart global experience now valued — supply chain, retail analytics</li>
      </ul>
    `
  },
  'mnc-general': {
    bg: 'linear-gradient(135deg,#6366F1,#4F46E5)',
    tag: 'MNCs in India',
    title: 'IBM, SAP, Oracle, Salesforce, Adobe India Resume Guide 2026',
    meta: '🌐 MNC guide · Platform certifications = fast track · Updated June 2026',
    body: `
      <h3>How MNCs in India Hire</h3>
      <p>Global MNCs with large India centers (IBM, SAP, Oracle, Salesforce, Adobe, Cisco) follow standardized global ATS processes — typically Workday, Taleo, or SAP SuccessFactors. They reward candidates who are certified on their own platforms heavily.</p>
      <h3>Platform-Specific Certifications That Get You Hired</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Salesforce:</strong> Salesforce Certified Administrator, Platform Developer — these are literally mentioned in job descriptions as requirements</li>
        <li><strong>SAP:</strong> SAP HANA, SAP S/4HANA, SAP SD/MM/FI certifications</li>
        <li><strong>Oracle:</strong> Oracle Cloud Infrastructure, Oracle Database certifications</li>
        <li><strong>Adobe:</strong> Adobe Experience Cloud, Marketo, Creative Cloud expertise</li>
        <li><strong>IBM:</strong> IBM Cloud, IBM Watson, Red Hat certifications</li>
      </ul>
      <h3>General MNC Resume Tips</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Global culture fit signals: international project experience, cross-cultural teams, English fluency</li>
        <li>Specific software versions matter: "SAP S/4HANA 2023" is more credible than "SAP experience"</li>
        <li>Client geography: US, UK, or EU client work is consistently valued</li>
        <li>All use enterprise ATS — clean single-column format always</li>
      </ul>
      <h3>MNC India Packages (2026)</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Company</th><th class="border p-2 text-left">Fresher Package</th><th class="border p-2 text-left">Mid-level (5 yr)</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">IBM</td><td class="border p-2">₹4–8 LPA</td><td class="border p-2">₹15–30 LPA</td></tr>
          <tr><td class="border p-2">SAP</td><td class="border p-2">₹8–14 LPA</td><td class="border p-2">₹20–40 LPA</td></tr>
          <tr><td class="border p-2">Oracle</td><td class="border p-2">₹10–20 LPA</td><td class="border p-2">₹25–50 LPA</td></tr>
          <tr><td class="border p-2">Salesforce</td><td class="border p-2">₹12–22 LPA</td><td class="border p-2">₹30–60 LPA</td></tr>
          <tr><td class="border p-2">Adobe</td><td class="border p-2">₹15–25 LPA</td><td class="border p-2">₹30–65 LPA</td></tr>
        </tbody>
      </table>
    `
  },
  'ai-skills-trend': {
    bg: 'linear-gradient(135deg,#0F172A,#1E3A8A)',
    tag: '2026 Trends · AI Skills',
    title: "AI Skills on Your Resume in 2026: What LinkedIn's Report Actually Says",
    meta: '📈 LinkedIn Skills on the Rise 2026 · Updated June 2026',
    body: `
      <h3>LinkedIn's 2026 Skills on the Rise Report: Key Findings</h3>
      <p>LinkedIn's 2026 global report analyzed millions of job postings and hired profiles to identify the skills rising fastest in employer demand. The findings are clear: AI skills are no longer a differentiator — they're becoming a baseline expectation.</p>
      <h3>The Fastest-Growing Skills of 2026 (LinkedIn Data)</h3>
      <ol class="list-decimal pl-5 space-y-2 my-4">
        <li><strong>AI Engineering & Implementation</strong> — prompt engineering, MLOps, model fine-tuning, LLM deployment</li>
        <li><strong>AI Business Strategy</strong> — AI value proposition, responsible AI, AI for business transformation</li>
        <li><strong>Cybersecurity & Risk Management</strong> — as AI adoption grows, so do security concerns</li>
        <li><strong>Financial Operations & Analysis</strong> — AI-augmented financial modeling and analytics</li>
        <li><strong>Leadership & People Management</strong> — managing AI-augmented teams</li>
      </ol>
      <h3>What "AI Skills" Actually Means on a Resume in 2026</h3>
      <p>Simply writing "AI skills" or "familiar with AI" on your resume is now meaningless. LinkedIn executives and hiring managers want specificity:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Tools:</strong> ChatGPT, Claude, Gemini, Midjourney, Runway, Perplexity — list specific tools you've used professionally</li>
        <li><strong>Technical:</strong> PyTorch, LangChain, RAG systems, vector databases (Pinecone, Weaviate), fine-tuning, RLHF</li>
        <li><strong>Applied:</strong> "Used ChatGPT API to automate customer support flow, reducing ticket volume by 34%"</li>
        <li><strong>Forward Deployed Engineering:</strong> Job postings grew 800%+ in 2025. If you deploy AI into enterprise environments, this is the hottest title in tech.</li>
      </ul>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-green-500 bg-green-500/5 dark:bg-green-500/10 text-foreground/90">✅ Best practice: Add a "Digital & AI Skills" section to your resume specifically if you have 3+ relevant tools or frameworks to list. Don't bury AI skills in a generic skills section.</div>
    `
  },
  'skills-first': {
    bg: 'linear-gradient(135deg,#0D9488,#0F766E)',
    tag: '2026 Trends · Skills-First Hiring',
    title: 'Skills-First Hiring 2026: Why 41% of Employers Are Moving Away From Credential-First Screening',
    meta: '📊 Hiring Trends Report 2026 · Willo Research',
    body: `
      <h3>The Willo Hiring Trends Report 2026 — Key Data</h3>
      <p>Willo's 2026 Hiring Trends Report (based on 100+ hiring professionals globally including Toyota, Microsoft, NHS) found a dramatic shift in how employers evaluate candidates:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Only <strong>37%</strong> of employers now view credentials and learning history as the most reliable talent indicators</li>
        <li><strong>41%</strong> of employers are actively moving away from resume-first hiring</li>
        <li><strong>10%</strong> have largely replaced resumes with skills-based and scenario-driven assessments</li>
        <li><strong>15%</strong> are actively exploring resume alternatives</li>
      </ul>
      <h3>What This Means for Your Resume in 2026</h3>
      <p>Your resume is still the starting point for most hiring processes — but its dominance is weakening. The most successful candidates in 2026 treat their resume as part of a broader evidence package:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Resume</strong> → gets you past initial screening</li>
        <li><strong>LinkedIn profile</strong> → validates and extends your resume narrative</li>
        <li><strong>GitHub / Portfolio</strong> → shows actual skills, not just claimed skills</li>
        <li><strong>Skills assessments</strong> → increasingly used to verify resume claims</li>
        <li><strong>Video intros</strong> → used by 28% of employers in 2026 for culture fit screening</li>
      </ul>
      <h3>The Skills-First Resume Format (Recommended for 2026)</h3>
      <p>Leading with a strong skills section before your work experience is increasingly accepted and often preferred — especially for technical roles where skills change faster than job titles.</p>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-blue-500 bg-blue-500/5 dark:bg-blue-500/10 text-foreground/90">💡 Add a "Core Competencies" or "Technical Skills" section immediately after your resume summary, before your work experience. This ensures your most relevant skills are visible within the first 5 seconds of a resume scan.</div>
    `
  },
  'ai-resume-screening': {
    bg: 'linear-gradient(135deg,#7C3AED,#5B21B6)',
    tag: '2026 Trends · AI Screening',
    title: "AI Reviews Your Resume Before Any Human Does: What LinkedIn's VP of Talent Says",
    meta: '📈 LinkedIn CNBC report · January 2026',
    body: `
      <h3>AI is Now the First Reviewer of Your Application</h3>
      <p>In a January 2026 CNBC interview, LinkedIn's VP of Talent confirmed: "2026 is the year of more widespread adoption of AI tools, particularly in hiring. AI can help recruiters speed up manual tasks such as going through very high volumes of applications and sifting through resumes."</p>
      <h3>The Hidden Gem Effect — and the Generic Application Trap</h3>
      <p>AI hiring tools can work in your favor: "60% of recruiters say AI is helping them find hidden gems — people they would have overlooked in manual search." But AI also detects and flags generic, mass-applied resumes:</p>
      <p>LinkedIn's VP was explicit: <em>"Applying for roles that genuinely match your skills will always outperform sending lots of generic applications, for both AI and humans."</em></p>
      <h3>What This Means Practically for Your Job Search in 2026</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Stop mass applying.</strong> Sending 100 identical resumes gets you nowhere — AI systems now flag this pattern and may deprioritize your applications</li>
        <li><strong>Tailor for each application.</strong> Spend 10 minutes updating your summary and top 3 skills for each role. This is now more important than ever</li>
        <li><strong>Match keywords exactly.</strong> AI systems compare your resume to the job description at a word level — synonyms don't always count</li>
        <li><strong>Optimize your LinkedIn profile.</strong> Many AI screening tools cross-reference LinkedIn against your resume — inconsistencies flag your application</li>
      </ul>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-green-500 bg-green-500/5 dark:bg-green-500/10 text-foreground/90">✅ FreeResumeKit's AI helps you create a base resume that you can quickly customize per application — keeping your core strong while adapting keywords and summary for each role. Free, no sign-up.</div>
    `
  },
  'personal-branding': {
    bg: 'linear-gradient(135deg,#E11D48,#9F1239)',
    tag: '2026 Trends · Personal Branding',
    title: 'Personal Branding is Now Part of Your Resume: LinkedIn, GitHub, and Portfolio Links',
    meta: '📈 71% higher interview rate · Updated June 2026',
    body: `
      <h3>Your Online Presence Is Now Part of Your Resume</h3>
      <p>Research confirms: resumes with LinkedIn profiles, GitHub links, or portfolio URLs have a <strong>71% higher chance</strong> of landing an interview than resumes without them. In 2026, your online presence is not a supplement to your resume — it IS part of your resume.</p>
      <h3>What to Link and What Not To</h3>
      <table class="w-full border-collapse my-4 text-sm">
        <thead>
          <tr class="bg-muted"><th class="border p-2 text-left">Link Type</th><th class="border p-2 text-left">Include If</th><th class="border p-2 text-left">Benefit</th></tr>
        </thead>
        <tbody>
          <tr><td class="border p-2">LinkedIn Profile</td><td class="border p-2">Always</td><td class="border p-2">Validates every claim on your resume</td></tr>
          <tr><td class="border p-2">GitHub Profile</td><td class="border p-2">You have 3+ real projects with commits</td><td class="border p-2">Shows real code, real contributions</td></tr>
          <tr><td class="border p-2">Portfolio Website</td><td class="border p-2">Design, UX, content, or creative roles</td><td class="border p-2">Shows work that can't fit on a resume</td></tr>
          <tr><td class="border p-2">Kaggle Profile</td><td class="border p-2">Data science/ML roles with competitions</td><td class="border p-2">Shows competitive ML skills with proof</td></tr>
          <tr><td class="border p-2">Medium/Dev.to Blog</td><td class="border p-2">You've written 3+ technical articles</td><td class="border p-2">Shows communication and thought leadership</td></tr>
          <tr><td class="border p-2">Personal social media</td><td class="border p-2">Never (unless it's professionally curated)</td><td class="border p-2">N/A</td></tr>
        </tbody>
      </table>
      <h3>LinkedIn Profile Optimization for 2026</h3>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Profile photo: professional, clear, well-lit (profiles with photos get 21x more views)</li>
        <li>Headline: not just your job title — add your value proposition: "SWE @ TCS | Python & React | Building scalable APIs"</li>
        <li>Open to Work: turn this on — 3x more recruiter messages</li>
        <li>Skills: add 5+ relevant skills and get endorsed by colleagues</li>
        <li>Featured section: add your best project, article, or achievement as a featured item</li>
      </ul>
      <div class="my-6 p-4 rounded-r-lg border-l-4 border-blue-500 bg-blue-500/5 dark:bg-blue-500/10 text-foreground/90">💡 Make sure your LinkedIn profile and resume tell the same story — dates, job titles, and company names must match exactly. AI screening tools cross-reference both documents.</div>
    `
  }
};
