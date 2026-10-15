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
import { OPPORTUNITIES_DATA } from '../../data/opportunitiesData';
import { OpportunityCategory, Opportunity } from '../../types';
import { 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  IndianRupee, 
  Filter,
  X
} from 'lucide-react';

const CATEGORIES: { id: 'all' | OpportunityCategory; labelEn: string; labelHi: string }[] = [
  { id: 'all', labelEn: 'All Opportunities', labelHi: 'सभी अवसर' },
  { id: 'scholarship', labelEn: 'Scholarships', labelHi: 'छात्रवृत्तियां' },
  { id: 'scheme', labelEn: 'Govt Schemes', labelHi: 'सरकारी योजनाएं' },
  { id: 'vocational', labelEn: 'Vocational Training', labelHi: 'कौशल प्रशिक्षण' },
  { id: 'apprenticeship', labelEn: 'Apprenticeships (NAPS)', labelHi: 'अप्रेंटिसशिप (सवेतन)' },
  { id: 'course', labelEn: 'Free Courses', labelHi: 'निःशुल्क कोर्स' },
  { id: 'mentorship', labelEn: 'Mentorship & Grants', labelHi: 'मेंटरशिप व ग्रांट' }
];

export const Screen9OpportunityFinder: React.FC = () => {
  const { 
    language, 
    bookmarkedOpportunityIds, 
    toggleBookmark, 
    navigateTo 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | OpportunityCategory>('all');
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [selectedOpportunityModal, setSelectedOpportunityModal] = useState<Opportunity | null>(null);

  // Filter opportunities
  const filtered = OPPORTUNITIES_DATA.filter(item => {
    if (onlyBookmarks && !bookmarkedOpportunityIds.includes(item.id)) {
      return false;
    }
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q) || item.nameHi.includes(q);
      const matchProvider = item.provider.toLowerCase().includes(q) || item.providerHi.includes(q);
      const matchElig = item.eligibilitySummary.toLowerCase().includes(q);
      return matchName || matchProvider || matchElig;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#202B27] pb-24 max-w-lg mx-auto">
      <AndroidStatusBar />
      <M3TopAppBar
        title={language === 'hi' ? 'अवसर एवं छात्रवृत्तियां' : 'Opportunity Finder'}
        subtitle={language === 'hi' ? 'सत्यापित योजनाएं एवं सहायता' : 'Verified Schemes & Grants'}
        showBack={true}
        onBack={() => navigateTo('student_home')}
        readAloudText={
          language === 'hi'
            ? 'अवसर खोजें। छात्रवृत्तियां, कौशल प्रशिक्षण और सरकारी योजनाएं। किसी भी कार्ड को बुकमार्क कर सकते हैं।'
            : 'Find verified scholarships, government schemes, free courses, and apprenticeships.'
        }
      />

      <main className="p-4 space-y-3">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'योजना, छात्रवृत्ति या संस्था खोजें...' : 'Search scheme, scholarship or trade...'}
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

        {/* Filter Chips Bar (Horizontal Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {/* Bookmarks toggle chip */}
          <M3FilterChip
            label={language === 'hi' ? 'सहेजे गए (Bookmarks)' : 'Saved Bookmarks'}
            selected={onlyBookmarks}
            onClick={() => setOnlyBookmarks(!onlyBookmarks)}
            count={bookmarkedOpportunityIds.length}
          />

          {CATEGORIES.map(cat => (
            <M3FilterChip
              key={cat.id}
              label={language === 'hi' ? cat.labelHi : cat.labelEn}
              selected={!onlyBookmarks && selectedCategory === cat.id}
              onClick={() => {
                setOnlyBookmarks(false);
                setSelectedCategory(cat.id);
              }}
            />
          ))}
        </div>

        {/* Results Count & Verified Badge */}
        <div className="flex items-center justify-between text-xs px-1 text-[#65736C]">
          <span>
            {language === 'hi' 
              ? `${filtered.length} अवसर उपलब्ध` 
              : `${filtered.length} opportunities found`}
          </span>
          <div className="flex items-center gap-1 text-[#176B5B] font-semibold text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'आधिकारिक स्रोत सत्यापित' : 'Govt. Verified'}</span>
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
                {language === 'hi' ? 'खोज शब्द बदलकर देखें या सभी फ़िल्टर हटाएं' : 'Try adjusting filters or search term.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setOnlyBookmarks(false);
                }}
                className="mt-3 text-xs font-bold text-[#176B5B] hover:underline"
              >
                {language === 'hi' ? 'फ़िल्टर हटाएं' : 'Clear filters'}
              </button>
            </div>
          ) : (
            filtered.map(opp => {
              const isBookmarked = bookmarkedOpportunityIds.includes(opp.id);

              return (
                <M3Card key={opp.id} className="p-4 border border-[#21866F]/15 hover:border-[#21866F]/35 transition-all">
                  {/* Category & Verified tag */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B5B] bg-[#DDF3E8] px-2.5 py-0.5 rounded-full">
                        {language === 'hi' ? opp.categoryLabel.hi : opp.categoryLabel.en}
                      </span>
                      {opp.financialBenefit && (
                        <span className="text-[10px] font-bold text-[#202B27] bg-[#F2B544]/25 px-2 py-0.5 rounded-full">
                          {language === 'hi' ? opp.financialBenefitHi : opp.financialBenefit}
                        </span>
                      )}
                    </div>

                    {/* Bookmark action button */}
                    <button
                      type="button"
                      onClick={() => toggleBookmark(opp.id)}
                      className={`min-h-[40px] min-w-[40px] -mr-2 rounded-full flex items-center justify-center transition-all ${
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

                  {/* Title & Provider */}
                  <h3 className="text-sm sm:text-base font-bold text-[#202B27] leading-snug">
                    {language === 'hi' ? opp.nameHi : opp.name}
                  </h3>

                  <p className="text-[11px] text-[#176B5B] font-medium mt-0.5">
                    {language === 'hi' ? opp.providerHi : opp.provider}
                  </p>

                  {/* Eligibility summary */}
                  <p className="text-xs text-[#65736C] mt-2 line-clamp-2 leading-relaxed">
                    <span className="font-semibold text-[#202B27]">
                      {language === 'hi' ? 'पात्रता: ' : 'Eligibility: '}
                    </span>
                    {language === 'hi' ? opp.eligibilitySummaryHi : opp.eligibilitySummary}
                  </p>

                  {/* Why it matches */}
                  <div className="mt-2.5 p-2 rounded-xl bg-[#FAF8F1] border border-[#21866F]/10 text-[11px] text-[#202B27] flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#21866F] shrink-0 mt-0.5" />
                    <span>{language === 'hi' ? opp.matchReasonHi : opp.matchReason}</span>
                  </div>

                  {/* Footer with deadline and source */}
                  <div className="mt-3 pt-2 border-t border-[#21866F]/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-[#65736C] text-[11px]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? `अंतिम तिथि: ${opp.deadlineHi}` : `Deadline: ${opp.deadline}`}</span>
                    </div>

                    <button
                      onClick={() => setSelectedOpportunityModal(opp)}
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
      {selectedOpportunityModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
          <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl p-5 max-h-[85vh] overflow-y-auto shadow-2xl border border-[#21866F]/20">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B5B] bg-[#DDF3E8] px-2.5 py-0.5 rounded-full">
                  {language === 'hi' ? selectedOpportunityModal.categoryLabel.hi : selectedOpportunityModal.categoryLabel.en}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#202B27] mt-1.5 leading-snug">
                  {language === 'hi' ? selectedOpportunityModal.nameHi : selectedOpportunityModal.name}
                </h3>
                <p className="text-xs text-[#176B5B] font-medium">
                  {language === 'hi' ? selectedOpportunityModal.providerHi : selectedOpportunityModal.provider}
                </p>
              </div>
              <button
                onClick={() => setSelectedOpportunityModal(null)}
                className="w-8 h-8 rounded-full bg-[#FAF8F1] flex items-center justify-center text-[#65736C] hover:bg-gray-200 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm mt-3 pt-3 border-t border-[#21866F]/10">
              <div>
                <span className="font-bold text-[#202B27] block text-xs uppercase text-[#65736C]">
                  {language === 'hi' ? 'वित्तीय लाभ / सहायता' : 'Financial Benefit / Stipend'}
                </span>
                <p className="text-[#176B5B] font-bold text-base mt-0.5">
                  {language === 'hi' ? selectedOpportunityModal.financialBenefitHi : selectedOpportunityModal.financialBenefit}
                </p>
              </div>

              <div>
                <span className="font-bold text-[#202B27] block text-xs uppercase text-[#65736C]">
                  {language === 'hi' ? 'पात्रता एवं शर्तें' : 'Eligibility Criteria'}
                </span>
                <p className="text-[#202B27] mt-0.5 leading-relaxed">
                  {language === 'hi' ? selectedOpportunityModal.eligibilitySummaryHi : selectedOpportunityModal.eligibilitySummary}
                </p>
              </div>

              <div>
                <span className="font-bold text-[#202B27] block text-xs uppercase text-[#65736C]">
                  {language === 'hi' ? 'आवश्यक योग्यता' : 'Required Qualifications'}
                </span>
                <p className="text-[#202B27] mt-0.5 leading-relaxed">
                  {language === 'hi' ? selectedOpportunityModal.requiredQualificationsHi : selectedOpportunityModal.requiredQualifications}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF8F1] border border-[#21866F]/12">
                <span className="font-bold text-[#176B5B] block text-xs">
                  {language === 'hi' ? 'आधिकारिक स्रोत एवं सत्यापन' : 'Verification & Source'}
                </span>
                <p className="text-xs text-[#65736C] mt-0.5">
                  {language === 'hi' 
                    ? `अंतिम सत्यापन: ${selectedOpportunityModal.lastVerifiedDate} · आधिकारिक राष्ट्रीय पोर्टल`
                    : `Verified: ${selectedOpportunityModal.lastVerifiedDate} · Official Portal`}
                </p>
                <a
                  href={selectedOpportunityModal.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-xs font-bold text-[#176B5B] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>{selectedOpportunityModal.sourceLink}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#21866F]/10 flex items-center gap-3">
              <M3Button
                variant="outlined"
                onClick={() => {
                  toggleBookmark(selectedOpportunityModal.id);
                }}
                icon={<Bookmark className="w-4 h-4" />}
                className="flex-1"
              >
                {bookmarkedOpportunityIds.includes(selectedOpportunityModal.id)
                  ? (language === 'hi' ? 'सहेजा गया' : 'Bookmarked')
                  : (language === 'hi' ? 'बुकमार्क करें' : 'Bookmark')}
              </M3Button>

              <M3Button
                variant="filled"
                onClick={() => {
                  window.open(selectedOpportunityModal.sourceLink, '_blank');
                }}
                icon={<ExternalLink className="w-4 h-4" />}
                className="flex-1"
              >
                {language === 'hi' ? 'पोर्टल पर जाएं' : 'Open Portal'}
              </M3Button>
            </div>
          </div>
        </div>
      )}

      <M3BottomNavBar />
    </div>
  );
};
