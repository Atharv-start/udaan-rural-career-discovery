/**
 * Date helper returning YYYY-MM-DD.
 * Defaults to the real current date, overridable via `?today=YYYY-MM-DD` query param
 * or via programmatic override for tests/demos.
 */

let programmaticOverride: string | null = null;

export function setEvaluationDateOverride(date: string | null): void {
  programmaticOverride = date;
}

export function getTodayDate(): string {
  if (programmaticOverride && /^\d{4}-\d{2}-\d{2}$/.test(programmaticOverride)) {
    return programmaticOverride;
  }

  if (typeof window !== 'undefined' && window.location && window.location.search) {
    const params = new URLSearchParams(window.location.search);
    const todayParam = params.get('today');
    if (todayParam && /^\d{4}-\d{2}-\d{2}$/.test(todayParam)) {
      return todayParam;
    }
  }

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
