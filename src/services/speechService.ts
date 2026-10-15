export interface ISpeechService {
  speak(text: string, lang: 'en' | 'hi'): void;
  stop(): void;
  isSpeaking(): boolean;
}

class BrowserSpeechService implements ISpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isCurrentlySpeaking = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public speak(text: string, lang: 'en' | 'hi'): void {
    if (!this.synth) {
      console.warn('Speech synthesis not supported on this device/browser');
      return;
    }

    this.stop();

    if (!text || text.trim() === '') return;

    const cleanText = text.replace(/<[^>]*>?/gm, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);

    // Pick appropriate BCP-47 language tag
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.95; // Slightly slower, clearer for rural learners
    utterance.pitch = 1.0;

    // Try finding an Indian English or Hindi voice if available
    const voices = this.synth.getVoices();
    const targetVoice = voices.find(v => 
      lang === 'hi' ? v.lang.startsWith('hi') : (v.lang === 'en-IN' || v.lang.startsWith('en'))
    );
    if (targetVoice) {
      utterance.voice = targetVoice;
    }

    utterance.onstart = () => {
      this.isCurrentlySpeaking = true;
    };

    utterance.onend = () => {
      this.isCurrentlySpeaking = false;
      this.currentUtterance = null;
    };

    utterance.onerror = () => {
      this.isCurrentlySpeaking = false;
      this.currentUtterance = null;
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.isCurrentlySpeaking = false;
      this.currentUtterance = null;
    }
  }

  public isSpeaking(): boolean {
    return this.isCurrentlySpeaking || (this.synth ? this.synth.speaking : false);
  }
}

export const speechService = new BrowserSpeechService();
