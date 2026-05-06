# Pipeline manifest

Append-only record of stage runs and latest phase artifacts for this book workspace.

## Book context
- bookId: qa-romance-margins
- baselineProfile: romance-relational
- workForm: novelette

## Latest artifacts by stage
- symbolic-seed: phase3-micro/chapter-001.symbolic-plan.iter-001.md, phase3-micro/chapter-002.symbolic-plan.iter-001.md, phase3-micro/chapter-003.symbolic-plan.iter-001.md, phase3-micro/chapter-004.symbolic-plan.iter-001.md
- cnl: phase4-cnl/book.macro-refined-plan.iter-001.md, phase4-cnl/characters.macro-refined-plan.iter-001.md, phase4-cnl/world.macro-refined-plan.iter-001.md, phase4-cnl/chapter-001.chapter-refined-plan.iter-001.md, phase4-cnl/chapter-002.chapter-refined-plan.iter-001.md, phase4-cnl/chapter-003.chapter-refined-plan.iter-001.md, phase4-cnl/chapter-004.chapter-refined-plan.iter-001.md, phase4-cnl/chapter-001.micro-refined-plan.iter-001.md, phase4-cnl/chapter-002.micro-refined-plan.iter-001.md, phase4-cnl/chapter-003.micro-refined-plan.iter-001.md, phase4-cnl/chapter-004.micro-refined-plan.iter-001.md, phase4-cnl/placeholder-resolution.cnl-resolution.iter-001.md
- drafts: phase5-drafts/chapter-001.draft.iter-001.md, phase5-drafts/chapter-002.draft.iter-001.md, phase5-drafts/chapter-003.draft.iter-001.md, phase5-drafts/chapter-004.draft.iter-001.md
- exports: phase8-exports/manuscript.book.iter-001.md, phase8-exports/edition-en.reader.iter-001.html, phase8-exports/translation-source.bundle.iter-001.md, phase8-exports/editions.bundle.iter-001.md
- translations: phase9-translations/edition-ro.reader.iter-001.html, phase9-translations/edition-ro.translation-trace.iter-001.md, phase9-translations/editions.bundle.iter-001.md
- validation: phase6-validation/summary.validation.iter-001.md, phase6-validation/issues.validation.iter-001.md, phase6-validation/stages.validation.iter-001.md, phase6-validation/tasks.validation.iter-001.md, phase7-reports/summary.report.iter-001.md, phase7-reports/stages.report.iter-001.md, phase7-reports/tasks.report.iter-001.md

## Recent runs
- #1 symbolic-seed: phase1-macro/book.symbolic-plan.iter-001.md, phase1-macro/characters.symbolic-plan.iter-001.md, phase1-macro/world.symbolic-plan.iter-001.md, phase1-macro/entities.symbolic-map.iter-001.md
- #2 symbolic-seed: phase2-chapters/chapter-001.symbolic-plan.iter-001.md, phase2-chapters/chapter-002.symbolic-plan.iter-001.md, phase2-chapters/chapter-003.symbolic-plan.iter-001.md, phase2-chapters/chapter-004.symbolic-plan.iter-001.md
- #3 symbolic-seed: phase3-micro/chapter-001.symbolic-plan.iter-001.md, phase3-micro/chapter-002.symbolic-plan.iter-001.md, phase3-micro/chapter-003.symbolic-plan.iter-001.md, phase3-micro/chapter-004.symbolic-plan.iter-001.md
- #4 cnl: phase4-cnl/book.macro-refined-plan.iter-001.md, phase4-cnl/characters.macro-refined-plan.iter-001.md, phase4-cnl/world.macro-refined-plan.iter-001.md, phase4-cnl/chapter-001.chapter-refined-plan.iter-001.md, phase4-cnl/chapter-002.chapter-refined-plan.iter-001.md, phase4-cnl/chapter-003.chapter-refined-plan.iter-001.md, phase4-cnl/chapter-004.chapter-refined-plan.iter-001.md, phase4-cnl/chapter-001.micro-refined-plan.iter-001.md, phase4-cnl/chapter-002.micro-refined-plan.iter-001.md, phase4-cnl/chapter-003.micro-refined-plan.iter-001.md, phase4-cnl/chapter-004.micro-refined-plan.iter-001.md, phase4-cnl/placeholder-resolution.cnl-resolution.iter-001.md
- #5 drafts: phase5-drafts/chapter-001.draft.iter-001.md, phase5-drafts/chapter-002.draft.iter-001.md, phase5-drafts/chapter-003.draft.iter-001.md, phase5-drafts/chapter-004.draft.iter-001.md
- #6 exports: phase8-exports/manuscript.book.iter-001.md, phase8-exports/edition-en.reader.iter-001.html, phase8-exports/translation-source.bundle.iter-001.md, phase8-exports/editions.bundle.iter-001.md
- #7 translations: phase9-translations/edition-ro.reader.iter-001.html, phase9-translations/edition-ro.translation-trace.iter-001.md, phase9-translations/editions.bundle.iter-001.md
- #8 validation: phase6-validation/summary.validation.iter-001.md, phase6-validation/issues.validation.iter-001.md, phase6-validation/stages.validation.iter-001.md, phase6-validation/tasks.validation.iter-001.md, phase7-reports/summary.report.iter-001.md, phase7-reports/stages.report.iter-001.md, phase7-reports/tasks.report.iter-001.md

<!-- scripta-data
{
  "runs": [
    {
      "runIndex": 1,
      "stage": "symbolic-seed",
      "consumed": [],
      "produced": [
        {
          "stage": "symbolic-seed",
          "baseName": "book",
          "label": "symbolic-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase1-macro/book.symbolic-plan.iter-001.md",
          "relativePath": "phase1-macro/book.symbolic-plan.iter-001.md"
        },
        {
          "stage": "symbolic-seed",
          "baseName": "characters",
          "label": "symbolic-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase1-macro/characters.symbolic-plan.iter-001.md",
          "relativePath": "phase1-macro/characters.symbolic-plan.iter-001.md"
        },
        {
          "stage": "symbolic-seed",
          "baseName": "world",
          "label": "symbolic-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase1-macro/world.symbolic-plan.iter-001.md",
          "relativePath": "phase1-macro/world.symbolic-plan.iter-001.md"
        },
        {
          "stage": "symbolic-seed",
          "baseName": "entities",
          "label": "symbolic-map",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase1-macro/entities.symbolic-map.iter-001.md",
          "relativePath": "phase1-macro/entities.symbolic-map.iter-001.md"
        }
      ],
      "context": {
        "book": {
          "bookId": "qa-romance-margins",
          "baselineProfile": "romance-relational",
          "workForm": "novelette"
        }
      }
    },
    {
      "runIndex": 2,
      "stage": "symbolic-seed",
      "consumed": [],
      "produced": [
        {
          "stage": "symbolic-seed",
          "baseName": "chapter-001",
          "label": "symbolic-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase2-chapters/chapter-001.symbolic-plan.iter-001.md",
          "relativePath": "phase2-chapters/chapter-001.symbolic-plan.iter-001.md"
        },
        {
          "stage": "symbolic-seed",
          "baseName": "chapter-002",
          "label": "symbolic-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase2-chapters/chapter-002.symbolic-plan.iter-001.md",
          "relativePath": "phase2-chapters/chapter-002.symbolic-plan.iter-001.md"
        },
        {
          "stage": "symbolic-seed",
          "baseName": "chapter-003",
          "label": "symbolic-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase2-chapters/chapter-003.symbolic-plan.iter-001.md",
          "relativePath": "phase2-chapters/chapter-003.symbolic-plan.iter-001.md"
        },
        {
          "stage": "symbolic-seed",
          "baseName": "chapter-004",
          "label": "symbolic-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase2-chapters/chapter-004.symbolic-plan.iter-001.md",
          "relativePath": "phase2-chapters/chapter-004.symbolic-plan.iter-001.md"
        }
      ],
      "context": {
        "book": {
          "bookId": "qa-romance-margins",
          "baselineProfile": "romance-relational",
          "workForm": "novelette"
        }
      }
    },
    {
      "runIndex": 3,
      "stage": "symbolic-seed",
      "consumed": [],
      "produced": [
        {
          "stage": "symbolic-seed",
          "baseName": "chapter-001",
          "label": "symbolic-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase3-micro/chapter-001.symbolic-plan.iter-001.md",
          "relativePath": "phase3-micro/chapter-001.symbolic-plan.iter-001.md"
        },
        {
          "stage": "symbolic-seed",
          "baseName": "chapter-002",
          "label": "symbolic-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase3-micro/chapter-002.symbolic-plan.iter-001.md",
          "relativePath": "phase3-micro/chapter-002.symbolic-plan.iter-001.md"
        },
        {
          "stage": "symbolic-seed",
          "baseName": "chapter-003",
          "label": "symbolic-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase3-micro/chapter-003.symbolic-plan.iter-001.md",
          "relativePath": "phase3-micro/chapter-003.symbolic-plan.iter-001.md"
        },
        {
          "stage": "symbolic-seed",
          "baseName": "chapter-004",
          "label": "symbolic-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase3-micro/chapter-004.symbolic-plan.iter-001.md",
          "relativePath": "phase3-micro/chapter-004.symbolic-plan.iter-001.md"
        }
      ],
      "context": {
        "book": {
          "bookId": "qa-romance-margins",
          "baselineProfile": "romance-relational",
          "workForm": "novelette"
        }
      }
    },
    {
      "runIndex": 4,
      "stage": "cnl",
      "consumed": [
        "phase1-macro/book.symbolic-plan.iter-001.md",
        "phase1-macro/characters.symbolic-plan.iter-001.md",
        "phase1-macro/world.symbolic-plan.iter-001.md",
        "phase2-chapters/chapter-001.symbolic-plan.iter-001.md",
        "phase2-chapters/chapter-002.symbolic-plan.iter-001.md",
        "phase2-chapters/chapter-003.symbolic-plan.iter-001.md",
        "phase2-chapters/chapter-004.symbolic-plan.iter-001.md",
        "phase3-micro/chapter-001.symbolic-plan.iter-001.md",
        "phase3-micro/chapter-002.symbolic-plan.iter-001.md",
        "phase3-micro/chapter-003.symbolic-plan.iter-001.md",
        "phase3-micro/chapter-004.symbolic-plan.iter-001.md"
      ],
      "produced": [
        {
          "stage": "cnl",
          "baseName": "book",
          "label": "macro-refined-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/book.macro-refined-plan.iter-001.md",
          "relativePath": "phase4-cnl/book.macro-refined-plan.iter-001.md"
        },
        {
          "stage": "cnl",
          "baseName": "characters",
          "label": "macro-refined-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/characters.macro-refined-plan.iter-001.md",
          "relativePath": "phase4-cnl/characters.macro-refined-plan.iter-001.md"
        },
        {
          "stage": "cnl",
          "baseName": "world",
          "label": "macro-refined-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/world.macro-refined-plan.iter-001.md",
          "relativePath": "phase4-cnl/world.macro-refined-plan.iter-001.md"
        },
        {
          "stage": "cnl",
          "baseName": "chapter-001",
          "label": "chapter-refined-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-001.chapter-refined-plan.iter-001.md",
          "relativePath": "phase4-cnl/chapter-001.chapter-refined-plan.iter-001.md"
        },
        {
          "stage": "cnl",
          "baseName": "chapter-002",
          "label": "chapter-refined-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-002.chapter-refined-plan.iter-001.md",
          "relativePath": "phase4-cnl/chapter-002.chapter-refined-plan.iter-001.md"
        },
        {
          "stage": "cnl",
          "baseName": "chapter-003",
          "label": "chapter-refined-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-003.chapter-refined-plan.iter-001.md",
          "relativePath": "phase4-cnl/chapter-003.chapter-refined-plan.iter-001.md"
        },
        {
          "stage": "cnl",
          "baseName": "chapter-004",
          "label": "chapter-refined-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-004.chapter-refined-plan.iter-001.md",
          "relativePath": "phase4-cnl/chapter-004.chapter-refined-plan.iter-001.md"
        },
        {
          "stage": "cnl",
          "baseName": "chapter-001",
          "label": "micro-refined-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-001.micro-refined-plan.iter-001.md",
          "relativePath": "phase4-cnl/chapter-001.micro-refined-plan.iter-001.md"
        },
        {
          "stage": "cnl",
          "baseName": "chapter-002",
          "label": "micro-refined-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-002.micro-refined-plan.iter-001.md",
          "relativePath": "phase4-cnl/chapter-002.micro-refined-plan.iter-001.md"
        },
        {
          "stage": "cnl",
          "baseName": "chapter-003",
          "label": "micro-refined-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-003.micro-refined-plan.iter-001.md",
          "relativePath": "phase4-cnl/chapter-003.micro-refined-plan.iter-001.md"
        },
        {
          "stage": "cnl",
          "baseName": "chapter-004",
          "label": "micro-refined-plan",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-004.micro-refined-plan.iter-001.md",
          "relativePath": "phase4-cnl/chapter-004.micro-refined-plan.iter-001.md"
        },
        {
          "stage": "cnl",
          "baseName": "placeholder-resolution",
          "label": "cnl-resolution",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/placeholder-resolution.cnl-resolution.iter-001.md",
          "relativePath": "phase4-cnl/placeholder-resolution.cnl-resolution.iter-001.md"
        }
      ],
      "context": {
        "book": {
          "bookId": "qa-romance-margins",
          "baselineProfile": "romance-relational"
        }
      }
    },
    {
      "runIndex": 5,
      "stage": "drafts",
      "consumed": [
        "phase4-cnl/chapter-001.chapter-refined-plan.iter-001.md",
        "phase4-cnl/chapter-002.chapter-refined-plan.iter-001.md",
        "phase4-cnl/chapter-003.chapter-refined-plan.iter-001.md",
        "phase4-cnl/chapter-004.chapter-refined-plan.iter-001.md",
        "phase4-cnl/chapter-001.micro-refined-plan.iter-001.md",
        "phase4-cnl/chapter-002.micro-refined-plan.iter-001.md",
        "phase4-cnl/chapter-003.micro-refined-plan.iter-001.md",
        "phase4-cnl/chapter-004.micro-refined-plan.iter-001.md",
        "phase4-cnl/book.macro-refined-plan.iter-001.md",
        "phase4-cnl/characters.macro-refined-plan.iter-001.md",
        "phase4-cnl/world.macro-refined-plan.iter-001.md"
      ],
      "produced": [
        {
          "stage": "drafts",
          "baseName": "chapter-001",
          "label": "draft",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase5-drafts/chapter-001.draft.iter-001.md",
          "relativePath": "phase5-drafts/chapter-001.draft.iter-001.md"
        },
        {
          "stage": "drafts",
          "baseName": "chapter-002",
          "label": "draft",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase5-drafts/chapter-002.draft.iter-001.md",
          "relativePath": "phase5-drafts/chapter-002.draft.iter-001.md"
        },
        {
          "stage": "drafts",
          "baseName": "chapter-003",
          "label": "draft",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase5-drafts/chapter-003.draft.iter-001.md",
          "relativePath": "phase5-drafts/chapter-003.draft.iter-001.md"
        },
        {
          "stage": "drafts",
          "baseName": "chapter-004",
          "label": "draft",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase5-drafts/chapter-004.draft.iter-001.md",
          "relativePath": "phase5-drafts/chapter-004.draft.iter-001.md"
        }
      ],
      "context": {
        "book": {
          "bookId": "qa-romance-margins",
          "baselineProfile": "romance-relational"
        }
      }
    },
    {
      "runIndex": 6,
      "stage": "exports",
      "consumed": [
        "phase5-drafts/chapter-001.draft.iter-001.md",
        "phase5-drafts/chapter-002.draft.iter-001.md",
        "phase5-drafts/chapter-003.draft.iter-001.md",
        "phase5-drafts/chapter-004.draft.iter-001.md",
        "phase4-cnl/chapter-001.chapter-refined-plan.iter-001.md",
        "phase4-cnl/chapter-002.chapter-refined-plan.iter-001.md",
        "phase4-cnl/chapter-003.chapter-refined-plan.iter-001.md",
        "phase4-cnl/chapter-004.chapter-refined-plan.iter-001.md",
        "phase4-cnl/chapter-001.micro-refined-plan.iter-001.md",
        "phase4-cnl/chapter-002.micro-refined-plan.iter-001.md",
        "phase4-cnl/chapter-003.micro-refined-plan.iter-001.md",
        "phase4-cnl/chapter-004.micro-refined-plan.iter-001.md",
        "phase4-cnl/book.macro-refined-plan.iter-001.md",
        "phase4-cnl/characters.macro-refined-plan.iter-001.md",
        "phase4-cnl/world.macro-refined-plan.iter-001.md"
      ],
      "produced": [
        {
          "stage": "exports",
          "baseName": "manuscript",
          "label": "book",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase8-exports/manuscript.book.iter-001.md",
          "relativePath": "phase8-exports/manuscript.book.iter-001.md"
        },
        {
          "stage": "exports",
          "baseName": "edition-en",
          "label": "reader",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase8-exports/edition-en.reader.iter-001.html",
          "relativePath": "phase8-exports/edition-en.reader.iter-001.html"
        },
        {
          "stage": "exports",
          "baseName": "translation-source",
          "label": "bundle",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase8-exports/translation-source.bundle.iter-001.md",
          "relativePath": "phase8-exports/translation-source.bundle.iter-001.md"
        },
        {
          "stage": "exports",
          "baseName": "editions",
          "label": "bundle",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase8-exports/editions.bundle.iter-001.md",
          "relativePath": "phase8-exports/editions.bundle.iter-001.md"
        }
      ],
      "context": {
        "book": {
          "bookId": "qa-romance-margins",
          "baselineProfile": "romance-relational"
        }
      }
    },
    {
      "runIndex": 7,
      "stage": "translations",
      "consumed": [
        "phase8-exports/translation-source.bundle.iter-001.md"
      ],
      "produced": [
        {
          "stage": "translations",
          "baseName": "edition-ro",
          "label": "reader",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase9-translations/edition-ro.reader.iter-001.html",
          "relativePath": "phase9-translations/edition-ro.reader.iter-001.html"
        },
        {
          "stage": "translations",
          "baseName": "edition-ro",
          "label": "translation-trace",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase9-translations/edition-ro.translation-trace.iter-001.md",
          "relativePath": "phase9-translations/edition-ro.translation-trace.iter-001.md",
          "data": {
            "bookId": "qa-romance-margins",
            "sourceLanguage": "en",
            "targetLanguage": "ro",
            "chunkCount": 81,
            "chunks": [
              {
                "path": "front.subtitle",
                "chunkIndex": 1,
                "source": "Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?",
                "translated": "Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?"
              },
              {
                "path": "front.premise",
                "chunkIndex": 1,
                "source": "Editor Leora Kestrel inherits a failing letterpress studio and can save it only by working with designer Talia Voss, the woman who left both the business and their relationship unfinished three years earlier.",
                "translated": "Editor Leora Kestrel inherits a failing letterpress studio and can save it only by working with designer Talia Voss, the woman who left both the business and their relationship unfinished three years earlier."
              },
              {
                "path": "front.premise",
                "chunkIndex": 2,
                "source": "Estate manager Cassia Mercer gives them one season to deliver a landmark art-book commission, forcing every practical decision to reopen the tenderness and betrayal buried in the studio itself.",
                "translated": "Estate manager Cassia Mercer gives them one season to deliver a landmark art-book commission, forcing every practical decision to reopen the tenderness and betrayal buried in the studio itself."
              },
              {
                "path": "front.thematic-statement",
                "chunkIndex": 1,
                "source": "Partnership becomes real only when usefulness stops impersonating emotional safety.",
                "translated": "Partnership becomes real only when usefulness stops impersonating emotional safety."
              },
              {
                "path": "front.world-rule",
                "chunkIndex": 1,
                "source": "The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women.",
                "translated": "The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women."
              },
              {
                "path": "chapter.chapter-001.paragraph.1",
                "chunkIndex": 1,
                "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt.",
                "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse."
              },
              {
                "path": "chapter.chapter-001.paragraph.2",
                "chunkIndex": 1,
                "source": "On the first day back in the studio, Leora and Talia sort inherited forms and discover a proof set covered in both their handwritten notes.",
                "translated": "On the first day back in the studio, Leora and Talia sort inherited forms and discover a proof set covered in both their handwritten notes."
              },
              {
                "path": "chapter.chapter-001.paragraph.3",
                "chunkIndex": 1,
                "source": "Later, cassia announces the launch deadline and makes their joint contract unavoidable.",
                "translated": "Later, cassia announces the launch deadline and makes their joint contract unavoidable."
              },
              {
                "path": "chapter.chapter-001.paragraph.4",
                "chunkIndex": 1,
                "source": "Later, the annotated proof reveals a page talia once designed around leora's private dedication line.",
                "translated": "Later, the annotated proof reveals a page talia once designed around leora's private dedication line."
              },
              {
                "path": "chapter.chapter-001.paragraph.5",
                "chunkIndex": 1,
                "source": "Nothing that has opened here will close easily.",
                "translated": "Nimic din ceea ce s-a deschis aici nu se va inchide usor."
              },
              {
                "path": "chapter.chapter-002.paragraph.1",
                "chunkIndex": 1,
                "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt.",
                "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse."
              },
              {
                "path": "chapter.chapter-002.paragraph.2",
                "chunkIndex": 1,
                "source": "A batch of folios misprints during an overnight press run, forcing them into the same exhausted shift.",
                "translated": "A batch of folios misprints during an overnight press run, forcing them into the same exhausted shift."
              },
              {
                "path": "chapter.chapter-002.paragraph.3",
                "chunkIndex": 1,
                "source": "Later, talia admits she left after receiving an offer that promised security she never trusted herself to ask leora for.",
                "translated": "Later, talia admits she left after receiving an offer that promised security she never trusted herself to ask leora for."
              },
              {
                "path": "chapter.chapter-002.paragraph.4",
                "chunkIndex": 1,
                "source": "Later, the misprint mirrors the exact margin shift from the night talia left.",
                "translated": "Later, Eroarea de tipar reproduce exact deplasarea de margine din noaptea in care Talia a plecat."
              },
              {
                "path": "chapter.chapter-002.paragraph.5",
                "chunkIndex": 1,
                "source": "Nothing that has opened here will close easily.",
                "translated": "Nimic din ceea ce s-a deschis aici nu se va inchide usor."
              },
              {
                "path": "chapter.chapter-003.paragraph.1",
                "chunkIndex": 1,
                "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt.",
                "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse."
              },
              {
                "path": "chapter.chapter-003.paragraph.2",
                "chunkIndex": 1,
                "source": "At the warehouse mock-up, a museum curator mistakes them for a long-established couple and thanks them for working so seamlessly together.",
                "translated": "At the warehouse mock-up, a museum curator mistakes them for a long-established couple and thanks them for working so seamlessly together."
              },
              {
                "path": "chapter.chapter-003.paragraph.3",
                "chunkIndex": 1,
                "source": "Later, the public misreading makes both women realize how much of their intimacy remains visible even after the rupture.",
                "translated": "Later, the public misreading makes both women realize how much of their intimacy remains visible even after the rupture."
              },
              {
                "path": "chapter.chapter-003.paragraph.4",
                "chunkIndex": 1,
                "source": "Later, the curator chooses the doubled-margin proof as the book's defining design feature.",
                "translated": "Later, Curatoarea alege proba cu marginea dublata drept trasatura definitorie de design a cartii."
              },
              {
                "path": "chapter.chapter-003.paragraph.5",
                "chunkIndex": 1,
                "source": "Nothing that has opened here will close easily.",
                "translated": "Nimic din ceea ce s-a deschis aici nu se va inchide usor."
              },
              {
                "path": "chapter.chapter-004.paragraph.1",
                "chunkIndex": 1,
                "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt.",
                "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse."
              },
              {
                "path": "chapter.chapter-004.paragraph.2",
                "chunkIndex": 1,
                "source": "On launch night, Leora inserts the once-abandoned dedication page back into the finished edition.",
                "translated": "On launch night, Leora inserts the once-abandoned dedication page back into the finished edition."
              },
              {
                "path": "chapter.chapter-004.paragraph.3",
                "chunkIndex": 1,
                "source": "Later, talia sees the page only after the first public copy is opened in front of the crowd.",
                "translated": "Later, talia sees the page only after the first public copy is opened in front of the crowd."
              },
              {
                "path": "chapter.chapter-004.paragraph.4",
                "chunkIndex": 1,
                "source": "Later, the dedication names the year talia left and the future leora still wants.",
                "translated": "Later, Dedicatia numeste anul in care Talia a plecat si viitorul pe care Leora il mai doreste."
              },
              {
                "path": "chapter.chapter-004.paragraph.5",
                "chunkIndex": 1,
                "source": "Leora Kestrel understands now that shared risk creates a truer form of security than controlled distance interdependence-is-stronger-than-isolation.",
                "translated": "Leora Kestrel intelege acum ca shared risk creates a truer form of security than controlled distance interdependence-is-stronger-than-isolation."
              },
              {
                "path": "chapter.chapter-001.paragraph.2",
                "chunkIndex": 2,
                "source": "Cassia announces the launch deadline and makes their joint contract unavoidable.",
                "translated": "Cassia announces the launch deadline and makes their joint contract unavoidable."
              },
              {
                "path": "chapter.chapter-001.paragraph.1",
                "chunkIndex": 2,
                "source": "Work replaces confession here because every surface carries the memory of collaboration.",
                "translated": "Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii."
              },
              {
                "path": "chapter.chapter-001.paragraph.3",
                "chunkIndex": 2,
                "source": "Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived.",
                "translated": "Leora vrea limite clare de lucru, in timp ce Talia continua sa trateze limbajul practic drept o proba pentru a vedea daca tandretea a supravietuit."
              },
              {
                "path": "chapter.chapter-001.paragraph.4",
                "chunkIndex": 2,
                "source": "The job starts carrying evidence of love rather than just shared labor.",
                "translated": "The job starts carrying evidence of love rather than just shared labor."
              },
              {
                "path": "chapter.chapter-001.paragraph.5",
                "chunkIndex": 2,
                "source": "Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?.",
                "translated": "Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?."
              },
              {
                "path": "chapter.chapter-002.paragraph.1",
                "chunkIndex": 2,
                "source": "Work replaces confession here because every surface carries the memory of collaboration.",
                "translated": "Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii."
              },
              {
                "path": "chapter.chapter-002.paragraph.2",
                "chunkIndex": 2,
                "source": "Talia admits she left after receiving an offer that promised security she never trusted herself to ask Leora for.",
                "translated": "Talia admits she left after receiving an offer that promised security she never trusted herself to ask Leora for."
              },
              {
                "path": "chapter.chapter-002.paragraph.3",
                "chunkIndex": 2,
                "source": "Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission.",
                "translated": "Leora vrea ca scuzele sa fie rostite limpede, nu ascunse in vorbaria de productie, in timp ce Talia se teme ca onestitatea directa le va costa comanda."
              },
              {
                "path": "chapter.chapter-002.paragraph.4",
                "chunkIndex": 2,
                "source": "The studio forces the past into the present workload.",
                "translated": "The studio forces the past into the present workload."
              },
              {
                "path": "chapter.chapter-002.paragraph.5",
                "chunkIndex": 2,
                "source": "Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?.",
                "translated": "Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?."
              },
              {
                "path": "chapter.chapter-003.paragraph.1",
                "chunkIndex": 2,
                "source": "Work replaces confession here because every surface carries the memory of collaboration.",
                "translated": "Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii."
              },
              {
                "path": "chapter.chapter-003.paragraph.2",
                "chunkIndex": 2,
                "source": "The public misreading makes both women realize how much of their intimacy remains visible even after the rupture.",
                "translated": "The public misreading makes both women realize how much of their intimacy remains visible even after the rupture."
              },
              {
                "path": "chapter.chapter-003.paragraph.3",
                "chunkIndex": 2,
                "source": "Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence.",
                "translated": "Leora poate pastra parteneriatul intr-o ambiguitate sigura sau poate admite ca aceasta comanda nu poate supravietui unui nou sezon de tacere."
              },
              {
                "path": "chapter.chapter-003.paragraph.4",
                "chunkIndex": 2,
                "source": "Their most damaged page becomes the commission's emotional signature.",
                "translated": "Their most damaged page becomes the commission's emotional signature."
              },
              {
                "path": "chapter.chapter-003.paragraph.5",
                "chunkIndex": 2,
                "source": "Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?.",
                "translated": "Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?."
              },
              {
                "path": "chapter.chapter-004.paragraph.1",
                "chunkIndex": 2,
                "source": "Work replaces confession here because every surface carries the memory of collaboration.",
                "translated": "Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii."
              },
              {
                "path": "chapter.chapter-004.paragraph.2",
                "chunkIndex": 2,
                "source": "Talia sees the page only after the first public copy is opened in front of the crowd.",
                "translated": "Talia sees the page only after the first public copy is opened in front of the crowd."
              },
              {
                "path": "chapter.chapter-004.paragraph.3",
                "chunkIndex": 2,
                "source": "Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability.",
                "translated": "Leora mai poate prezenta gestul drept branding sau il poate lasa sa stea ca un act public de vulnerabilitate asumata."
              },
              {
                "path": "chapter.chapter-004.paragraph.4",
                "chunkIndex": 2,
                "source": "The launch becomes confession as much as success.",
                "translated": "The launch becomes confession as much as success."
              },
              {
                "path": "chapter.chapter-004.paragraph.5",
                "chunkIndex": 2,
                "source": "Scarred-trust-rebuilt-on-painful-clarity.",
                "translated": "Scarred-trust-rebuilt-on-painful-clarity."
              },
              {
                "path": "chapter.chapter-001.paragraph.2",
                "chunkIndex": 3,
                "source": "Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived.",
                "translated": "Leora vrea limite clare de lucru, in timp ce Talia continua sa trateze limbajul practic drept o proba pentru a vedea daca tandretea a supravietuit."
              },
              {
                "path": "chapter.chapter-001.paragraph.1",
                "chunkIndex": 3,
                "source": "Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.",
                "translated": "Talia Voss citeste prea atent incaperea, iar Cassia Mercer mentine vie versiunea faptelor pe care ceilalti ar prefera sa o creada."
              },
              {
                "path": "chapter.chapter-001.paragraph.4",
                "chunkIndex": 3,
                "source": "Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived.",
                "translated": "Leora vrea limite clare de lucru, in timp ce Talia continua sa trateze limbajul practic drept o proba pentru a vedea daca tandretea a supravietuit."
              },
              {
                "path": "chapter.chapter-001.paragraph.3",
                "chunkIndex": 3,
                "source": "When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor.",
                "translated": "When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor."
              },
              {
                "path": "chapter.chapter-002.paragraph.1",
                "chunkIndex": 3,
                "source": "Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.",
                "translated": "Talia Voss citeste prea atent incaperea, iar Cassia Mercer mentine vie versiunea faptelor pe care ceilalti ar prefera sa o creada."
              },
              {
                "path": "chapter.chapter-002.paragraph.2",
                "chunkIndex": 3,
                "source": "Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission.",
                "translated": "Leora vrea ca scuzele sa fie rostite limpede, nu ascunse in vorbaria de productie, in timp ce Talia se teme ca onestitatea directa le va costa comanda."
              },
              {
                "path": "chapter.chapter-002.paragraph.3",
                "chunkIndex": 3,
                "source": "When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload.",
                "translated": "When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload."
              },
              {
                "path": "chapter.chapter-002.paragraph.4",
                "chunkIndex": 3,
                "source": "Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission.",
                "translated": "Leora vrea ca scuzele sa fie rostite limpede, nu ascunse in vorbaria de productie, in timp ce Talia se teme ca onestitatea directa le va costa comanda."
              },
              {
                "path": "chapter.chapter-003.paragraph.1",
                "chunkIndex": 3,
                "source": "Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.",
                "translated": "Talia Voss citeste prea atent incaperea, iar Cassia Mercer mentine vie versiunea faptelor pe care ceilalti ar prefera sa o creada."
              },
              {
                "path": "chapter.chapter-003.paragraph.2",
                "chunkIndex": 3,
                "source": "Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence.",
                "translated": "Leora poate pastra parteneriatul intr-o ambiguitate sigura sau poate admite ca aceasta comanda nu poate supravietui unui nou sezon de tacere."
              },
              {
                "path": "chapter.chapter-003.paragraph.3",
                "chunkIndex": 3,
                "source": "When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature.",
                "translated": "When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature."
              },
              {
                "path": "chapter.chapter-003.paragraph.4",
                "chunkIndex": 3,
                "source": "Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence.",
                "translated": "Leora poate pastra parteneriatul intr-o ambiguitate sigura sau poate admite ca aceasta comanda nu poate supravietui unui nou sezon de tacere."
              },
              {
                "path": "chapter.chapter-004.paragraph.1",
                "chunkIndex": 3,
                "source": "Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.",
                "translated": "Talia Voss citeste prea atent incaperea, iar Cassia Mercer mentine vie versiunea faptelor pe care ceilalti ar prefera sa o creada."
              },
              {
                "path": "chapter.chapter-004.paragraph.2",
                "chunkIndex": 3,
                "source": "Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability.",
                "translated": "Leora mai poate prezenta gestul drept branding sau il poate lasa sa stea ca un act public de vulnerabilitate asumata."
              },
              {
                "path": "chapter.chapter-004.paragraph.3",
                "chunkIndex": 3,
                "source": "When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success.",
                "translated": "When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success."
              },
              {
                "path": "chapter.chapter-004.paragraph.4",
                "chunkIndex": 3,
                "source": "Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability.",
                "translated": "Leora mai poate prezenta gestul drept branding sau il poate lasa sa stea ca un act public de vulnerabilitate asumata."
              },
              {
                "path": "chapter.chapter-001.paragraph.2",
                "chunkIndex": 4,
                "source": "When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor.",
                "translated": "When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor."
              },
              {
                "path": "chapter.chapter-001.paragraph.4",
                "chunkIndex": 4,
                "source": "When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor.",
                "translated": "When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor."
              },
              {
                "path": "chapter.chapter-001.paragraph.3",
                "chunkIndex": 4,
                "source": "They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved.",
                "translated": "They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved."
              },
              {
                "path": "chapter.chapter-002.paragraph.2",
                "chunkIndex": 4,
                "source": "When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload.",
                "translated": "When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload."
              },
              {
                "path": "chapter.chapter-002.paragraph.3",
                "chunkIndex": 4,
                "source": "They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep.",
                "translated": "They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep."
              },
              {
                "path": "chapter.chapter-002.paragraph.4",
                "chunkIndex": 4,
                "source": "When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload.",
                "translated": "When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload."
              },
              {
                "path": "chapter.chapter-003.paragraph.2",
                "chunkIndex": 4,
                "source": "When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature.",
                "translated": "When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature."
              },
              {
                "path": "chapter.chapter-003.paragraph.3",
                "chunkIndex": 4,
                "source": "She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics.",
                "translated": "She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics."
              },
              {
                "path": "chapter.chapter-003.paragraph.4",
                "chunkIndex": 4,
                "source": "When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature.",
                "translated": "When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature."
              },
              {
                "path": "chapter.chapter-004.paragraph.2",
                "chunkIndex": 4,
                "source": "When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success.",
                "translated": "When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success."
              },
              {
                "path": "chapter.chapter-004.paragraph.3",
                "chunkIndex": 4,
                "source": "She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view.",
                "translated": "She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view."
              },
              {
                "path": "chapter.chapter-004.paragraph.4",
                "chunkIndex": 4,
                "source": "When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success.",
                "translated": "When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success."
              },
              {
                "path": "chapter.chapter-001.paragraph.2",
                "chunkIndex": 5,
                "source": "They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved.",
                "translated": "They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved."
              },
              {
                "path": "chapter.chapter-001.paragraph.4",
                "chunkIndex": 5,
                "source": "They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved.",
                "translated": "They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved."
              },
              {
                "path": "chapter.chapter-002.paragraph.2",
                "chunkIndex": 5,
                "source": "They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep.",
                "translated": "They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep."
              },
              {
                "path": "chapter.chapter-002.paragraph.4",
                "chunkIndex": 5,
                "source": "They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep.",
                "translated": "They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep."
              },
              {
                "path": "chapter.chapter-003.paragraph.2",
                "chunkIndex": 5,
                "source": "She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics.",
                "translated": "She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics."
              },
              {
                "path": "chapter.chapter-003.paragraph.4",
                "chunkIndex": 5,
                "source": "She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics.",
                "translated": "She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics."
              },
              {
                "path": "chapter.chapter-004.paragraph.2",
                "chunkIndex": 5,
                "source": "She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view.",
                "translated": "She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view."
              },
              {
                "path": "chapter.chapter-004.paragraph.4",
                "chunkIndex": 5,
                "source": "She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view.",
                "translated": "She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view."
              }
            ]
          }
        },
        {
          "stage": "translations",
          "baseName": "editions",
          "label": "bundle",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase9-translations/editions.bundle.iter-001.md",
          "relativePath": "phase9-translations/editions.bundle.iter-001.md"
        }
      ],
      "context": {
        "book": {
          "bookId": "qa-romance-margins",
          "baselineProfile": "romance-relational"
        }
      }
    },
    {
      "runIndex": 8,
      "stage": "validation",
      "consumed": [
        "phase5-drafts/chapter-001.draft.iter-001.md",
        "phase5-drafts/chapter-002.draft.iter-001.md",
        "phase5-drafts/chapter-003.draft.iter-001.md",
        "phase5-drafts/chapter-004.draft.iter-001.md",
        "phase2-chapters/chapter-001.symbolic-plan.iter-001.md",
        "phase2-chapters/chapter-002.symbolic-plan.iter-001.md",
        "phase2-chapters/chapter-003.symbolic-plan.iter-001.md",
        "phase2-chapters/chapter-004.symbolic-plan.iter-001.md",
        "phase4-cnl/chapter-001.chapter-refined-plan.iter-001.md",
        "phase4-cnl/chapter-002.chapter-refined-plan.iter-001.md",
        "phase4-cnl/chapter-003.chapter-refined-plan.iter-001.md",
        "phase4-cnl/chapter-004.chapter-refined-plan.iter-001.md",
        "phase4-cnl/book.macro-refined-plan.iter-001.md",
        "phase4-cnl/characters.macro-refined-plan.iter-001.md",
        "phase4-cnl/world.macro-refined-plan.iter-001.md",
        "phase4-cnl/chapter-001.micro-refined-plan.iter-001.md",
        "phase4-cnl/chapter-002.micro-refined-plan.iter-001.md",
        "phase4-cnl/chapter-003.micro-refined-plan.iter-001.md",
        "phase4-cnl/chapter-004.micro-refined-plan.iter-001.md",
        "phase4-cnl/placeholder-resolution.cnl-resolution.iter-001.md",
        "phase8-exports/edition-en.reader.iter-001.html",
        "phase9-translations/edition-ro.reader.iter-001.html",
        "phase9-translations/editions.bundle.iter-001.md",
        "phase9-translations/editions.bundle.iter-001.md"
      ],
      "produced": [
        {
          "stage": "validation",
          "baseName": "summary",
          "label": "validation",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase6-validation/summary.validation.iter-001.md",
          "relativePath": "phase6-validation/summary.validation.iter-001.md"
        },
        {
          "stage": "validation",
          "baseName": "issues",
          "label": "validation",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase6-validation/issues.validation.iter-001.md",
          "relativePath": "phase6-validation/issues.validation.iter-001.md"
        },
        {
          "stage": "validation",
          "baseName": "stages",
          "label": "validation",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase6-validation/stages.validation.iter-001.md",
          "relativePath": "phase6-validation/stages.validation.iter-001.md"
        },
        {
          "stage": "validation",
          "baseName": "tasks",
          "label": "validation",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase6-validation/tasks.validation.iter-001.md",
          "relativePath": "phase6-validation/tasks.validation.iter-001.md"
        },
        {
          "stage": "validation",
          "baseName": "summary",
          "label": "report",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase7-reports/summary.report.iter-001.md",
          "relativePath": "phase7-reports/summary.report.iter-001.md"
        },
        {
          "stage": "validation",
          "baseName": "stages",
          "label": "report",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase7-reports/stages.report.iter-001.md",
          "relativePath": "phase7-reports/stages.report.iter-001.md"
        },
        {
          "stage": "validation",
          "baseName": "tasks",
          "label": "report",
          "iteration": 1,
          "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase7-reports/tasks.report.iter-001.md",
          "relativePath": "phase7-reports/tasks.report.iter-001.md"
        }
      ],
      "context": {
        "book": {
          "bookId": "qa-romance-margins",
          "baselineProfile": "romance-relational"
        }
      }
    }
  ],
  "latest": {
    "symbolic-seed": [
      {
        "stage": "symbolic-seed",
        "baseName": "chapter-001",
        "label": "symbolic-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase3-micro/chapter-001.symbolic-plan.iter-001.md",
        "relativePath": "phase3-micro/chapter-001.symbolic-plan.iter-001.md"
      },
      {
        "stage": "symbolic-seed",
        "baseName": "chapter-002",
        "label": "symbolic-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase3-micro/chapter-002.symbolic-plan.iter-001.md",
        "relativePath": "phase3-micro/chapter-002.symbolic-plan.iter-001.md"
      },
      {
        "stage": "symbolic-seed",
        "baseName": "chapter-003",
        "label": "symbolic-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase3-micro/chapter-003.symbolic-plan.iter-001.md",
        "relativePath": "phase3-micro/chapter-003.symbolic-plan.iter-001.md"
      },
      {
        "stage": "symbolic-seed",
        "baseName": "chapter-004",
        "label": "symbolic-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase3-micro/chapter-004.symbolic-plan.iter-001.md",
        "relativePath": "phase3-micro/chapter-004.symbolic-plan.iter-001.md"
      }
    ],
    "cnl": [
      {
        "stage": "cnl",
        "baseName": "book",
        "label": "macro-refined-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/book.macro-refined-plan.iter-001.md",
        "relativePath": "phase4-cnl/book.macro-refined-plan.iter-001.md"
      },
      {
        "stage": "cnl",
        "baseName": "characters",
        "label": "macro-refined-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/characters.macro-refined-plan.iter-001.md",
        "relativePath": "phase4-cnl/characters.macro-refined-plan.iter-001.md"
      },
      {
        "stage": "cnl",
        "baseName": "world",
        "label": "macro-refined-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/world.macro-refined-plan.iter-001.md",
        "relativePath": "phase4-cnl/world.macro-refined-plan.iter-001.md"
      },
      {
        "stage": "cnl",
        "baseName": "chapter-001",
        "label": "chapter-refined-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-001.chapter-refined-plan.iter-001.md",
        "relativePath": "phase4-cnl/chapter-001.chapter-refined-plan.iter-001.md"
      },
      {
        "stage": "cnl",
        "baseName": "chapter-002",
        "label": "chapter-refined-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-002.chapter-refined-plan.iter-001.md",
        "relativePath": "phase4-cnl/chapter-002.chapter-refined-plan.iter-001.md"
      },
      {
        "stage": "cnl",
        "baseName": "chapter-003",
        "label": "chapter-refined-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-003.chapter-refined-plan.iter-001.md",
        "relativePath": "phase4-cnl/chapter-003.chapter-refined-plan.iter-001.md"
      },
      {
        "stage": "cnl",
        "baseName": "chapter-004",
        "label": "chapter-refined-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-004.chapter-refined-plan.iter-001.md",
        "relativePath": "phase4-cnl/chapter-004.chapter-refined-plan.iter-001.md"
      },
      {
        "stage": "cnl",
        "baseName": "chapter-001",
        "label": "micro-refined-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-001.micro-refined-plan.iter-001.md",
        "relativePath": "phase4-cnl/chapter-001.micro-refined-plan.iter-001.md"
      },
      {
        "stage": "cnl",
        "baseName": "chapter-002",
        "label": "micro-refined-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-002.micro-refined-plan.iter-001.md",
        "relativePath": "phase4-cnl/chapter-002.micro-refined-plan.iter-001.md"
      },
      {
        "stage": "cnl",
        "baseName": "chapter-003",
        "label": "micro-refined-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-003.micro-refined-plan.iter-001.md",
        "relativePath": "phase4-cnl/chapter-003.micro-refined-plan.iter-001.md"
      },
      {
        "stage": "cnl",
        "baseName": "chapter-004",
        "label": "micro-refined-plan",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/chapter-004.micro-refined-plan.iter-001.md",
        "relativePath": "phase4-cnl/chapter-004.micro-refined-plan.iter-001.md"
      },
      {
        "stage": "cnl",
        "baseName": "placeholder-resolution",
        "label": "cnl-resolution",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase4-cnl/placeholder-resolution.cnl-resolution.iter-001.md",
        "relativePath": "phase4-cnl/placeholder-resolution.cnl-resolution.iter-001.md"
      }
    ],
    "drafts": [
      {
        "stage": "drafts",
        "baseName": "chapter-001",
        "label": "draft",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase5-drafts/chapter-001.draft.iter-001.md",
        "relativePath": "phase5-drafts/chapter-001.draft.iter-001.md"
      },
      {
        "stage": "drafts",
        "baseName": "chapter-002",
        "label": "draft",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase5-drafts/chapter-002.draft.iter-001.md",
        "relativePath": "phase5-drafts/chapter-002.draft.iter-001.md"
      },
      {
        "stage": "drafts",
        "baseName": "chapter-003",
        "label": "draft",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase5-drafts/chapter-003.draft.iter-001.md",
        "relativePath": "phase5-drafts/chapter-003.draft.iter-001.md"
      },
      {
        "stage": "drafts",
        "baseName": "chapter-004",
        "label": "draft",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase5-drafts/chapter-004.draft.iter-001.md",
        "relativePath": "phase5-drafts/chapter-004.draft.iter-001.md"
      }
    ],
    "exports": [
      {
        "stage": "exports",
        "baseName": "manuscript",
        "label": "book",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase8-exports/manuscript.book.iter-001.md",
        "relativePath": "phase8-exports/manuscript.book.iter-001.md"
      },
      {
        "stage": "exports",
        "baseName": "edition-en",
        "label": "reader",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase8-exports/edition-en.reader.iter-001.html",
        "relativePath": "phase8-exports/edition-en.reader.iter-001.html"
      },
      {
        "stage": "exports",
        "baseName": "translation-source",
        "label": "bundle",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase8-exports/translation-source.bundle.iter-001.md",
        "relativePath": "phase8-exports/translation-source.bundle.iter-001.md"
      },
      {
        "stage": "exports",
        "baseName": "editions",
        "label": "bundle",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase8-exports/editions.bundle.iter-001.md",
        "relativePath": "phase8-exports/editions.bundle.iter-001.md"
      }
    ],
    "translations": [
      {
        "stage": "translations",
        "baseName": "edition-ro",
        "label": "reader",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase9-translations/edition-ro.reader.iter-001.html",
        "relativePath": "phase9-translations/edition-ro.reader.iter-001.html"
      },
      {
        "stage": "translations",
        "baseName": "edition-ro",
        "label": "translation-trace",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase9-translations/edition-ro.translation-trace.iter-001.md",
        "relativePath": "phase9-translations/edition-ro.translation-trace.iter-001.md",
        "data": {
          "bookId": "qa-romance-margins",
          "sourceLanguage": "en",
          "targetLanguage": "ro",
          "chunkCount": 81,
          "chunks": [
            {
              "path": "front.subtitle",
              "chunkIndex": 1,
              "source": "Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?",
              "translated": "Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?"
            },
            {
              "path": "front.premise",
              "chunkIndex": 1,
              "source": "Editor Leora Kestrel inherits a failing letterpress studio and can save it only by working with designer Talia Voss, the woman who left both the business and their relationship unfinished three years earlier.",
              "translated": "Editor Leora Kestrel inherits a failing letterpress studio and can save it only by working with designer Talia Voss, the woman who left both the business and their relationship unfinished three years earlier."
            },
            {
              "path": "front.premise",
              "chunkIndex": 2,
              "source": "Estate manager Cassia Mercer gives them one season to deliver a landmark art-book commission, forcing every practical decision to reopen the tenderness and betrayal buried in the studio itself.",
              "translated": "Estate manager Cassia Mercer gives them one season to deliver a landmark art-book commission, forcing every practical decision to reopen the tenderness and betrayal buried in the studio itself."
            },
            {
              "path": "front.thematic-statement",
              "chunkIndex": 1,
              "source": "Partnership becomes real only when usefulness stops impersonating emotional safety.",
              "translated": "Partnership becomes real only when usefulness stops impersonating emotional safety."
            },
            {
              "path": "front.world-rule",
              "chunkIndex": 1,
              "source": "The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women.",
              "translated": "The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women."
            },
            {
              "path": "chapter.chapter-001.paragraph.1",
              "chunkIndex": 1,
              "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt.",
              "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse."
            },
            {
              "path": "chapter.chapter-001.paragraph.2",
              "chunkIndex": 1,
              "source": "On the first day back in the studio, Leora and Talia sort inherited forms and discover a proof set covered in both their handwritten notes.",
              "translated": "On the first day back in the studio, Leora and Talia sort inherited forms and discover a proof set covered in both their handwritten notes."
            },
            {
              "path": "chapter.chapter-001.paragraph.3",
              "chunkIndex": 1,
              "source": "Later, cassia announces the launch deadline and makes their joint contract unavoidable.",
              "translated": "Later, cassia announces the launch deadline and makes their joint contract unavoidable."
            },
            {
              "path": "chapter.chapter-001.paragraph.4",
              "chunkIndex": 1,
              "source": "Later, the annotated proof reveals a page talia once designed around leora's private dedication line.",
              "translated": "Later, the annotated proof reveals a page talia once designed around leora's private dedication line."
            },
            {
              "path": "chapter.chapter-001.paragraph.5",
              "chunkIndex": 1,
              "source": "Nothing that has opened here will close easily.",
              "translated": "Nimic din ceea ce s-a deschis aici nu se va inchide usor."
            },
            {
              "path": "chapter.chapter-002.paragraph.1",
              "chunkIndex": 1,
              "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt.",
              "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse."
            },
            {
              "path": "chapter.chapter-002.paragraph.2",
              "chunkIndex": 1,
              "source": "A batch of folios misprints during an overnight press run, forcing them into the same exhausted shift.",
              "translated": "A batch of folios misprints during an overnight press run, forcing them into the same exhausted shift."
            },
            {
              "path": "chapter.chapter-002.paragraph.3",
              "chunkIndex": 1,
              "source": "Later, talia admits she left after receiving an offer that promised security she never trusted herself to ask leora for.",
              "translated": "Later, talia admits she left after receiving an offer that promised security she never trusted herself to ask leora for."
            },
            {
              "path": "chapter.chapter-002.paragraph.4",
              "chunkIndex": 1,
              "source": "Later, the misprint mirrors the exact margin shift from the night talia left.",
              "translated": "Later, Eroarea de tipar reproduce exact deplasarea de margine din noaptea in care Talia a plecat."
            },
            {
              "path": "chapter.chapter-002.paragraph.5",
              "chunkIndex": 1,
              "source": "Nothing that has opened here will close easily.",
              "translated": "Nimic din ceea ce s-a deschis aici nu se va inchide usor."
            },
            {
              "path": "chapter.chapter-003.paragraph.1",
              "chunkIndex": 1,
              "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt.",
              "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse."
            },
            {
              "path": "chapter.chapter-003.paragraph.2",
              "chunkIndex": 1,
              "source": "At the warehouse mock-up, a museum curator mistakes them for a long-established couple and thanks them for working so seamlessly together.",
              "translated": "At the warehouse mock-up, a museum curator mistakes them for a long-established couple and thanks them for working so seamlessly together."
            },
            {
              "path": "chapter.chapter-003.paragraph.3",
              "chunkIndex": 1,
              "source": "Later, the public misreading makes both women realize how much of their intimacy remains visible even after the rupture.",
              "translated": "Later, the public misreading makes both women realize how much of their intimacy remains visible even after the rupture."
            },
            {
              "path": "chapter.chapter-003.paragraph.4",
              "chunkIndex": 1,
              "source": "Later, the curator chooses the doubled-margin proof as the book's defining design feature.",
              "translated": "Later, Curatoarea alege proba cu marginea dublata drept trasatura definitorie de design a cartii."
            },
            {
              "path": "chapter.chapter-003.paragraph.5",
              "chunkIndex": 1,
              "source": "Nothing that has opened here will close easily.",
              "translated": "Nimic din ceea ce s-a deschis aici nu se va inchide usor."
            },
            {
              "path": "chapter.chapter-004.paragraph.1",
              "chunkIndex": 1,
              "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt.",
              "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse."
            },
            {
              "path": "chapter.chapter-004.paragraph.2",
              "chunkIndex": 1,
              "source": "On launch night, Leora inserts the once-abandoned dedication page back into the finished edition.",
              "translated": "On launch night, Leora inserts the once-abandoned dedication page back into the finished edition."
            },
            {
              "path": "chapter.chapter-004.paragraph.3",
              "chunkIndex": 1,
              "source": "Later, talia sees the page only after the first public copy is opened in front of the crowd.",
              "translated": "Later, talia sees the page only after the first public copy is opened in front of the crowd."
            },
            {
              "path": "chapter.chapter-004.paragraph.4",
              "chunkIndex": 1,
              "source": "Later, the dedication names the year talia left and the future leora still wants.",
              "translated": "Later, Dedicatia numeste anul in care Talia a plecat si viitorul pe care Leora il mai doreste."
            },
            {
              "path": "chapter.chapter-004.paragraph.5",
              "chunkIndex": 1,
              "source": "Leora Kestrel understands now that shared risk creates a truer form of security than controlled distance interdependence-is-stronger-than-isolation.",
              "translated": "Leora Kestrel intelege acum ca shared risk creates a truer form of security than controlled distance interdependence-is-stronger-than-isolation."
            },
            {
              "path": "chapter.chapter-001.paragraph.2",
              "chunkIndex": 2,
              "source": "Cassia announces the launch deadline and makes their joint contract unavoidable.",
              "translated": "Cassia announces the launch deadline and makes their joint contract unavoidable."
            },
            {
              "path": "chapter.chapter-001.paragraph.1",
              "chunkIndex": 2,
              "source": "Work replaces confession here because every surface carries the memory of collaboration.",
              "translated": "Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii."
            },
            {
              "path": "chapter.chapter-001.paragraph.3",
              "chunkIndex": 2,
              "source": "Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived.",
              "translated": "Leora vrea limite clare de lucru, in timp ce Talia continua sa trateze limbajul practic drept o proba pentru a vedea daca tandretea a supravietuit."
            },
            {
              "path": "chapter.chapter-001.paragraph.4",
              "chunkIndex": 2,
              "source": "The job starts carrying evidence of love rather than just shared labor.",
              "translated": "The job starts carrying evidence of love rather than just shared labor."
            },
            {
              "path": "chapter.chapter-001.paragraph.5",
              "chunkIndex": 2,
              "source": "Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?.",
              "translated": "Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?."
            },
            {
              "path": "chapter.chapter-002.paragraph.1",
              "chunkIndex": 2,
              "source": "Work replaces confession here because every surface carries the memory of collaboration.",
              "translated": "Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii."
            },
            {
              "path": "chapter.chapter-002.paragraph.2",
              "chunkIndex": 2,
              "source": "Talia admits she left after receiving an offer that promised security she never trusted herself to ask Leora for.",
              "translated": "Talia admits she left after receiving an offer that promised security she never trusted herself to ask Leora for."
            },
            {
              "path": "chapter.chapter-002.paragraph.3",
              "chunkIndex": 2,
              "source": "Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission.",
              "translated": "Leora vrea ca scuzele sa fie rostite limpede, nu ascunse in vorbaria de productie, in timp ce Talia se teme ca onestitatea directa le va costa comanda."
            },
            {
              "path": "chapter.chapter-002.paragraph.4",
              "chunkIndex": 2,
              "source": "The studio forces the past into the present workload.",
              "translated": "The studio forces the past into the present workload."
            },
            {
              "path": "chapter.chapter-002.paragraph.5",
              "chunkIndex": 2,
              "source": "Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?.",
              "translated": "Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?."
            },
            {
              "path": "chapter.chapter-003.paragraph.1",
              "chunkIndex": 2,
              "source": "Work replaces confession here because every surface carries the memory of collaboration.",
              "translated": "Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii."
            },
            {
              "path": "chapter.chapter-003.paragraph.2",
              "chunkIndex": 2,
              "source": "The public misreading makes both women realize how much of their intimacy remains visible even after the rupture.",
              "translated": "The public misreading makes both women realize how much of their intimacy remains visible even after the rupture."
            },
            {
              "path": "chapter.chapter-003.paragraph.3",
              "chunkIndex": 2,
              "source": "Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence.",
              "translated": "Leora poate pastra parteneriatul intr-o ambiguitate sigura sau poate admite ca aceasta comanda nu poate supravietui unui nou sezon de tacere."
            },
            {
              "path": "chapter.chapter-003.paragraph.4",
              "chunkIndex": 2,
              "source": "Their most damaged page becomes the commission's emotional signature.",
              "translated": "Their most damaged page becomes the commission's emotional signature."
            },
            {
              "path": "chapter.chapter-003.paragraph.5",
              "chunkIndex": 2,
              "source": "Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?.",
              "translated": "Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?."
            },
            {
              "path": "chapter.chapter-004.paragraph.1",
              "chunkIndex": 2,
              "source": "Work replaces confession here because every surface carries the memory of collaboration.",
              "translated": "Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii."
            },
            {
              "path": "chapter.chapter-004.paragraph.2",
              "chunkIndex": 2,
              "source": "Talia sees the page only after the first public copy is opened in front of the crowd.",
              "translated": "Talia sees the page only after the first public copy is opened in front of the crowd."
            },
            {
              "path": "chapter.chapter-004.paragraph.3",
              "chunkIndex": 2,
              "source": "Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability.",
              "translated": "Leora mai poate prezenta gestul drept branding sau il poate lasa sa stea ca un act public de vulnerabilitate asumata."
            },
            {
              "path": "chapter.chapter-004.paragraph.4",
              "chunkIndex": 2,
              "source": "The launch becomes confession as much as success.",
              "translated": "The launch becomes confession as much as success."
            },
            {
              "path": "chapter.chapter-004.paragraph.5",
              "chunkIndex": 2,
              "source": "Scarred-trust-rebuilt-on-painful-clarity.",
              "translated": "Scarred-trust-rebuilt-on-painful-clarity."
            },
            {
              "path": "chapter.chapter-001.paragraph.2",
              "chunkIndex": 3,
              "source": "Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived.",
              "translated": "Leora vrea limite clare de lucru, in timp ce Talia continua sa trateze limbajul practic drept o proba pentru a vedea daca tandretea a supravietuit."
            },
            {
              "path": "chapter.chapter-001.paragraph.1",
              "chunkIndex": 3,
              "source": "Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.",
              "translated": "Talia Voss citeste prea atent incaperea, iar Cassia Mercer mentine vie versiunea faptelor pe care ceilalti ar prefera sa o creada."
            },
            {
              "path": "chapter.chapter-001.paragraph.4",
              "chunkIndex": 3,
              "source": "Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived.",
              "translated": "Leora vrea limite clare de lucru, in timp ce Talia continua sa trateze limbajul practic drept o proba pentru a vedea daca tandretea a supravietuit."
            },
            {
              "path": "chapter.chapter-001.paragraph.3",
              "chunkIndex": 3,
              "source": "When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor.",
              "translated": "When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor."
            },
            {
              "path": "chapter.chapter-002.paragraph.1",
              "chunkIndex": 3,
              "source": "Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.",
              "translated": "Talia Voss citeste prea atent incaperea, iar Cassia Mercer mentine vie versiunea faptelor pe care ceilalti ar prefera sa o creada."
            },
            {
              "path": "chapter.chapter-002.paragraph.2",
              "chunkIndex": 3,
              "source": "Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission.",
              "translated": "Leora vrea ca scuzele sa fie rostite limpede, nu ascunse in vorbaria de productie, in timp ce Talia se teme ca onestitatea directa le va costa comanda."
            },
            {
              "path": "chapter.chapter-002.paragraph.3",
              "chunkIndex": 3,
              "source": "When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload.",
              "translated": "When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload."
            },
            {
              "path": "chapter.chapter-002.paragraph.4",
              "chunkIndex": 3,
              "source": "Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission.",
              "translated": "Leora vrea ca scuzele sa fie rostite limpede, nu ascunse in vorbaria de productie, in timp ce Talia se teme ca onestitatea directa le va costa comanda."
            },
            {
              "path": "chapter.chapter-003.paragraph.1",
              "chunkIndex": 3,
              "source": "Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.",
              "translated": "Talia Voss citeste prea atent incaperea, iar Cassia Mercer mentine vie versiunea faptelor pe care ceilalti ar prefera sa o creada."
            },
            {
              "path": "chapter.chapter-003.paragraph.2",
              "chunkIndex": 3,
              "source": "Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence.",
              "translated": "Leora poate pastra parteneriatul intr-o ambiguitate sigura sau poate admite ca aceasta comanda nu poate supravietui unui nou sezon de tacere."
            },
            {
              "path": "chapter.chapter-003.paragraph.3",
              "chunkIndex": 3,
              "source": "When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature.",
              "translated": "When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature."
            },
            {
              "path": "chapter.chapter-003.paragraph.4",
              "chunkIndex": 3,
              "source": "Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence.",
              "translated": "Leora poate pastra parteneriatul intr-o ambiguitate sigura sau poate admite ca aceasta comanda nu poate supravietui unui nou sezon de tacere."
            },
            {
              "path": "chapter.chapter-004.paragraph.1",
              "chunkIndex": 3,
              "source": "Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.",
              "translated": "Talia Voss citeste prea atent incaperea, iar Cassia Mercer mentine vie versiunea faptelor pe care ceilalti ar prefera sa o creada."
            },
            {
              "path": "chapter.chapter-004.paragraph.2",
              "chunkIndex": 3,
              "source": "Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability.",
              "translated": "Leora mai poate prezenta gestul drept branding sau il poate lasa sa stea ca un act public de vulnerabilitate asumata."
            },
            {
              "path": "chapter.chapter-004.paragraph.3",
              "chunkIndex": 3,
              "source": "When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success.",
              "translated": "When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success."
            },
            {
              "path": "chapter.chapter-004.paragraph.4",
              "chunkIndex": 3,
              "source": "Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability.",
              "translated": "Leora mai poate prezenta gestul drept branding sau il poate lasa sa stea ca un act public de vulnerabilitate asumata."
            },
            {
              "path": "chapter.chapter-001.paragraph.2",
              "chunkIndex": 4,
              "source": "When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor.",
              "translated": "When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor."
            },
            {
              "path": "chapter.chapter-001.paragraph.4",
              "chunkIndex": 4,
              "source": "When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor.",
              "translated": "When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor."
            },
            {
              "path": "chapter.chapter-001.paragraph.3",
              "chunkIndex": 4,
              "source": "They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved.",
              "translated": "They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved."
            },
            {
              "path": "chapter.chapter-002.paragraph.2",
              "chunkIndex": 4,
              "source": "When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload.",
              "translated": "When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload."
            },
            {
              "path": "chapter.chapter-002.paragraph.3",
              "chunkIndex": 4,
              "source": "They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep.",
              "translated": "They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep."
            },
            {
              "path": "chapter.chapter-002.paragraph.4",
              "chunkIndex": 4,
              "source": "When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload.",
              "translated": "When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload."
            },
            {
              "path": "chapter.chapter-003.paragraph.2",
              "chunkIndex": 4,
              "source": "When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature.",
              "translated": "When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature."
            },
            {
              "path": "chapter.chapter-003.paragraph.3",
              "chunkIndex": 4,
              "source": "She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics.",
              "translated": "She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics."
            },
            {
              "path": "chapter.chapter-003.paragraph.4",
              "chunkIndex": 4,
              "source": "When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature.",
              "translated": "When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature."
            },
            {
              "path": "chapter.chapter-004.paragraph.2",
              "chunkIndex": 4,
              "source": "When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success.",
              "translated": "When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success."
            },
            {
              "path": "chapter.chapter-004.paragraph.3",
              "chunkIndex": 4,
              "source": "She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view.",
              "translated": "She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view."
            },
            {
              "path": "chapter.chapter-004.paragraph.4",
              "chunkIndex": 4,
              "source": "When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success.",
              "translated": "When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success."
            },
            {
              "path": "chapter.chapter-001.paragraph.2",
              "chunkIndex": 5,
              "source": "They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved.",
              "translated": "They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved."
            },
            {
              "path": "chapter.chapter-001.paragraph.4",
              "chunkIndex": 5,
              "source": "They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved.",
              "translated": "They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved."
            },
            {
              "path": "chapter.chapter-002.paragraph.2",
              "chunkIndex": 5,
              "source": "They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep.",
              "translated": "They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep."
            },
            {
              "path": "chapter.chapter-002.paragraph.4",
              "chunkIndex": 5,
              "source": "They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep.",
              "translated": "They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep."
            },
            {
              "path": "chapter.chapter-003.paragraph.2",
              "chunkIndex": 5,
              "source": "She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics.",
              "translated": "She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics."
            },
            {
              "path": "chapter.chapter-003.paragraph.4",
              "chunkIndex": 5,
              "source": "She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics.",
              "translated": "She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics."
            },
            {
              "path": "chapter.chapter-004.paragraph.2",
              "chunkIndex": 5,
              "source": "She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view.",
              "translated": "She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view."
            },
            {
              "path": "chapter.chapter-004.paragraph.4",
              "chunkIndex": 5,
              "source": "She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view.",
              "translated": "She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view."
            }
          ]
        }
      },
      {
        "stage": "translations",
        "baseName": "editions",
        "label": "bundle",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase9-translations/editions.bundle.iter-001.md",
        "relativePath": "phase9-translations/editions.bundle.iter-001.md"
      }
    ],
    "validation": [
      {
        "stage": "validation",
        "baseName": "summary",
        "label": "validation",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase6-validation/summary.validation.iter-001.md",
        "relativePath": "phase6-validation/summary.validation.iter-001.md"
      },
      {
        "stage": "validation",
        "baseName": "issues",
        "label": "validation",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase6-validation/issues.validation.iter-001.md",
        "relativePath": "phase6-validation/issues.validation.iter-001.md"
      },
      {
        "stage": "validation",
        "baseName": "stages",
        "label": "validation",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase6-validation/stages.validation.iter-001.md",
        "relativePath": "phase6-validation/stages.validation.iter-001.md"
      },
      {
        "stage": "validation",
        "baseName": "tasks",
        "label": "validation",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase6-validation/tasks.validation.iter-001.md",
        "relativePath": "phase6-validation/tasks.validation.iter-001.md"
      },
      {
        "stage": "validation",
        "baseName": "summary",
        "label": "report",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase7-reports/summary.report.iter-001.md",
        "relativePath": "phase7-reports/summary.report.iter-001.md"
      },
      {
        "stage": "validation",
        "baseName": "stages",
        "label": "report",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase7-reports/stages.report.iter-001.md",
        "relativePath": "phase7-reports/stages.report.iter-001.md"
      },
      {
        "stage": "validation",
        "baseName": "tasks",
        "label": "report",
        "iteration": 1,
        "filePath": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins/phase7-reports/tasks.report.iter-001.md",
        "relativePath": "phase7-reports/tasks.report.iter-001.md"
      }
    ]
  },
  "book": {
    "bookId": "qa-romance-margins",
    "baselineProfile": "romance-relational",
    "workForm": "novelette"
  }
}
-->
