import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { M3TopAppBar, M3Button, AndroidStatusBar } from '../common/MaterialComponents';
import { Copy, Check, Code, FileText, CheckCircle2 } from 'lucide-react';

const KOTLIN_FILES = [
  {
    name: 'MainActivity.kt',
    description: 'Single-Activity Architecture with Navigation Compose & M3 Theme',
    code: `package com.udaan.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.compose.rememberNavController
import com.udaan.app.ui.navigation.UdaanNavGraph
import com.udaan.app.ui.theme.UdaanTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            UdaanTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val navController = rememberNavController()
                    UdaanNavGraph(navController = navController)
                }
            }
        }
    }
}`
  },
  {
    name: 'Theme.kt',
    description: 'Material 3 Design System with Deep Teal, Mint, and Saffron Palette',
    code: `package com.udaan.app.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

// Authentic Udaan Material 3 Color Tokens
val DeepTeal = Color(0xFF176B5B)
val PrimaryGreen = Color(0xFF21866F)
val SoftMint = Color(0xFFDDF3E8)
val WarmCream = Color(0xFFFAF8F1)
val WhiteCards = Color(0xFFFFFFFF)
val DarkText = Color(0xFF202B27)
val SecondaryText = Color(0xFF65736C)
val SaffronAccent = Color(0xFFF2B544)
val ErrorRed = Color(0xFFB3261E)

private val UdaanLightColorScheme = lightColorScheme(
    primary = PrimaryGreen,
    onPrimary = Color.White,
    primaryContainer = SoftMint,
    onPrimaryContainer = DeepTeal,
    secondary = DeepTeal,
    onSecondary = Color.White,
    tertiary = SaffronAccent,
    background = WarmCream,
    onBackground = DarkText,
    surface = WhiteCards,
    onSurface = DarkText,
    surfaceVariant = WarmCream,
    onSurfaceVariant = SecondaryText,
    error = ErrorRed
)

@Composable
fun UdaanTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = UdaanLightColorScheme,
        typography = UdaanTypography,
        shapes = UdaanShapes,
        content = content
    )
}`
  },
  {
    name: 'Repositories.kt',
    description: 'Data Layer Interfaces: Room/SQLite & Offline Sync Foundation',
    code: `package com.udaan.app.domain.repository

import com.udaan.app.domain.model.*
import kotlinx.coroutines.flow.Flow

interface StudentRepository {
    fun getCurrentStudent(): Flow<StudentProfile>
    suspend fun updateStudentProfile(profile: StudentProfile)
    fun getAllStudentsRoster(): Flow<List<StudentProfile>>
    suspend fun saveFacilitatorRecommendation(recommendation: FacilitatorRecommendation)
}

interface CareerRepository {
    fun getAllCareers(): Flow<List<Career>>
    suspend fun getCareerById(id: String): Career?
}

interface OpportunityRepository {
    fun getAllOpportunities(): Flow<List<Opportunity>>
    fun getBookmarkedOpportunities(): Flow<List<Opportunity>>
    suspend fun toggleBookmark(opportunityId: String)
}

interface RecommendationEngine {
    suspend fun computeRecommendations(
        student: StudentProfile,
        discovery: DiscoveryAnswers?
    ): RecommendationResult
}

interface ExplanationService {
    suspend fun explainRecommendation(
        careerId: String,
        student: StudentProfile
    ): RecommendationExplanation
}

interface SpeechService {
    fun speak(text: String, lang: String)
    fun stop()
    val isSpeaking: Boolean
}

interface SyncRepository {
    suspend fun performDeltaSync(): Boolean
    val lastSyncTimestamp: Flow<Long>
}`
  },
  {
    name: 'UdaanNavGraph.kt',
    description: 'Navigation Compose Single-Activity Destinations',
    code: `package com.udaan.app.ui.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.udaan.app.ui.screens.*

sealed class Screen(val route: String) {
    object LanguageSelection : Screen("language_selection")
    object RoleSelection : Screen("role_selection")
    object ProfileSetup : Screen("profile_setup")
    object StudentHome : Screen("student_home")
    object CareerDiscovery : Screen("career_discovery")
    object CareerResults : Screen("career_results")
    object CareerDetails : Screen("career_details/{careerId}") {
        fun createRoute(id: String) = "career_details/$id"
    }
    object LearningPath : Screen("learning_path")
    object OpportunityFinder : Screen("opportunity_finder")
    object AiExplanation : Screen("ai_explanation/{careerId}")
    object FacilitatorHome : Screen("facilitator_home")
    object FacilitatorStudentDetail : Screen("facilitator_student_detail/{studentId}")
    object ProfileSettings : Screen("profile_settings")
}

@Composable
fun UdaanNavGraph(navController: NavHostController) {
    NavHost(
        navController = navController,
        startDestination = Screen.LanguageSelection.route
    ) {
        composable(Screen.LanguageSelection.route) { LanguageSelectionScreen(navController) }
        composable(Screen.RoleSelection.route) { RoleSelectionScreen(navController) }
        composable(Screen.ProfileSetup.route) { ProfileSetupScreen(navController) }
        composable(Screen.StudentHome.route) { StudentHomeScreen(navController) }
        composable(Screen.CareerDiscovery.route) { CareerDiscoveryScreen(navController) }
        composable(Screen.CareerResults.route) { CareerResultsScreen(navController) }
        composable(Screen.OpportunityFinder.route) { OpportunityFinderScreen(navController) }
        composable(Screen.LearningPath.route) { LearningPathScreen(navController) }
        composable(Screen.FacilitatorHome.route) { FacilitatorHomeScreen(navController) }
        composable(Screen.ProfileSettings.route) { ProfileSettingsScreen(navController) }
    }
}`
  }
];

export const KotlinCodeViewer: React.FC = () => {
  const { navigateTo } = useApp();
  const [selectedFileIdx, setSelectedFileIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const file = KOTLIN_FILES[selectedFileIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(file.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#202B27] pb-12 max-w-lg mx-auto">
      <AndroidStatusBar />
      <M3TopAppBar
        title="Kotlin Jetpack Compose Architecture"
        subtitle="Single-Activity M3 Native Architecture"
        showBack={true}
        onBack={() => navigateTo('profile_settings')}
      />

      <main className="p-4 space-y-4">
        {/* Info Banner */}
        <div className="p-4 rounded-2xl bg-[#DDF3E8] border border-[#21866F]/20 text-xs">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#176B5B] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#176B5B]">
                Native Android Architecture Specification
              </p>
              <p className="text-[#202B27] mt-0.5 leading-relaxed">
                Clean single-activity architecture, Material 3 Compose theme, repository interfaces for Room/SQLite offline persistence, and transparent rule-based recommendation logic.
              </p>
            </div>
          </div>
        </div>

        {/* File Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {KOTLIN_FILES.map((f, i) => (
            <button
              key={f.name}
              onClick={() => setSelectedFileIdx(i)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedFileIdx === i
                  ? 'bg-[#176B5B] text-white shadow-xs'
                  : 'bg-white text-[#202B27] border border-[#21866F]/20'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Code Card */}
        <div className="rounded-2xl bg-[#202B27] text-white p-4 shadow-md font-mono text-xs overflow-hidden border border-black/40">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
            <div>
              <span className="font-bold text-[#F2B544]">{file.name}</span>
              <p className="text-[10px] text-gray-400 font-sans mt-0.5">{file.description}</p>
            </div>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center gap-1 text-[11px]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <pre className="overflow-x-auto leading-relaxed text-[11px] text-gray-200 p-1">
            <code>{file.code}</code>
          </pre>
        </div>
      </main>
    </div>
  );
};
