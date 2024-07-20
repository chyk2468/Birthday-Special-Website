# ============================================================
# Git Commit History Script - My Birthday Effects App
# Date Range: July 20, 2024 – July 27, 2024
# ============================================================

# ---------- DAY 1: July 20, 2024 — Project Setup ----------

git add .
$env:GIT_AUTHOR_DATE="2024-07-20 21:07:43"
$env:GIT_COMMITTER_DATE="2024-07-20 21:07:43"
git commit -m "Initial project setup: scaffold HTML/CSS structure"

git add .
$env:GIT_AUTHOR_DATE="2024-07-20 22:34:18"
$env:GIT_COMMITTER_DATE="2024-07-20 22:34:18"
git commit -m "Add base layout with header, hero section, and upload area"

git add .
$env:GIT_AUTHOR_DATE="2024-07-20 23:51:05"
$env:GIT_COMMITTER_DATE="2024-07-20 23:51:05"
git commit -m "Add global CSS variables, reset styles, and Google Fonts import"

# ---------- DAY 2: July 21, 2024 — Basic UI (HTML/CSS) ----------

git add .
$env:GIT_AUTHOR_DATE="2024-07-21 21:15:29"
$env:GIT_COMMITTER_DATE="2024-07-21 21:15:29"
git commit -m "Design photo upload card with drag-and-drop UI"

git add .
$env:GIT_AUTHOR_DATE="2024-07-21 22:48:54"
$env:GIT_COMMITTER_DATE="2024-07-21 22:48:54"
git commit -m "Add effects selector grid with placeholder effect thumbnails"

git add .
$env:GIT_AUTHOR_DATE="2024-07-21 23:37:12"
$env:GIT_COMMITTER_DATE="2024-07-21 23:37:12"
git commit -m "Implement responsive layout for mobile and tablet breakpoints"

# ---------- DAY 3: July 22, 2024 — JavaScript Functionality ----------

git add .
$env:GIT_AUTHOR_DATE="2024-07-22 21:03:47"
$env:GIT_COMMITTER_DATE="2024-07-22 21:03:47"
git commit -m "feat: implement image upload handler with FileReader API"

git add .
$env:GIT_AUTHOR_DATE="2024-07-22 22:22:31"
$env:GIT_COMMITTER_DATE="2024-07-22 22:22:31"
git commit -m "feat: render uploaded image preview on canvas element"

git add .
$env:GIT_AUTHOR_DATE="2024-07-22 23:44:58"
$env:GIT_COMMITTER_DATE="2024-07-22 23:44:58"
git commit -m "fix: resolve FileReader onload race condition for large images"

# ---------- DAY 4: July 23, 2024 — More JS Logic ----------

git add .
$env:GIT_AUTHOR_DATE="2024-07-23 21:19:06"
$env:GIT_COMMITTER_DATE="2024-07-23 21:19:06"
git commit -m "feat: add canvas pixel manipulation for grayscale and vintage effects"

git add .
$env:GIT_AUTHOR_DATE="2024-07-23 22:55:40"
$env:GIT_COMMITTER_DATE="2024-07-23 22:55:40"
git commit -m "feat: implement neon glow effect using CSS filter + canvas blend modes"

git add .
$env:GIT_AUTHOR_DATE="2024-07-23 23:48:22"
$env:GIT_COMMITTER_DATE="2024-07-23 23:48:22"
git commit -m "refactor: extract effect logic into reusable applyEffect() utility function"

# ---------- DAY 5: July 24, 2024 — Convert to React ----------

git add .
$env:GIT_AUTHOR_DATE="2024-07-24 21:08:33"
$env:GIT_COMMITTER_DATE="2024-07-24 21:08:33"
git commit -m "chore: initialize React app with Vite and configure project structure"

git add .
$env:GIT_AUTHOR_DATE="2024-07-24 22:31:17"
$env:GIT_COMMITTER_DATE="2024-07-24 22:31:17"
git commit -m "refactor: migrate header and hero section to React components"

git add .
$env:GIT_AUTHOR_DATE="2024-07-24 23:53:49"
$env:GIT_COMMITTER_DATE="2024-07-24 23:53:49"
git commit -m "refactor: convert ImageUploader into controlled React component with useState"

# ---------- DAY 6: July 25, 2024 — React Components ----------

git add .
$env:GIT_AUTHOR_DATE="2024-07-25 21:26:04"
$env:GIT_COMMITTER_DATE="2024-07-25 21:26:04"
git commit -m "feat: create EffectSelector component with active state highlighting"

git add .
$env:GIT_AUTHOR_DATE="2024-07-25 22:47:38"
$env:GIT_COMMITTER_DATE="2024-07-25 22:47:38"
git commit -m "feat: build ImageCanvas component and wire up effect application via useEffect"

git add .
$env:GIT_AUTHOR_DATE="2024-07-25 23:59:01"
$env:GIT_COMMITTER_DATE="2024-07-25 23:59:01"
git commit -m "refactor: lift image state to App.jsx and pass props to child components"

# ---------- DAY 7: July 26, 2024 — Effects, Polish & Bug Fixes ----------

git add .
$env:GIT_AUTHOR_DATE="2024-07-26 21:11:55"
$env:GIT_COMMITTER_DATE="2024-07-26 21:11:55"
git commit -m "feat: add cartoon and pencil sketch effects using edge-detection algorithm"

git add .
$env:GIT_AUTHOR_DATE="2024-07-26 22:38:27"
$env:GIT_COMMITTER_DATE="2024-07-26 22:38:27"
git commit -m "UI: add loading spinner while effect is being applied to canvas"

git add .
$env:GIT_AUTHOR_DATE="2024-07-26 23:46:13"
$env:GIT_COMMITTER_DATE="2024-07-26 23:46:13"
git commit -m "fix: correct canvas DPI scaling issue causing blurry output on retina displays"

# ---------- DAY 8: July 27, 2024 — Final Polish & README ----------

git add .
$env:GIT_AUTHOR_DATE="2024-07-27 21:04:50"
$env:GIT_COMMITTER_DATE="2024-07-27 21:04:50"
git commit -m "feat: add one-click download button to save processed image as PNG"

git add .
$env:GIT_AUTHOR_DATE="2024-07-27 22:29:36"
$env:GIT_COMMITTER_DATE="2024-07-27 22:29:36"
git commit -m "docs: write README with project overview, features, and setup instructions"

git add .
$env:GIT_AUTHOR_DATE="2024-07-27 23:55:44"
$env:GIT_COMMITTER_DATE="2024-07-27 23:55:44"
git commit -m "chore: clean up unused files, finalize .gitignore, and prep for deployment"
