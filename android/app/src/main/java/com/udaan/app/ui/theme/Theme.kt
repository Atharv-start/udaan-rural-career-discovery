package com.udaan.app.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Typography
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp

// Distinctive Udaan Material 3 Color System
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
    error = ErrorRed,
    onError = Color.White
)

val UdaanTypography = Typography(
    headlineLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Bold,
        fontSize = 28.sp,
        lineHeight = 34.sp,
        color = DarkText
    ),
    headlineMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Bold,
        fontSize = 22.sp,
        lineHeight = 28.sp,
        color = DarkText
    ),
    titleMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.SemiBold,
        fontSize = 16.sp,
        lineHeight = 22.sp,
        color = DarkText
    ),
    bodyMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 14.sp,
        lineHeight = 20.sp,
        color = DarkText
    ),
    labelMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Medium,
        fontSize = 12.sp,
        lineHeight = 16.sp,
        color = SecondaryText
    )
)

@Composable
fun UdaanTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = UdaanLightColorScheme,
        typography = UdaanTypography,
        content = content
    )
}
