import svgPaths from "../imports/Frame1011/svg-it9aeptvo5";
import imgFrame9492 from "../imports/Frame1011/20cf527e3fa62839cf417d8d93738d3ca1ed1506.png";
import imgGroup2081 from "../imports/Frame1011/5858c20b5b511f88d6e16f3cccf28a7cbf5f147c.png";
import imgFrame10231 from "../imports/Frame1011/094bf3352e691863429f83c4904d7c191b2e612b.png";
import imgImage151 from "../imports/Frame1011/8fc69fdc0845e53135aa7eb9143d5c368d17d417.png";
import imgScratchTest from "../imports/Frame1011/647b0ddcd0cfff8f57f14c46c861fed94b38f124.png";
import imgImage221 from "../imports/Frame1011/a196aff234bfa1ac4d7ade1b6f56de32f3bafa86.png";
import imgGroup20911 from "../imports/Frame1011/a32ca8fdc153147d39affcf6a3c791db37948d3d.png";

type Lang = "en" | "de";

const T = {
  en: {
    subtitle: "Learning game prototype for children on the autism spectrum",
    body: "Otavan is a mini-game prototype designed to help children aged 6–9 on the autism spectrum practice everyday social situations. Each of the five scenarios presents a real-life moment like receiving a gift, greeting someone or sharing, as a simple two-option choice, narrated with audio and illustrated in a soft, low-distraction visual style.",
    roleLabel: "My role:",
    roleContent: "Concept development, Research, Interviews, Illustration, Presentation design, Scratch prototype",
    typeLabel: "Type:",
    typeContent: "Group project, Research and competition entry",
    toolsLabel: "Tools:",
    toolsContent: "Adobe Illustrator, Scratch, Unity",
    process: "Process",
    p1: "Research on autism, Social Stories, and play-based learning",
    p2: "Involvement of schools, clinics, teachers, and parents in research and feedback",
    p3: "Development of two-option mini-games based on Carol Gray's Social Stories",
    p4: "Child-friendly design with soft colours, simple illustrations, and audio narration for better orientation and reduced distraction.",
    p5: "Scratch prototype with five game situations",
    outcome: "Outcome",
    r1: "2nd place (Silver Medal), Khwarazmi Youth Award 2023",
    r2: "Positive feedback from teachers and parents",
    r3: "Implementation confirmed by participating institutions",
    medalCaption: "Silver Medal, Khwarazmi Youth Award 2023, Cognitive Sciences category. Submitted as a research and competition project together with a fellow student.",
    testCaption: "Testing the Scratch prototype",
    testBody: "The prototype was tested by around ten children from participating schools and clinics. Teachers and parents gave consistently positive feedback — particularly on the audio narration and ease of navigation for this target group.",
    gameCaption: "Five social scenarios, each as a two-option mini-game — designed around Carol Gray's Social Stories framework.",
  },
  de: {
    subtitle: "Lernspiel-Prototyp für Kinder im Autismus-Spektrum",
    body: "Otavan is a mini-game prototype designed to help children aged 6–9 on the autism spectrum practice everyday social situations. Each of the five scenarios presents a real-life moment like receiving a gift, greeting someone or sharing, as a simple two-option choice, narrated with audio and illustrated in a soft, low-distraction visual style.",
    roleLabel: "Meine Rolle:",
    roleContent: "Konzeptentwicklung, Recherche, Interviews, Illustration, Präsentationsdesign, Scratch-Prototyp",
    typeLabel: "Art:",
    typeContent: "Gruppenprojekt, Forschungs- und Wettbewerbseinreichung",
    toolsLabel: "Tools:",
    toolsContent: "Adobe Illustrator, Scratch, Unity",
    process: "Prozess",
    p1: "Recherche zu Autismus, Social Stories und spielbasiertem Lernen",
    p2: "Einbindung von Schulen, Kliniken, Lehrkräften und Eltern in Recherche und Feedback",
    p3: "Entwicklung von Zwei-Optionen-Minispielen auf Basis von Social Stories nach Carol Gray",
    p4: "Kindgerechte Gestaltung mit weichen Farben, einfachen Illustrationen und Audio-Erzählung zur besseren Orientierung und Reduktion von Ablenkung.",
    p5: "Scratch-Prototyp mit fünf Spielsituationen",
    outcome: "Ergebnis",
    r1: "2. Platz (Silbermedaille), Khwarazmi-Jugendwettbewerb 2023",
    r2: "Positives Feedback von Lehrkräften und Eltern",
    r3: "Durchführung durch beteiligte Einrichtungen bestätigt",
    medalCaption: "Silbermedaille, Khwarazmi-Jugendwettbewerb 2023, Kategorie Kognitive Wissenschaften. Eingereicht als Forschungs- und Wettbewerbsprojekt gemeinsam mit einer Kommilitonin.",
    testCaption: "Test des Scratch-Prototyps",
    testBody: "Der Prototyp wurde von rund zehn Kindern aus beteiligten Schulen und Kliniken getestet. Lehrkräfte und Eltern gaben durchweg positives Feedback. Besonders zur Audio-Erzählung und zur einfachen Navigierbarkeit für diese Zielgruppe.",
    gameCaption: "Five social scenarios, each as a two-option mini-game — designed around Carol Gray's Social Stories framework.",
  },
} as const;

function CaptionTriangle() {
  return (
    <div className="h-[9px] relative shrink-0 w-[11px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 9">
        <path d={svgPaths.p3c11cd80} fill="#333333" />
      </svg>
    </div>
  );
}

export default function OtavanOverlay({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div className="bg-[#f0ebe8] relative size-full">
      {/* Hero header */}
      <div className="absolute h-[710px] left-0 top-0 w-[1280px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1280 710' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.6'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0.7338 84.542 -152.41 0.65115 655.95 178.62)'><stop stop-color='rgba(140,241,242,1)' offset='0'/><stop stop-color='rgba(180,243,227,1)' offset='1'/></radialGradient></defs></svg>\")" }}>
        <div className="absolute h-[436px] left-[46px] top-[175px] w-[563px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[102.06%] left-0 max-w-none top-[-1.15%] w-[100.01%]" src={imgFrame9492} />
          </div>
        </div>
        <div className="absolute h-[112px] left-[609px] top-[328px] w-[303px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup2081} />
        </div>
        <div className="absolute h-[148px] left-[46px] top-[666px] w-[360px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10231} />
        </div>
      </div>

      {/* Left content column */}
      <div className="absolute content-stretch flex flex-col gap-[25px] items-start left-[46px] top-[869px] w-[539px]">
        {/* Color swatches */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[156px]">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
            <div className="bg-[#bdf1fe] relative shrink-0 size-[30px]" />
            <div className="bg-[#504438] relative shrink-0 size-[30px]" />
            <div className="bg-[#a4d5be] relative shrink-0 size-[30px]" />
            <div className="bg-[#e8d4e5] relative shrink-0 size-[30px]">
              <div aria-hidden className="absolute border-[#484848] border-[0.5px] border-solid inset-0 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Process section */}
        <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative text-black">
              <p className="font-['Clash_Display:Medium',sans-serif] leading-[normal] relative shrink-0 text-[22px] w-full">{t.process}</p>
              <ul className="block font-['Poppins:Regular',sans-serif] leading-[0] relative shrink-0 text-[16px] w-full">
                {([t.p1, t.p2, t.p3, t.p4, t.p5] as string[]).map((item, i) => (
                  <li key={i} className="list-disc ms-[24px]">
                    <span className="leading-[normal]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Outcome section */}
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[364px]">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full">
              <p className="font-['Clash_Display:Medium',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[22px] w-[min-content]">{t.outcome}</p>
              <ul className="block font-['Poppins:Regular',sans-serif] leading-[0] relative shrink-0 text-[16px] w-[527px]">
                {([t.r1, t.r2, t.r3] as string[]).map((item, i) => (
                  <li key={i} className="list-disc ms-[24px]">
                    <span className="leading-[normal]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Medal image + caption */}
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[239px]">
              <div className="h-[221px] relative shrink-0 w-[239px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage151} />
              </div>
              <div className="h-[90px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[4px] items-start px-[4px] relative size-full">
                  <CaptionTriangle />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Clash_Display:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[12px] text-black">{t.medalCaption}</p>
                </div>
              </div>
            </div>
            <ul className="[word-break:break-word] block font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[275px]">
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">{t.testBody}</span>
              </li>
            </ul>
          </div>

          {/* Scratch test image + caption */}
          <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[239px]">
            <div className="h-[192px] relative shrink-0 w-[239px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScratchTest} />
            </div>
            <div className="relative shrink-0 w-full">
              <div className="content-stretch flex gap-[4px] items-start px-[4px] relative size-full">
                <CaptionTriangle />
                <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[12px] text-black">{t.testCaption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right column: title + body + screenshots */}
      <div className="absolute content-stretch flex flex-col gap-[42px] items-end left-[calc(50%+90px)] top-[427px] w-[393px]">
        {/* Title block */}
        <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[393px]">
            <p className="[word-break:break-word] font-['Clash_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#634c3c] text-[110px] whitespace-nowrap">
              Otavan
            </p>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[5px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[normal] min-w-px not-italic relative text-[18px] text-black">{t.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Star */}
          <div className="flex h-[57.276px] items-center justify-center relative shrink-0 w-[57.588px]">
            <div className="flex-none rotate-75">
              <div className="h-[47.113px] overflow-clip relative w-[46.672px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.6736 47.1136">
                  <path d={svgPaths.p1ab64b00} fill="#8ED43F" />
                  <path d={svgPaths.pe39ef00} fill="#8ED43F" />
                  <path d={svgPaths.p23fa5200} fill="#8ED43F" />
                  <path d={svgPaths.p84e6800} fill="#8ED43F" />
                  <path d={svgPaths.p22c18e80} fill="#8ED43F" />
                </svg>
              </div>
            </div>
          </div>
          {/* Body text */}
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">{t.body}</p>
            <p className="font-['Poppins:Medium_Italic',sans-serif] italic leading-[0] relative shrink-0 text-[#191919] text-[17px] w-full">
              <span className="leading-[24px]">{t.roleLabel} </span>
              <span className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic">{t.roleContent}</span>
            </p>
            <p className="font-['Poppins:Medium_Italic',sans-serif] italic leading-[0] relative shrink-0 text-[#191919] text-[17px] w-full">
              <span className="leading-[29px]">{t.typeLabel} </span>
              <span className="font-['Poppins:Regular',sans-serif] leading-[29px] not-italic">{t.typeContent}</span>
            </p>
            <p className="font-['Poppins:Medium_Italic',sans-serif] italic leading-[0] relative shrink-0 text-[#191919] text-[17px] w-full">
              <span className="leading-[29px]">{t.toolsLabel} </span>
              <span className="font-['Poppins:Regular',sans-serif] leading-[29px] not-italic">{t.toolsContent}</span>
            </p>
          </div>
        </div>

        {/* Result image */}
        <div className="h-[260px] relative shrink-0 w-[393px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage221} />
        </div>

        {/* Game screenshot + caption */}
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[337px]">
          <div className="aspect-[337/462] relative shrink-0 w-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[102.66%] left-[-5.07%] max-w-none top-[0.49%] w-[119%]" src={imgGroup20911} />
            </div>
          </div>
          <div className="h-[45px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[4px] items-start px-[29px] relative size-full">
              <div className="flex h-[11px] items-center justify-center relative shrink-0 w-[8px]">
                <div className="-rotate-90 flex-none">
                  <div className="h-[8px] relative w-[11px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
                      <path d={svgPaths.p17245880} fill="#333333" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black w-[275px]">{t.gameCaption}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
