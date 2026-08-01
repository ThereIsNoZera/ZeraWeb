import type { Lang } from "../../../data/translations";
import svgPaths from "../../../imports/Frame998-1/svg-8x4hiyna9j";
import imgOn1 from "../../../imports/Frame998-1/7cb504c92fe4fe79cd47243f2abb45bb29e7f467.png";
import imgOn2 from "../../../imports/Frame998-1/7cf1538d8eb6b9798005e26592bf610e5b7e7308.png";
import imgOn3 from "../../../imports/Frame998-1/46608e7ea329a19393808cf93e3b738e84819508.png";
import imgFrame938 from "../../../imports/Frame998-1/9801a6542a796275cdc339a04c22388472b17478.png";
import imgPickle311 from "../../../imports/Frame998-1/acdc7e48e14d806c2d917511651a7d4718f36049.png";
import imgFrame939 from "../../../imports/Frame998-1/420b8be386865f3f5e2a2ebd6a2233e5c85005bd.png";

const T = {
  en: {
    subtitle: "App concept & illustration for a decision-making app",
    body: "Making decisions is hard. Especially when other people are involved. Pickle grew from that personal experience: the desire to make group decisions less chaotic and socially less draining.",
    roleLabel: "My role:",
    roleContent: "Ideation, User Flow, App concept, Illustration",
    toolsLabel: "Tools:",
    focusLabel: "Focus:",
    focusContent: "Character design, Onboarding, weighted voting",
    concept: "Concept",
    conceptBody:
      'The name "Pickle" plays on the English idiom "to be in a pickle" while also nodding to the word "pick." The app concept helps users make personal or shared decisions more easily through weighted voting.',
    uxDecisions: "UX Decisions",
    ux1: "Flexible weighting of invited Pickers",
    ux2: "Equal default weighting for a smooth onboarding",
    ux3: "Hidden weighting to prevent social tension",
    illustration: "Illustration and visual language",
    illustrationBody:
      "The Pickle characters translate the app's wordplay into a humorous visual language. They make the theme of decision-making feel lighter and more approachable, supporting the friendly, playful tone of the app.",
    caption:
      "Pickle was one of my first independent concept projects, and a formative learning experience. I put core UI design principles, user-centred thinking, and visual brand awareness into practice: from the first idea through to finished illustration.",
  },
  de: {
    subtitle: "App-Konzept & Illustration für eine Entscheidungs-App",
    body: "Entscheidungen zu treffen ist schwer. Besonders wenn andere Menschen davon betroffen sind. Pickle entstand aus dieser persönlichen Erfahrung: dem Wunsch, Gruppenentscheidungen weniger chaotisch und sozial weniger belastend zu gestalten.",
    roleLabel: "Meine Rolle:",
    roleContent: "Ideation, User Flow, App-Konzept, Illustration",
    toolsLabel: "Tools:",
    focusLabel: "Fokus:",
    focusContent: "Charakterdesign, Onboarding, gewichtete Abstimmung",
    concept: "Konzept",
    conceptBody:
      'Der Name „Pickle" basiert auf dem englischen Ausdruck „to be in a pickle" und spielt gleichzeitig mit dem Wort „pick". Das App-Konzept hilft Nutzer:innen, persönliche oder gemeinsame Entscheidungen durch gewichtete Abstimmungen einfacher zu treffen.',
    uxDecisions: "UX-Entscheidungen",
    ux1: "Flexible Gewichtung der eingeladenen Picker",
    ux2: "Gleiche Standardgewichtung für einen einfachen Einstieg",
    ux3: "Unsichtbare Gewichtung, um soziale Spannungen zu vermeiden",
    illustration: "Illustration und visuelle Sprache",
    illustrationBody:
      "Die Pickle-Charaktere übersetzen das Wortspiel der App in eine humorvolle visuelle Sprache. Sie machen das Thema Entscheidungsfindung leichter und zugänglicher und unterstützen den freundlichen, spielerischen Charakter der Anwendung.",
    caption:
      "Pickle war eines meiner ersten eigenständigen Konzeptprojekte, und eine prägende Lernerfahrung. Ich habe dabei grundlegende Prinzipien des UI-Designs, nutzerzentriertes Denken und visuelles Markenbewusstsein in der Praxis erprobt: von der ersten Idee bis zur fertigen Illustration.",
  },
} as const;

const OVERLAY_WIDTH = 1100;

function PickleHero() {
  return (
    <div
      className="absolute h-[710px] left-0 top-0 w-[1280px]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1280 710' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0.7338 84.542 -152.41 0.65115 655.95 178.62)'><stop stop-color='rgba(255,214,90,1)' offset='0'/><stop stop-color='rgba(249,221,135,1)' offset='0.5'/><stop stop-color='rgba(243,227,180,1)' offset='1'/></radialGradient></defs></svg>\")",
      }}
    >
      <div className="absolute h-[710px] left-[391px]  top-[212px] w-[350px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgOn2}
        />
      </div>
      <div className="absolute h-[625px] left-[751px] top-[452px] w-[315px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgOn3}
        />
      </div>
      <div className="absolute h-[625px] left-[44px] top-[25px] w-[331px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgOn1}
        />
      </div>
    </div>
  );
}

export default function PickleOverlay({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div
      style={{ position: "relative", width: OVERLAY_WIDTH, minHeight: 2400 }}
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[#f0ebe8]" />

      {/* Hero phones */}
      <PickleHero />

      {/* Main content — positioned below hero */}
      <div className="absolute content-stretch flex flex-col gap-[42px] items-start left-[calc(50%-503px)] top-[723px] w-[1006px]">
        {/* Top section: title col + content col */}
        <div className="content-stretch flex flex-col gap-[42px] items-start relative shrink-0 w-[979px]">
          {/* Title + body column */}
          <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[333px]">
            <div className="content-stretch flex flex-col gap-[29px] items-start relative shrink-0 w-full">
              <p className="[word-break:break-word] font-['Clash_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#126503] text-[110px] w-full">
                Pickle
              </p>
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[5px] relative size-full">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[normal] min-w-px not-italic relative text-[18px] text-black">
                      {t.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Star */}
            <div className="flex h-[57.276px] items-center justify-center relative shrink-0 w-[57.588px]">
              <div className="flex-none rotate-75">
                <div className="h-[47.113px] overflow-clip relative w-[46.672px]">
                  <svg
                    className="absolute block inset-0 size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 46.6736 47.1136"
                  >
                    <path d={svgPaths.p1ab64b00} fill="#FDD765" />
                    <path d={svgPaths.pe39ef00} fill="#FDD765" />
                    <path d={svgPaths.p23fa5200} fill="#FDD765" />
                    <path d={svgPaths.p84e6800} fill="#FDD765" />
                    <path d={svgPaths.p22c18e80} fill="#FDD765" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Body text */}
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#191919] w-[671px]">
              <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] w-full">
                {t.body}
              </p>
              <p className="font-['Pochaevsk:Regular',sans-serif] leading-[0] relative shrink-0 text-[0px] w-full">
                <span className="font-['Poppins:Medium_Italic',sans-serif] italic leading-[24px] text-[17px]">
                  {t.roleLabel}{" "}
                </span>
                <span className="font-['Poppins:Regular',sans-serif] leading-[24px] text-[17px]">
                  {t.roleContent}
                </span>
              </p>
              <p className="font-['Pochaevsk:Regular',sans-serif] leading-[0] relative shrink-0 text-[0px] w-full">
                <span className="font-['Poppins:Medium_Italic',sans-serif] italic leading-[29px] text-[17px]">
                  {t.toolsLabel}
                </span>
                <span className="font-['Poppins:Regular',sans-serif] leading-[29px] text-[17px]">
                  {" "}
                  Figma, Adobe Illustrator
                </span>
              </p>
              <p className="font-['Pochaevsk:Regular',sans-serif] leading-[0] relative shrink-0 text-[0px] w-full">
                <span className="font-['Poppins:Medium_Italic',sans-serif] italic leading-[24px] text-[17px]">
                  {t.focusLabel}
                </span>
                <span className="font-['Poppins:Regular',sans-serif] leading-[24px] text-[17px]">
                  {" "}
                  {t.focusContent}
                </span>
              </p>
            </div>
          </div>

          {/* Content column: swatches + concept + ux + illustration */}
          <div className="content-stretch flex gap-[38px] items-start relative shrink-0 w-full">
            <div className="h-[633px] relative shrink-0 w-[148px]">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgFrame938}
              />
            </div>
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[793px]">
              {/* Color swatches + Concept */}
              <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[631px]">
                <div className="flex h-[30px] items-center justify-center relative shrink-0 w-[156px]">
                  <div className="-rotate-90 flex-none">
                    <div className="content-stretch flex items-start relative w-[30px]">
                      <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-[69px]">
                        <div className="bg-[#0f9247] relative shrink-0 size-[30px]" />
                        <div className="bg-[#ffd65a] relative shrink-0 size-[30px]" />
                        <div className="bg-[#f6f6f6] relative shrink-0 size-[30px]" />
                        <div className="bg-[#002d0a] relative shrink-0 size-[30px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-black w-full">
                  <p className="font-['Clash_Display:Medium',sans-serif] relative shrink-0 text-[22px] w-full">
                    {t.concept}
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[16px] w-full">
                    {t.conceptBody}
                  </p>
                </div>
              </div>

              {/* Phone screenshot + UX decisions */}
              <div className="content-stretch flex gap-[15px] items-center justify-center relative shrink-0 w-full">
                <div className="h-[305px] relative shrink-0 w-[147px]">
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgPickle311}
                  />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-black w-[631px]">
                  <p className="font-['Clash_Display:Medium',sans-serif] leading-[normal] relative shrink-0 text-[22px] w-full">
                    {t.uxDecisions}
                  </p>
                  <ul className="block font-['Poppins:Regular',sans-serif] leading-[0] list-disc relative shrink-0 text-[16px] w-full">
                    <li className="mb-[6px] ms-[24px]">
                      <span className="leading-[normal]">{t.ux1}</span>
                    </li>
                    <li className="mb-[6px] ms-[24px]">
                      <span className="leading-[normal]">{t.ux2}</span>
                    </li>
                    <li className="ms-[24px]">
                      <span className="leading-[normal]">{t.ux3}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Illustration section */}
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Clash_Display:Medium',sans-serif] relative shrink-0 text-[22px] w-full">
                  {t.illustration}
                </p>
                <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[16px] w-full">
                  {t.illustrationBody}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: wide image strip + caption */}
        <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0 w-full">
          <div className="aspect-[1509/464] relative shrink-0 w-full">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFrame939}
            />
          </div>
          <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center w-[795px]">
            {t.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
