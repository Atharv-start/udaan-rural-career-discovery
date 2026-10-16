import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  M3TopAppBar,
  M3Button,
  M3Card,
  M3FilterChip,
  M3BottomNavBar,
  AndroidStatusBar
} from '../common/MaterialComponents';
import { EvaluatedOpp, OppStatus, Opportunity } from '../../types';
import {
  Search,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  Filter,
  X,
  AlertTriangle,
  Info
} from 'lucide-react';

export const Screen9OpportunityFinder: React.FC = () => {
  const {
    language,
    evaluatedOpportunities,
    bookmarkedOpportunityIds,
    toggleBookmark,
    navigateTo
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | OppStatus | 'scholarship' | 'apprenticeship' | 'skill_training' | 'training_seat'>('all');
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [selectedModal, setSelectedModal] = useState<EvaluatedOpp | null>(null);

  const getStatusBadge = (status: OppStatus) => {
    switch (status) {
      case 'ELIGIBLE_NOW':
        return {
          en: 'Eligible Now',
          hi: 'अभी पात्र',
          className: 'bg-[#DDF3E8] text-[#176B5B] border-[#21866F]/30'
        };
      case 'CONDITIONAL':
        return {
          en: 'Eligible with Conditions',
          hi: 'शर्तों के साथ पात्र',
          className: 'bg-[#FFF9E6] text-[#8a6011] border-[#F2B544]/40'
        };
      case 'ALMOST_ELIGIBLE':
        return {
          en: 'Almost Eligible',
          hi: 'लगभग पात्र',
          className: 'bg-blue-50 text-blue-800 border-blue-200'
        };
      case 'WINDOW_CLOSED':
        return {
          en: 'Window Closed',
          hi: 'आवेदन खिड़की बंद',
          className: 'bg-gray-100 text-gray-700 border-gray-300'
        };
      case 'UPCOMING':
        return {
          en: 'Upcoming / Unannounced',
          hi: 'आगामी / अप्रकाशित',
          className: 'bg-purple-50 text-purple-800 border-purple-200'
        };
      case 'NOT_ELIGIBLE':
      default:
        return {
          en: 'Not Eligible',
          hi: 'अपात्र',
          className: 'bg-red-50 text-red-800 border-red-200'
        };
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'scholarship':
        return { en: 'Scholarship', hi: 'छात्रवृत्ति' };
      case 'apprenticeship':
        return { en: 'Apprenticeship (NAPS)', hi: 'शिक्षुता (NAPS)' };
      case 'training_seat':
        return { en: 'Training Seat', hi: 'प्रशिक्षण सीट' };
      case 'skill_training':
        return { en: 'Skill Training', hi: 'कौशल प्रशिक्षण' };
      default:
        return { en: type, hi: type };
    }
  };

  // Filter evaluated opportunities
  const filtered = evaluatedOpportunities.filter(item => {
    if (onlyBookmarks && !bookmarkedOpportunityIds.includes(item.opp.id)) {
      return false;
    }
    if (selectedFilter !== 'all') {
      if (
        selectedFilter === 'ELIGIBLE_NOW' ||
        selectedFilter === 'CONDITIONAL' ||
        selectedFilter === 'ALMOST_ELIGIBLE' ||
        selectedFilter === 'WINDOW_CLOSED' ||
        selectedFilter === 'UPCOMING' ||
        selectedFilter === 'NOT_ELIGIBLE'
      ) {
        if (item.status !== selectedFilter) return false;
      } else {
        if (item.opp.type !== selectedFilter) return false;
      }
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = item.opp.nameEn.toLowerCase().includes(q) || item.opp.nameHi.includes(q);
      const matchNotes = item.opp.notes.toLowerCase().includes(q);
      const matchConditions = item.opp.conditions.some(c => c.toLowerCase().includes(q));
      return matchName || matchNotes || matchConditions;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#202B27] pb-24 max-w-lg mx-auto">
      <AndroidStatusBar />
      <M3TopAppBar
        title={language === 'hi' ? 'अवसर एवं छात्रवृत्तियां' : 'Opportunity Finder'}
        subtitle={language === 'hi' ? 'सत्यापित योजनाएं एवं पात्रता' : 'Verified Schemes & Eligibility'}
        showBack={true}
        onBack={() => navigateTo('student_home')}
        readAloudText={
          language === 'hi'
            ? 'अवसर खोजें। सरकारी योजनाएं, छात्रवृत्ति और अप्रेंटिसशिप। अपनी पात्रता स्थिति देखें।'
            : 'Find verified government schemes, scholarships, and apprenticeships. Check your eligibility status.'
        }
      />

      <main className="p-4 space-y-3">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'योजना या छात्रवृत्ति खोजें...' : 'Search scheme, scholarship or portal...'}
            className="w-full min-h-[46px] pl-10 pr-9 py-2.5 rounded-2xl bg-white border border-[#21866F]/20 text-xs sm:text-sm font-medium text-[#202B27] focus:outline-none focus:border-[#21866F] shadow-xs"
          />
          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#65736C]" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-[#65736C] hover:text-[#202B27]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Chips Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {/* Bookmarks toggle chip */}
          <M3FilterChip
            label={language === 'hi' ? 'सहेजे गए (Bookmarks)' : 'Saved Bookmarks'}
            selected={onlyBookmarks}
            onClick={() => setOnlyBookmarks(!onlyBookmarks)}
            count={bookmarkedOpportunityIds.length}
          />

          <M3FilterChip
            label={language === 'hi' ? 'सभी अवसर' : 'All'}
            selected={!onlyBookmarks && selectedFilter === 'all'}
            onClick={() => {
              setOnlyBookmarks(false);
              setSelectedFilter('all');
            }}
          />

          <M3FilterChip
            label={language === 'hi' ? 'अभी पात्र (Eligible)' : 'Eligible Now'}
            selected={!onlyBookmarks && selectedFilter === 'ELIGIBLE_NOW'}
            onClick={() => {
              setOnlyBookmarks(false);
              setSelectedFilter('ELIGIBLE_NOW');
            }}
          />

          <M3FilterChip
            label={language === 'hi' ? 'शर्तों सहित (Conditional)' : 'Conditional'}
            selected={!onlyBookmarks && selectedFilter === 'CONDITIONAL'}
            onClick={() => {
              setOnlyBookmarks(false);
              setSelectedFilter('CONDITIONAL');
            }}
          />

          <M3FilterChip
            label={language === 'hi' ? 'लगभग पात्र (Almost)' : 'Almost Eligible'}
            selected={!onlyBookmarks && selectedFilter === 'ALMOST_ELIGIBLE'}
            onClick={() => {
              setOnlyBookmarks(false);
              setSelectedFilter('ALMOST_ELIGIBLE');
            }}
          />

          <M3FilterChip
            label={language === 'hi' ? 'छात्रवृत्तियां' : 'Scholarships'}
            selected={!onlyBookmarks && selectedFilter === 'scholarship'}
            onClick={() => {
              setOnlyBookmarks(false);
              setSelectedFilter('scholarship');
            }}
          />

          <M3FilterChip
            label={language === 'hi' ? 'शिक्षुता (Apprenticeship)' : 'Apprenticeship'}
            selected={!onlyBookmarks && selectedFilter === 'apprenticeship'}
            onClick={() => {
              setOnlyBookmarks(false);
              setSelectedFilter('apprenticeship');
            }}
          />
        </div>

        {/* Results Count & Verified Badge */}
        <div className="flex items-center justify-between text-xs px-1 text-[#65736C]">
          <span>
            {language === 'hi'
              ? `${filtered.length} योजनाएं सूचीबद्ध`
              : `${filtered.length} schemes evaluated`}
          </span>
          <div className="flex items-center gap-1 text-[#176B5B] font-semibold text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'सत्यापित नियम इंजन' : 'Rule-Engine Evaluated'}</span>
          </div>
        </div>

        {/* Opportunities List */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12 p-4 bg-white rounded-2xl border border-[#21866F]/10">
              <Filter className="w-8 h-8 text-[#65736C] mx-auto mb-2 opacity-50" />
              <p className="text-sm font-bold text-[#202B27]">
                {language === 'hi' ? 'कोई योजना नहीं मिली' : 'No matching opportunities found'}
              </p>
              <p className="text-xs text-[#65736C] mt-1">
                {language === 'hi' ? 'फ़िल्टर बदलकर देखें' : 'Try adjusting your filters.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('all');
                  setOnlyBookmarks(false);
                }}
                className="mt-3 text-xs font-bold text-[#176B5B] hover:underline"
              >
                {language === 'hi' ? 'फ़िल्टर हटाएं' : 'Clear filters'}
              </button>
            </div>
          ) : (
            filtered.map((item: EvaluatedOpp) => {
              const opp = item.opp;
              const isBookmarked = bookmarkedOpportunityIds.includes(opp.id);
              const statusBadge = getStatusBadge(item.status);
              const typeLabel = getTypeLabel(opp.type);
              const isClosedOrUpcoming = item.status === 'WINDOW_CLOSED' || item.status === 'UPCOMING';

              return (
                <M3Card key={opp.id} className="p-4 border border-[#21866F]/15 hover:border-[#21866F]/35 transition-all">
                  {/* Status Badge & Bookmark Button */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${statusBadge.className}`}>
                        {language === 'hi' ? statusBadge.hi : statusBadge.en}
                      </span>
                      <span className="text-[10px] font-semibold text-[#176B5B] bg-[#DDF3E8] px-2 py-0.5 rounded-full">
                        {language === 'hi' ? typeLabel.hi : typeLabel.en}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleBookmark(opp.id)}
                      className={`min-h-[36px] min-w-[36px] -mr-1 rounded-full flex items-center justify-center transition-all ${
                        isBookmarked
                          ? 'text-[#F2B544]'
                          : 'text-[#65736C] hover:text-[#176B5B]'
                      }`}
                      aria-label="Bookmark this opportunity"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-5 h-5 fill-[#F2B544]" />
                      ) : (
                        <Bookmark className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#202B27] leading-snug">
                    {language === 'hi' ? opp.nameHi : opp.nameEn}
                  </h3>

                  {/* Verification Caveat if not verified */}
                  {item.caveat && (
                    <div className="mt-2 p-2 rounded-lg bg-[#FFF9E6] border border-[#F2B544]/30 text-[11px] text-[#8a6011] flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#F2B544] shrink-0 mt-0.5" />
                      <span>{language === 'hi' ? item.caveat.hi : item.caveat.en}</span>
                    </div>
                  )}

                  {/* Window Closed / Upcoming Cycle Note */}
                  {isClosedOrUpcoming && opp.nextCycleNote && (
                    <div className="mt-2 p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700 space-y-1">
                      <div className="flex items-center gap-1 font-semibold text-[11px] text-[#202B27]">
                        <Clock className="w-3.5 h-3.5 text-gray-500" />
                        <span>{language === 'hi' ? 'अगला चक्र / संभावित समय:' : 'Next Expected Cycle:'}</span>
                      </div>
                      <p className="text-[11px] leading-relaxed">
                        {opp.nextCycleNote}
                      </p>
                    </div>
                  )}

                  {/* Missing criteria or conditions */}
                  {item.missing.length > 0 && !isClosedOrUpcoming && (
                    <div className="mt-2.5 p-2 rounded-xl bg-[#FAF8F1] border border-[#21866F]/10 text-xs text-[#202B27] space-y-1">
                      <span className="font-semibold text-[#176B5B] block text-[11px]">
                        {item.status === 'CONDITIONAL'
                          ? (language === 'hi' ? 'पात्रता शर्तें:' : 'Required Conditions:')
                          : (language === 'hi' ? 'पात्र होने के लिए आवश्यक कदम:' : 'Steps to Qualify:')}
                      </span>
                      {item.missing.map((m, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px]">
                          <CheckCircle2 className="w-3 h-3 text-[#21866F] shrink-0 mt-0.5" />
                          <span>{language === 'hi' ? m.hi : m.en}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer with deadline and modal trigger */}
                  <div className="mt-3 pt-2 border-t border-[#21866F]/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-[#65736C] text-[11px]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {opp.closesOn
                          ? (language === 'hi' ? `अंतिम तिथि: ${opp.closesOn}` : `Closes: ${opp.closesOn}`)
                          : (language === 'hi' ? `स्थिति: ${opp.windowStatus}` : `Window: ${opp.windowStatus}`)}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedModal(item)}
                      className="text-xs font-bold text-[#176B5B] hover:underline flex items-center gap-1"
                    >
                      <span>{language === 'hi' ? 'पूर्ण विवरण' : 'View Details'}</span>
                    </button>
                  </div>
                </M3Card>
              );
            })
          )}
        </div>
      </main>

      {/* Opportunity Details Dialog Modal */}
      {selectedModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
          <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl p-5 max-h-[85vh] overflow-y-auto shadow-2xl border border-[#21866F]/20">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getStatusBadge(selectedModal.status).className}`}>
                    {language === 'hi' ? getStatusBadge(selectedModal.status).hi : getStatusBadge(selectedModal.status).en}
                  </span>
                  <span className="text-[10px] font-semibold text-[#176B5B] bg-[#DDF3E8] px-2 py-0.5 rounded-full">
                    {language === 'hi' ? getTypeLabel(selectedModal.opp.type).hi : getTypeLabel(selectedModal.opp.type).en}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#202B27] mt-1.5 leading-snug">
                  {language === 'hi' ? selectedModal.opp.nameHi : selectedModal.opp.nameEn}
                </h3>
              </div>
              <button
                onClick={() => setSelectedModal(null)}
                className="w-8 h-8 rounded-full bg-[#FAF8F1] flex items-center justify-center text-[#65736C] hover:bg-gray-200 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm mt-3 pt-3 border-t border-[#21866F]/10">
              {/* Not fully verified caveat */}
              {selectedModal.caveat && (
                <div className="p-2.5 rounded-xl bg-[#FFF9E6] border border-[#F2B544]/40 text-xs text-[#8a6011] flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#F2B544] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {language === 'hi' ? selectedModal.caveat.hi : selectedModal.caveat.en}
                  </p>
                </div>
              )}

              {/* Next cycle note for closed or upcoming */}
              {(selectedModal.status === 'WINDOW_CLOSED' || selectedModal.status === 'UPCOMING') && selectedModal.opp.nextCycleNote && (
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700">
                  <span className="font-bold text-[#202B27] block mb-1">
                    {language === 'hi' ? 'अगला आवेदन चक्र / संभावित सूचना:' : 'Next Cycle Schedule Note:'}
                  </span>
                  <p className="leading-relaxed">
                    {selectedModal.opp.nextCycleNote}
                  </p>
                </div>
              )}

              {/* Conditions / Missing criteria */}
              {selectedModal.missing.length > 0 && (
                <div>
                  <span className="font-bold text-[#202B27] block text-xs uppercase text-[#65736C]">
                    {selectedModal.status === 'CONDITIONAL'
                      ? (language === 'hi' ? 'शर्तें एवं आवश्यकताएं' : 'Eligibility Conditions')
                      : (language === 'hi' ? 'पात्रता आवश्यकताएं' : 'Requirements to Qualify')}
                  </span>
                  <ul className="mt-1 space-y-1">
                    {selectedModal.missing.map((m, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[#202B27]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#21866F] shrink-0 mt-0.5" />
                        <span>{language === 'hi' ? m.hi : m.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Notes & Verification */}
              <div className="p-3 rounded-xl bg-[#FAF8F1] border border-[#21866F]/12">
                <span className="font-bold text-[#176B5B] block text-xs">
                  {language === 'hi' ? 'सत्यापन विवरण एवं टिप्पणी' : 'Verification Status & Notes'}
                </span>
                <p className="text-xs text-[#65736C] mt-1 leading-relaxed">
                  {selectedModal.opp.notes}
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#21866F]/10 text-[11px] text-[#65736C]">
                  <span>
                    {language === 'hi'
                      ? `सत्यापन: ${selectedModal.opp.verifiedDate} (${selectedModal.opp.status})`
                      : `Verified: ${selectedModal.opp.verifiedDate} (${selectedModal.opp.status})`}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#21866F]/10 flex items-center gap-3">
              <M3Button
                variant="outlined"
                onClick={() => {
                  toggleBookmark(selectedModal.opp.id);
                }}
                icon={<Bookmark className="w-4 h-4" />}
                className="flex-1"
              >
                {bookmarkedOpportunityIds.includes(selectedModal.opp.id)
                  ? (language === 'hi' ? 'सहेजा गया' : 'Bookmarked')
                  : (language === 'hi' ? 'बुकमार्क करें' : 'Bookmark')}
              </M3Button>

              {/* Open portal CTA - disabled or indicated for closed/upcoming schemes */}
              {selectedModal.opp.link ? (
                <M3Button
                  variant="filled"
                  onClick={() => {
                    window.open(selectedModal.opp.link, '_blank');
                  }}
                  icon={<ExternalLink className="w-4 h-4" />}
                  className="flex-1"
                >
                  {selectedModal.status === 'WINDOW_CLOSED'
                    ? (language === 'hi' ? 'पोर्टल देखें (बंद)' : 'Portal (Closed)')
                    : selectedModal.status === 'UPCOMING'
                    ? (language === 'hi' ? 'पोर्टल देखें' : 'View Portal')
                    : (language === 'hi' ? 'पोर्टल पर जाएं' : 'Open Portal')}
                </M3Button>
              ) : (
                <div className="flex-1 text-center py-2 px-3 rounded-xl bg-gray-100 text-gray-500 text-xs font-semibold">
                  {language === 'hi' ? 'आधिकारिक पोर्टल जल्द' : 'Portal Not Yet Live'}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <M3BottomNavBar />
    </div>
  );
};
