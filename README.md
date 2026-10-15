# Udaan (उड़ान) — Your Future, Your Way

> **Citibank Ada Lovelace Hackathon Project**  
> *Offline-First Career Discovery & Learning-to-Livelihood Platform for Rural Indian Students & Village Facilitators.*

[![Hackathon](https://img.shields.io/badge/Hackathon-Citibank%20Ada%20Lovelace-176B5B.svg)](https://github.com/Atharv-start/udaan-rural-career-discovery)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20Web%20Prototype-21866F.svg)](https://github.com/Atharv-start/udaan-rural-career-discovery)
[![Design](https://img.shields.io/badge/Design-Material%203-F2B544.svg)](https://m3.material.io/)
[![License](https://img.shields.io/badge/License-Proprietary%20%2F%20Hackathon-slate.svg)](#)

---

## Table of Contents

- [Problem Statement](#problem-statement)
- [Target Users](#target-users)
- [Current Development Status](#current-development-status)
- [Current Features (Implemented)](#current-features-implemented)
- [Planned Capabilities (Roadmap)](#planned-capabilities-roadmap)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Android Setup & Architecture](#android-setup--architecture)
- [Build & Run Instructions](#build--run-instructions)
- [Future Backend & LLM Integration](#future-backend--llm-integration)
- [Team Collaboration](#team-collaboration)

---

## Problem Statement

Millions of secondary and higher-secondary students across rural and semi-urban India face significant barriers when transitioning from education to livelihoods:
1. **Severe Information Asymmetry**: Limited awareness of vocational careers, polytechnic diplomas, ITIs, government apprenticeships, and scholarships outside conventional degrees.
2. **Connectivity Constraints**: Intermittent 2G/3G connectivity and limited data affordability prevent continuous reliance on cloud-heavy web portals.
3. **Language Barriers**: Career guidance and scholarship portals are predominantly in complex English or formal jargon.
4. **Lack of Personalization & Trust**: Generic aptitude tests provide opaque, "black-box" scores without explaining *why* a particular path suits the student or how their family can afford it.

**Udaan** solves this by delivering an accessible, explainable, offline-first career guidance companion designed for rural students and village community facilitators (such as teachers, CSC operators, and NGO field coordinators).

---

## Target Users

1. **Rural & Semi-Urban Students (Grades 8–12 & High School Graduates)**
   - Seeking practical, affordable pathways (vocational training, ITI certifications, polytechnics, scholarships, and degree tracks).
   - Benefiting from bilingual interface support (English and Hindi), low-bandwidth operation, and transparent career recommendations.
2. **Village Facilitators & Community Mentors**
   - Teachers, Pradhans, CSC VLEs, and NGO workers guiding multiple students.
   - Requiring roster management, offline note-taking, and tailored recommendations for their student cohort.

---

## Current Development Status

- **Web Application & UI Prototype**: Fully implemented and validated. Built with React 19, TypeScript, Tailwind CSS, and Lucide Icons, modeling the complete 13-screen mobile experience with an interactive device simulator and offline toggling.
- **Explainable Recommendation Engine**: Fully implemented rule-based transparent matching algorithm that scores vocational and academic careers and produces structured, human-readable explanations.
- **Native Android Codebase**: Initial native Android project scaffolded in `android/` with Jetpack Compose, Material 3 theme tokens, MainActivity, Android Manifest, and repository contracts. Full root Gradle wrapper and Room database integration are scheduled for the next phase.

---

## Current Features (Implemented)

### 1. Dual Persona Workflows
- **Student Persona**: Personalized dashboard, questionnaire, career catalog, learning paths, and local opportunities.
- **Village Facilitator Persona**: Student roster management, individual student profile deep dives, assessment tracking, and mentor notes.

### 2. 13 Interactive Screens
1. **Screen 1 — Language Selection**: Switch seamlessly between English and Hindi (`हिंदी`).
2. **Screen 2 — Role Selection**: Guided entry for Students or Village Facilitators.
3. **Screen 3 — Profile Setup**: Captures schooling level, stream, subjects, skills, interests, and district location.
4. **Screen 4 — Student Home**: Personalized hub with career discovery shortcuts, bookmark summaries, and network status badge.
5. **Screen 5 — Career Discovery Questionnaire**: Interactive interest assessment capturing work domains and vocational preferences.
6. **Screen 6 — Career Results**: Ranked career matches with percentage indicators and pathway tags.
7. **Screen 7 — Career Details**: In-depth profiles covering roles, duration, eligibility, government support, and salary projections.
8. **Screen 8 — Learning Path Roadmap**: Step-by-step milestone progression from 10th/12th grade to sustainable livelihood.
9. **Screen 9 — Opportunity Finder**: Directory of verified local ITIs, polytechnics, government schemes, and scholarships with offline bookmarking.
10. **Screen 10 — Explainable AI Recommendation Breakdown**: Complete transparent view of *why* a career was recommended (rules triggered, matched interests).
11. **Screen 11 — Facilitator Home**: Cohort monitoring, guidance status, and quick student search.
12. **Screen 12 — Facilitator Student Detail**: Detailed breakdown of student assessment results, mentor notes, and intervention planning.
13. **Screen 13 — Profile & Accessibility Settings**: Offline simulation switch, high-contrast settings, and sync indicators.

### 3. Transparent Recommendation Engine (`recommendationEngine.ts`)
- Pure, explainable scoring engine evaluating student signals against curated career datasets without black-box opacity.
- Generates bilingual justification tags explaining the exact matching logic to the user.

### 4. In-App Kotlin Architecture Explorer
- Interactive viewer within the prototype showcasing the native Android Jetpack Compose code, Material 3 design tokens, and domain repository contracts.

---

## Planned Capabilities (Roadmap)

- [ ] **Native Gradle Build Wrapper**: Root Gradle wrapper configuration, Version Catalog (`libs.versions.toml`), and automated APK build pipeline.
- [ ] **Android Jetpack Room Persistence**: Local SQLite database storing career profiles, bookmarks, and facilitator notes completely offline.
- [ ] **Server-Side Gemini 2.0 Integration**: Conversational vernacular voice guidance and localized question answering.
- [ ] **WorkManager Delta Sync**: Automated synchronization of offline student records with backend services once connectivity is restored.
- [ ] **Regional Voice Narration**: Offline text-to-speech for non-literate and low-literacy users.

---

## Technology Stack

### Mobile & UI Prototype
- **Framework**: React 19, TypeScript
- **Styling**: Tailwind CSS, Material Design 3 Color Tokens
- **Icons**: Lucide React
- **Build Tool**: Vite 8

### Native Android Architecture
- **Language**: Kotlin 2.0+
- **UI Toolkit**: Jetpack Compose & Material 3
- **Navigation**: Jetpack Navigation Compose
- **Target SDK**: Android 35 (Vanilla Ice Cream) | **Min SDK**: Android 24 (Nougat)
- **Architecture Pattern**: Single-Activity, Clean Architecture (UI -> ViewModel -> Repository -> Local/Remote Data Source)

---

## Project Structure

```text
udaan-rural-career-discovery/
├── .env.example                       # Template for environment configuration
├── .gitignore                         # Comprehensive Git exclusions (Android, Node, OS, secrets)
├── CONTRIBUTING.md                    # 10 team collaboration guidelines & PR process
├── README.md                          # Repository documentation & architecture guide
├── index.html                         # Prototype entry point
├── metadata.json                      # AI Studio application metadata
├── package.json                       # Dependencies & scripts
├── tsconfig.json                      # TypeScript configuration
├── vite.config.ts                     # Vite build configuration
│
├── android/                           # Native Android Application Source
│   └── app/
│       ├── build.gradle.kts           # App-level Gradle build configuration
│       └── src/main/
│           ├── AndroidManifest.xml    # App manifest with permissions & launcher activity
│           └── java/com/udaan/app/
│               ├── MainActivity.kt    # Single-activity Jetpack Compose root
│               └── ui/theme/
│                   └── Theme.kt       # Material 3 color palette & theme composable
│
└── src/                               # Interactive Prototype & Core Logic
    ├── App.tsx                        # Root layout, navigation router & device frame toggle
    ├── main.tsx                       # React application bootstrap
    ├── index.css                      # Global Tailwind and font styles
    ├── context/
    │   └── AppContext.tsx             # Shared state (language, user profile, offline mode)
    ├── data/
    │   ├── careersData.ts             # Comprehensive curated career dataset
    │   ├── opportunitiesData.ts       # ITIs, scholarships, and vocational schemes
    │   └── studentsData.ts            # Mock student cohort for facilitator workflow
    ├── services/
    │   ├── recommendationEngine.ts    # Explainable recommendation algorithms
    │   └── speechService.ts          # Speech synthesis interface
    ├── types/
    │   └── index.ts                   # Core data interfaces & TypeScript models
    └── components/
        ├── android-code/              # Kotlin Architecture Code Viewer
        ├── common/                    # Reusable Material 3 UI widgets
        └── screens/                   # 13 application screens (Screen1 to Screen13)
```

---

## Android Setup & Architecture

The native Android layer is located in the `android/` directory and follows standard Google Android architecture guidelines:

- **Single-Activity Architecture**: Driven by `MainActivity.kt` with edge-to-edge support enabled.
- **Jetpack Compose & Material 3**: UI components utilize the custom `UdaanTheme` matching rural-friendly color schemes (Deep Teal, Soft Mint, Warm Cream, and Saffron).
- **Offline-First Contract**: `android/app/build.gradle.kts` specifies dependencies for Room (`androidx.room.runtime`, `androidx.room.ktx`) and Navigation Compose.

To open the Android project in Android Studio:
1. Launch **Android Studio Ladybug (or newer)**.
2. Select **Open** and choose the `android/` directory.
3. Allow Gradle to synchronize dependencies.

---

## Build & Run Instructions

### Running the Web Prototype Locally

**Prerequisites**:
- Node.js (v18 or higher recommended; v22 verified)
- npm (v9 or higher)

```bash
# 1. Clone the repository
git clone https://github.com/Atharv-start/udaan-rural-career-discovery.git
cd udaan-rural-career-discovery

# 2. Install dependencies (use --legacy-peer-deps if npm reports peer conflicts)
npm install --legacy-peer-deps

# 3. Start the development server
npm run dev

# 4. Open in browser:
# Navigate to http://localhost:3000
```

### Production Build & Linting

```bash
# Type check and lint
npm run lint

# Compile production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## Future Backend & LLM Integration

When connecting the Gemini API for natural-language vernacular explanations:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Insert your Google AI Studio Gemini API key:
   ```env
   GEMINI_API_KEY="AIzaSy..."
   ```
3. In server-side endpoints or Cloud Functions, initialize `@google/genai`:
   ```typescript
   import { GoogleGenAI } from '@google/genai';
   const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
   ```
4. **Security Notice**: Never expose your `GEMINI_API_KEY` in client-side bundles or commit it to GitHub.

---

## Team Collaboration

Please review [CONTRIBUTING.md](CONTRIBUTING.md) before submitting code.

1. Create a dedicated branch for every feature (`git checkout -b feature/<name>`).
2. Verify local builds pass (`npm run build`).
3. Submit a Pull Request for review by teammates.
4. Maintain UI consistency with the established Material 3 palette.
