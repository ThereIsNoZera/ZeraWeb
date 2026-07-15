import svgPaths from "../imports/Frame1013/svg-jyti2nqip8";
import imgIdMockup from "../imports/Frame1013/9d3f778fb42712ef8444d831d6f31ce68c2349a4.png";
import imgBanner from "../imports/Frame1013/78a2226078a61d8a3f833f94063570798378013a.png";
import imgCert1 from "../imports/Frame1013/77ff07580e89a3443a299a51c77c69f3389e7c0b.png";
import imgCert2 from "../imports/Frame1013/e99975e2d76dec5ece74d554bedf994a9df8e22f.png";
import imgThree from "../imports/Frame1013/84e7474b3d604ab97815ee9c26d9d9b610e551bf.png";
import imgArtboard from "../imports/Frame1013/045b0a2898b89a5136e93132eff220d812a2fe81.png";
import imgFrame955 from "../imports/Frame1013/41a78b3da987b9226890711e8771396a7a6176aa.png";
import imgImage3 from "../imports/Frame1013/c9d907d7b3af801973a4248e566aa0d93bcefd11.png";
import imgImage2 from "../imports/Frame1013/1b6248be839072150fe18d8bd67eb825a83570d0.png";
import imgImage1 from "../imports/Frame1013/013900141a95332d7c830d610d2dfcf82e1325e7.png";

type Lang = "en" | "de";

const T = {
  en: {
    subtitle: "Bilingual visual identity for an international academic conference",
    campaignLabel: "Campaign materials",
    consistency: "The identity was applied across various formats and maintained consistency through colour, graphic elements, and bilingual hierarchy.",
    challenge: "The main challenge was structuring a large amount of information in both Persian and English clearly, while creating a serious and consistent visual identity.",
    concept: "The visual concept combines a globe graphic, geographic markers, and a blue-orange palette to convey internationality, orientation, and academic credibility.",
    impact: "Impact",
    b1: "The design was used broadly throughout the conference.",
    b2: "The unified identity provided a professional visual framework.",
    b3: "The bilingual materials helped make information accessible to different audiences.",
    b4: "Clear hierarchy structured a large amount of information in an accessible way.",
    b5: "The design supported on-site navigation — through name badges, speaker cards, and banners.",
  },
  de: {
    subtitle: "Zweisprachiges visuelles Erscheinungsbild für eine internationale akademische Konferenz",
    campaignLabel: "Kampagnenmaterialien",
    consistency: "Das Erscheinungsbild wurde auf verschiedene Formate übertragen und blieb durch Farben, grafische Elemente und bilinguale Hierarchie konsistent.",
    challenge: "Die größte Herausforderung war, viele Informationen auf Persisch und Englisch klar zu strukturieren und gleichzeitig ein seriöses, konsistentes Erscheinungsbild zu schaffen.",
    concept: "Das visuelle Konzept kombiniert eine Globusgrafik, geografische Markierungen und eine blau-orange Farbpalette, um Internationalität, Orientierung und akademische Seriosität zu vermitteln.",
    impact: "Wirkung",
    b1: "Die Gestaltung wurde während der Konferenz breit eingesetzt.",
    b2: "Das einheitliche Erscheinungsbild sorgte für einen professionellen visuellen Rahmen.",
    b3: "Die bilingualen Materialien halfen dabei, Informationen für unterschiedliche Zielgruppen zugänglich zu machen.",
    b4: "Durch klare Hierarchie wurden viele Informationen übersichtlich strukturiert.",
    b5: "Die Gestaltung unterstützte die Orientierung vor Ort, zum Beispiel durch Namensschilder, Rednerkarten und Banner.",
  },
} as const;

export default function ConferenceOverlay({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div className="bg-[#f0ebe8] relative size-full">
      {/* Header bg */}
      <div className="absolute bg-[#878ca2] h-[581px] left-[-31px] top-[-180px] w-[1280px]">
        <div className="absolute h-[399px] left-[596px] top-[180px] w-[536px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIdMockup} />
        </div>
      </div>

      {/* Main content */}
      <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-495px)] top-[227px] w-[925px]">
        {/* Title + content (mb pulls Wirkung section up) */}
        <div className="content-stretch flex flex-col items-start mb-[-172px] relative shrink-0 w-full">
          {/* Title block */}
          <div className="content-stretch flex flex-col gap-[16px] items-start mb-[-24px] relative shrink-0 w-[570px]">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#f0ebe8] text-[44px] w-[min-content]">
              The First International Conference on European and American Studies
            </p>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[5px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[normal] min-w-px not-italic relative text-[#1a5c86] text-[18px]">{t.subtitle}</p>
                </div>
              </div>
            </div>
            {/* Star */}
            <div className="flex h-[57.276px] items-center justify-center relative shrink-0 w-[57.588px]">
              <div className="flex-none rotate-75">
                <div className="h-[47.113px] overflow-clip relative w-[46.672px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.6736 47.1136">
                    <path d={svgPaths.p1ab64b00} fill="#1A5C86" />
                    <path d={svgPaths.pe39ef00} fill="#1A5C86" />
                    <path d={svgPaths.p23fa5200} fill="#1A5C86" />
                    <path d={svgPaths.p84e6800} fill="#1A5C86" />
                    <path d={svgPaths.p22c18e80} fill="#1A5C86" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* 3-col content */}
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[20px] items-end relative shrink-0 w-full">
              {/* Left col: campaign label + banner + cert1 */}
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[231px]">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="flex-none rotate-180">
                        <div className="h-[7px] relative w-[8px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
                            <path d={svgPaths.p25d5c800} fill="#333333" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333] text-[12px] whitespace-nowrap">{t.campaignLabel}</p>
                  </div>
                  <div className="aspect-[462/504] relative shrink-0 w-full">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBanner} />
                  </div>
                </div>
                <div className="aspect-[693/549] relative shrink-0 w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCert1} />
                </div>
              </div>
              {/* Middle col: cert2 + three */}
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[406px]">
                <div className="h-[217px] relative shrink-0 w-[232px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCert2} />
                </div>
                <div className="h-[284px] relative shrink-0 w-[406px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThree} />
                </div>
              </div>
              {/* Right col: consistency text + mockup image */}
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[243px]">
                <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">{t.consistency}</p>
                <div className="aspect-[1338/995] relative shrink-0 w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIdMockup} />
                </div>
              </div>
            </div>

            {/* Row 2: swatches + text paragraphs + roll-up images */}
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
              {/* Color swatches */}
              <div className="flex h-[156px] items-center justify-center relative shrink-0 w-[30px]">
                <div className="flex-none rotate-90">
                  <div className="content-stretch flex gap-[12px] items-center relative">
                    <div className="bg-[#2a5d8e] relative shrink-0 size-[30px]" />
                    <div className="bg-[#fc9150] relative shrink-0 size-[30px]" />
                    <div className="bg-[#fdfeff] relative shrink-0 size-[30px]" />
                    <div className="bg-[#7da4bc] relative shrink-0 size-[30px]" />
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[10px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[520px]">
                <p className="relative shrink-0 w-full">{t.challenge}</p>
                <p className="relative shrink-0 w-full">{t.concept}</p>
              </div>
              {/* Roll-up images */}
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[455px]">
                <div className="h-[521px] relative shrink-0 w-[234px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtboard} />
                </div>
                <div className="h-[521px] relative shrink-0 w-[201px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame955} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact / Wirkung section */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
          <p className="[word-break:break-word] font-['Clash_Display:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#1b1b1b] text-[22px] w-[min-content]">{t.impact}</p>
          <div className="content-stretch flex items-center justify-center pl-[27px] relative shrink-0 w-[544px]">
            <ul className="[word-break:break-word] block font-['Poppins:Regular',sans-serif] leading-[0] list-disc not-italic relative shrink-0 text-[16px] text-black w-[517px]">
              <li className="mb-[6px] ms-[24px]"><span className="leading-[normal]">{t.b1}</span></li>
              <li className="mb-[6px] ms-[24px]"><span className="leading-[normal]">{t.b2}</span></li>
              <li className="ms-[24px]"><span className="leading-[normal]">{t.b3}</span></li>
            </ul>
          </div>
          <div className="content-stretch flex gap-[20px] items-end relative shrink-0">
            <div className="h-[469px] relative shrink-0 w-[260px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
            </div>
            <div className="content-stretch flex flex-col gap-[29px] items-start justify-center relative shrink-0">
              <ul className="[word-break:break-word] block font-['Poppins:Regular',sans-serif] leading-[0] list-disc min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
                <li className="mb-[6px] ms-[24px]"><span className="leading-[normal]">{t.b4}</span></li>
                <li className="ms-[24px]"><span className="leading-[normal]">{t.b5}</span></li>
              </ul>
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
                <div className="h-[316px] relative shrink-0 w-[215px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                </div>
                <div className="h-[246px] relative shrink-0 w-[430px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
