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
            "chunkCount": 9,
            "chunks": [
              {
                "path": "front.title",
                "chunkIndex": 1,
                "source": "Margins of the Heart",
                "translated": "Marginile inimii",
                "metadata": {
                  "granularity": "section"
                }
              },
              {
                "path": "front.subtitle",
                "chunkIndex": 2,
                "source": "Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?",
                "translated": "Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?",
                "metadata": {
                  "granularity": "section"
                }
              },
              {
                "path": "front.premise",
                "chunkIndex": 3,
                "source": "Editor Leora Kestrel inherits a failing letterpress studio and can save it only by working with designer Talia Voss, the woman who left both the business and their relationship unfinished three years earlier. Estate manager Cassia Mercer gives them one season to deliver a landmark art-book commission, forcing every practical decision to reopen the tenderness and betrayal buried in the studio itself.",
                "translated": "Editoarea Leora Kestrel mosteneste un atelier tipografic aflat in declin si il poate salva doar lucrand cu designerul Talia Voss, femeia care a lasat neterminate atat afacerea, cat si relatia lor, cu trei ani in urma. Administratoarea domeniului, Cassia Mercer, le da un singur sezon pentru a livra o comanda-emblema de carte de arta, fortand fiecare decizie practica sa redeschida tandretea si tradarea ingropate chiar in atelier.",
                "metadata": {
                  "granularity": "section"
                }
              },
              {
                "path": "front.thematic-statement",
                "chunkIndex": 4,
                "source": "Partnership becomes real only when usefulness stops impersonating emotional safety.",
                "translated": "Parteneriatul devine real doar atunci cand utilitatea inceteaza sa mai joace rolul sigurantei emotionale.",
                "metadata": {
                  "granularity": "section"
                }
              },
              {
                "path": "front.world-rule",
                "chunkIndex": 5,
                "source": "The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women.",
                "translated": "Mostenirea tine atelierul deschis doar daca lucrarea pentru muzeu este livrata la timp si semnata de ambele femei.",
                "metadata": {
                  "granularity": "section"
                }
              },
              {
                "path": "chapter.chapter-001",
                "chunkIndex": 6,
                "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt. Work replaces confession here because every surface carries the memory of collaboration. Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.\n\nOn the first day back in the studio, Leora and Talia sort inherited forms and discover a proof set covered in both their handwritten notes. Cassia announces the launch deadline and makes their joint contract unavoidable. Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived. When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor. They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved.\n\nLater, cassia announces the launch deadline and makes their joint contract unavoidable. Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived. When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor. They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved.\n\nLater, the annotated proof reveals a page talia once designed around leora's private dedication line. The job starts carrying evidence of love rather than just shared labor. Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived. When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor. They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved.\n\nNothing that has opened here will close easily. Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?",
                "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse. Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii.. Talia Voss citeste prea atent incaperea, iar Cassia Mercer tine in viata versiunea de evenimente pe care ceilalti ar prefera sa o creada. In prima zi inapoi in atelier, Leora si Talia sorteaza formele mostenite si descopera un set de probe acoperit de notitele lor scrise de mana. Cassia anunta termenul de lansare si face contractul lor comun inevitabil. Leora vrea limite clare de lucru, in timp ce Talia continua sa trateze limbajul practic drept o proba pentru a vedea daca tandretea a supravietuit. Cand proba adnotata dezvaluie o pagina pe care Talia a construit-o candva in jurul randului de dedicatie privata al Leorei., lucrarea incepe sa poarte dovezi ale iubirii, nu doar ale muncii impartite. Cad de acord sa imparta camera de lucru pentru comanda, dar sa nu discute de ce a plecat Talia pana dupa aprobarea primului dummy book. Mai tarziu, cassia anunta termenul de lansare si face contractul lor comun inevitabil. Leora vrea limite clare de lucru, in timp ce Talia continua sa trateze limbajul practic drept o proba pentru a vedea daca tandretea a supravietuit. Cand proba adnotata dezvaluie o pagina pe care Talia a construit-o candva in jurul randului de dedicatie privata al Leorei., lucrarea incepe sa poarte dovezi ale iubirii, nu doar ale muncii impartite. Cad de acord sa imparta camera de lucru pentru comanda, dar sa nu discute de ce a plecat Talia pana dupa aprobarea primului dummy book. Mai tarziu, proba adnotata dezvaluie o pagina pe care talia a construit-o candva in jurul randului de dedicatie privata al leorei. Lucrarea incepe sa poarte dovezi ale iubirii, nu doar ale muncii impartite. Leora vrea limite clare de lucru, in timp ce Talia continua sa trateze limbajul practic drept o proba pentru a vedea daca tandretea a supravietuit. Cand proba adnotata dezvaluie o pagina pe care Talia a construit-o candva in jurul randului de dedicatie privata al Leorei., lucrarea incepe sa poarte dovezi ale iubirii, nu doar ale muncii impartite. Cad de acord sa imparta camera de lucru pentru comanda, dar sa nu discute de ce a plecat Talia pana dupa aprobarea primului dummy book. Nimic din ceea ce tocmai s-a deschis nu se mai inchide usor. Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?",
                "metadata": {
                  "granularity": "chapter",
                  "chapterNumber": 1,
                  "paragraphCount": 5,
                  "displayTitle": "Capitolul 01 — Prima fisura"
                }
              },
              {
                "path": "chapter.chapter-002",
                "chunkIndex": 7,
                "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt. Work replaces confession here because every surface carries the memory of collaboration. Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.\n\nA batch of folios misprints during an overnight press run, forcing them into the same exhausted shift. Talia admits she left after receiving an offer that promised security she never trusted herself to ask Leora for. Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission. When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload. They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep.\n\nLater, talia admits she left after receiving an offer that promised security she never trusted herself to ask leora for. Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission. When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload. They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep.\n\nLater, the misprint mirrors the exact margin shift from the night talia left. The studio forces the past into the present workload. Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission. When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload. They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep.\n\nNothing that has opened here will close easily. Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?",
                "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse. Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii.. Talia Voss citeste prea atent incaperea, iar Cassia Mercer tine in viata versiunea de evenimente pe care ceilalti ar prefera sa o creada. Un lot de coli iese cu erori de tipar in timpul unei ture de noapte la presa, fortandu-le sa lucreze in aceeasi tura epuizata. Talia marturiseste ca a plecat dupa ce a primit o oferta care promitea o siguranta pe care nu s-a putut niciodata incredinta sa i-o ceara Leorei. Leora vrea ca scuzele sa fie rostite limpede, nu ascunse in vorbaria de productie, in timp ce Talia se teme ca onestitatea directa le va costa comanda. Cand eroarea de tipar reproduce exact deplasarea de margine din noaptea in care Talia a plecat., atelierul forteaza trecutul sa intre direct in munca prezentului. Salveaza impreuna tirajul, dar colile reparate poarta acum o margine dublata, abia vizibila, pe care decid sa o pastreze. Mai tarziu, talia marturiseste ca a plecat dupa ce a primit o oferta care promitea o siguranta pe care nu s-a putut niciodata incredinta sa i-o ceara leorei. Leora vrea ca scuzele sa fie rostite limpede, nu ascunse in vorbaria de productie, in timp ce Talia se teme ca onestitatea directa le va costa comanda. Cand eroarea de tipar reproduce exact deplasarea de margine din noaptea in care Talia a plecat., atelierul forteaza trecutul sa intre direct in munca prezentului. Salveaza impreuna tirajul, dar colile reparate poarta acum o margine dublata, abia vizibila, pe care decid sa o pastreze. Mai tarziu, eroarea de tipar reproduce exact deplasarea de margine din noaptea in care talia a plecat. Atelierul forteaza trecutul sa intre direct in munca prezentului. Leora vrea ca scuzele sa fie rostite limpede, nu ascunse in vorbaria de productie, in timp ce Talia se teme ca onestitatea directa le va costa comanda. Cand eroarea de tipar reproduce exact deplasarea de margine din noaptea in care Talia a plecat., atelierul forteaza trecutul sa intre direct in munca prezentului. Salveaza impreuna tirajul, dar colile reparate poarta acum o margine dublata, abia vizibila, pe care decid sa o pastreze. Nimic din ceea ce tocmai s-a deschis nu se mai inchide usor. Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?",
                "metadata": {
                  "granularity": "chapter",
                  "chapterNumber": 2,
                  "paragraphCount": 5,
                  "displayTitle": "Capitolul 02 — Linia presiunii"
                }
              },
              {
                "path": "chapter.chapter-003",
                "chunkIndex": 8,
                "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt. Work replaces confession here because every surface carries the memory of collaboration. Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.\n\nAt the warehouse mock-up, a museum curator mistakes them for a long-established couple and thanks them for working so seamlessly together. The public misreading makes both women realize how much of their intimacy remains visible even after the rupture. Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence. When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature. She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics.\n\nLater, the public misreading makes both women realize how much of their intimacy remains visible even after the rupture. Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence. When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature. She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics.\n\nLater, the curator chooses the doubled-margin proof as the book's defining design feature. Their most damaged page becomes the commission's emotional signature. Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence. When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature. She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics.\n\nNothing that has opened here will close easily. Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?",
                "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse. Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii.. Talia Voss citeste prea atent incaperea, iar Cassia Mercer tine in viata versiunea de evenimente pe care ceilalti ar prefera sa o creada. La macheta din depozit, o curatoare de muzeu le confunda cu un cuplu vechi si le multumeste pentru cat de firesc lucreaza impreuna. Aceasta lectura gresita in public le face pe amandoua sa inteleaga cat de multa intimitate a ramas vizibila chiar si dupa ruptura. Leora poate pastra parteneriatul intr-o ambiguitate sigura sau poate admite ca aceasta comanda nu poate supravietui unui nou sezon de tacere. Cand curatoarea alege proba cu marginea dublata drept trasatura definitorie de design a cartii., pagina lor cea mai avariata devine semnatura emotionala a comenzii. Ii cere Taliei sa ramana dupa macheta si sa spuna intreaga poveste a plecarii fara s-o transforme in logistica. Mai tarziu, aceasta lectura gresita in public le face pe amandoua sa inteleaga cat de multa intimitate a ramas vizibila chiar si dupa ruptura. Leora poate pastra parteneriatul intr-o ambiguitate sigura sau poate admite ca aceasta comanda nu poate supravietui unui nou sezon de tacere. Cand curatoarea alege proba cu marginea dublata drept trasatura definitorie de design a cartii., pagina lor cea mai avariata devine semnatura emotionala a comenzii. Ii cere Taliei sa ramana dupa macheta si sa spuna intreaga poveste a plecarii fara s-o transforme in logistica. Mai tarziu, curatoarea alege proba cu marginea dublata drept trasatura definitorie de design a cartii. Pagina lor cea mai avariata devine semnatura emotionala a comenzii. Leora poate pastra parteneriatul intr-o ambiguitate sigura sau poate admite ca aceasta comanda nu poate supravietui unui nou sezon de tacere. Cand curatoarea alege proba cu marginea dublata drept trasatura definitorie de design a cartii., pagina lor cea mai avariata devine semnatura emotionala a comenzii. Ii cere Taliei sa ramana dupa macheta si sa spuna intreaga poveste a plecarii fara s-o transforme in logistica. Nimic din ceea ce tocmai s-a deschis nu se mai inchide usor. Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?",
                "metadata": {
                  "granularity": "chapter",
                  "chapterNumber": 3,
                  "paragraphCount": 5,
                  "displayTitle": "Capitolul 03 — Pretul intoarcerii"
                }
              },
              {
                "path": "chapter.chapter-004",
                "chunkIndex": 9,
                "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt. Work replaces confession here because every surface carries the memory of collaboration. Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.\n\nOn launch night, Leora inserts the once-abandoned dedication page back into the finished edition. Talia sees the page only after the first public copy is opened in front of the crowd. Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability. When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success. She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view.\n\nLater, talia sees the page only after the first public copy is opened in front of the crowd. Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability. When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success. She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view.\n\nLater, the dedication names the year talia left and the future leora still wants. The launch becomes confession as much as success. Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability. When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success. She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view.\n\nLeora Kestrel understands now that shared risk creates a truer form of security than controlled distance interdependence-is-stronger-than-isolation. Scarred-trust-rebuilt-on-painful-clarity.",
                "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse. Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii.. Talia Voss citeste prea atent incaperea, iar Cassia Mercer tine in viata versiunea de evenimente pe care ceilalti ar prefera sa o creada. In noaptea lansarii, Leora reintroduce in editia finala pagina de dedicatie abandonata candva. Talia vede pagina abia dupa ce primul exemplar public este deschis in fata multimii. Leora mai poate prezenta gestul drept branding sau il poate lasa sa stea ca un act public de vulnerabilitate asumata. Cand dedicatia numeste anul in care Talia a plecat si viitorul pe care Leora il mai doreste., lansarea devine marturisire la fel de mult cat devine succes. Ii spune Taliei ca pagina a ramas pentru ca atelierul, si relatia lor, meritau sa fie reconstruite la vedere. Mai tarziu, talia vede pagina abia dupa ce primul exemplar public este deschis in fata multimii. Leora mai poate prezenta gestul drept branding sau il poate lasa sa stea ca un act public de vulnerabilitate asumata. Cand dedicatia numeste anul in care Talia a plecat si viitorul pe care Leora il mai doreste., lansarea devine marturisire la fel de mult cat devine succes. Ii spune Taliei ca pagina a ramas pentru ca atelierul, si relatia lor, meritau sa fie reconstruite la vedere. Mai tarziu, dedicatia numeste anul in care talia a plecat si viitorul pe care leora il mai doreste. Lansarea devine marturisire la fel de mult cat devine succes. Leora mai poate prezenta gestul drept branding sau il poate lasa sa stea ca un act public de vulnerabilitate asumata. Cand dedicatia numeste anul in care Talia a plecat si viitorul pe care Leora il mai doreste., lansarea devine marturisire la fel de mult cat devine succes. Ii spune Taliei ca pagina a ramas pentru ca atelierul, si relatia lor, meritau sa fie reconstruite la vedere. Leora Kestrel intelege acum ca riscul impartasit creeaza o forma de siguranta mai adevarata decat distanta controlata interdependenta este mai puternica decat izolarea. Incredere cicatrizata, reconstruita prin claritate dureroasa..",
                "metadata": {
                  "granularity": "chapter",
                  "chapterNumber": 4,
                  "paragraphCount": 5,
                  "displayTitle": "Capitolul 04 — Alegerea ireversibila"
                }
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
          "chunkCount": 9,
          "chunks": [
            {
              "path": "front.title",
              "chunkIndex": 1,
              "source": "Margins of the Heart",
              "translated": "Marginile inimii",
              "metadata": {
                "granularity": "section"
              }
            },
            {
              "path": "front.subtitle",
              "chunkIndex": 2,
              "source": "Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?",
              "translated": "Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?",
              "metadata": {
                "granularity": "section"
              }
            },
            {
              "path": "front.premise",
              "chunkIndex": 3,
              "source": "Editor Leora Kestrel inherits a failing letterpress studio and can save it only by working with designer Talia Voss, the woman who left both the business and their relationship unfinished three years earlier. Estate manager Cassia Mercer gives them one season to deliver a landmark art-book commission, forcing every practical decision to reopen the tenderness and betrayal buried in the studio itself.",
              "translated": "Editoarea Leora Kestrel mosteneste un atelier tipografic aflat in declin si il poate salva doar lucrand cu designerul Talia Voss, femeia care a lasat neterminate atat afacerea, cat si relatia lor, cu trei ani in urma. Administratoarea domeniului, Cassia Mercer, le da un singur sezon pentru a livra o comanda-emblema de carte de arta, fortand fiecare decizie practica sa redeschida tandretea si tradarea ingropate chiar in atelier.",
              "metadata": {
                "granularity": "section"
              }
            },
            {
              "path": "front.thematic-statement",
              "chunkIndex": 4,
              "source": "Partnership becomes real only when usefulness stops impersonating emotional safety.",
              "translated": "Parteneriatul devine real doar atunci cand utilitatea inceteaza sa mai joace rolul sigurantei emotionale.",
              "metadata": {
                "granularity": "section"
              }
            },
            {
              "path": "front.world-rule",
              "chunkIndex": 5,
              "source": "The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women.",
              "translated": "Mostenirea tine atelierul deschis doar daca lucrarea pentru muzeu este livrata la timp si semnata de ambele femei.",
              "metadata": {
                "granularity": "section"
              }
            },
            {
              "path": "chapter.chapter-001",
              "chunkIndex": 6,
              "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt. Work replaces confession here because every surface carries the memory of collaboration. Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.\n\nOn the first day back in the studio, Leora and Talia sort inherited forms and discover a proof set covered in both their handwritten notes. Cassia announces the launch deadline and makes their joint contract unavoidable. Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived. When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor. They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved.\n\nLater, cassia announces the launch deadline and makes their joint contract unavoidable. Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived. When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor. They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved.\n\nLater, the annotated proof reveals a page talia once designed around leora's private dedication line. The job starts carrying evidence of love rather than just shared labor. Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived. When the annotated proof reveals a page Talia once designed around Leora's private dedication line, the job starts carrying evidence of love rather than just shared labor. They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved.\n\nNothing that has opened here will close easily. Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?",
              "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse. Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii.. Talia Voss citeste prea atent incaperea, iar Cassia Mercer tine in viata versiunea de evenimente pe care ceilalti ar prefera sa o creada. In prima zi inapoi in atelier, Leora si Talia sorteaza formele mostenite si descopera un set de probe acoperit de notitele lor scrise de mana. Cassia anunta termenul de lansare si face contractul lor comun inevitabil. Leora vrea limite clare de lucru, in timp ce Talia continua sa trateze limbajul practic drept o proba pentru a vedea daca tandretea a supravietuit. Cand proba adnotata dezvaluie o pagina pe care Talia a construit-o candva in jurul randului de dedicatie privata al Leorei., lucrarea incepe sa poarte dovezi ale iubirii, nu doar ale muncii impartite. Cad de acord sa imparta camera de lucru pentru comanda, dar sa nu discute de ce a plecat Talia pana dupa aprobarea primului dummy book. Mai tarziu, cassia anunta termenul de lansare si face contractul lor comun inevitabil. Leora vrea limite clare de lucru, in timp ce Talia continua sa trateze limbajul practic drept o proba pentru a vedea daca tandretea a supravietuit. Cand proba adnotata dezvaluie o pagina pe care Talia a construit-o candva in jurul randului de dedicatie privata al Leorei., lucrarea incepe sa poarte dovezi ale iubirii, nu doar ale muncii impartite. Cad de acord sa imparta camera de lucru pentru comanda, dar sa nu discute de ce a plecat Talia pana dupa aprobarea primului dummy book. Mai tarziu, proba adnotata dezvaluie o pagina pe care talia a construit-o candva in jurul randului de dedicatie privata al leorei. Lucrarea incepe sa poarte dovezi ale iubirii, nu doar ale muncii impartite. Leora vrea limite clare de lucru, in timp ce Talia continua sa trateze limbajul practic drept o proba pentru a vedea daca tandretea a supravietuit. Cand proba adnotata dezvaluie o pagina pe care Talia a construit-o candva in jurul randului de dedicatie privata al Leorei., lucrarea incepe sa poarte dovezi ale iubirii, nu doar ale muncii impartite. Cad de acord sa imparta camera de lucru pentru comanda, dar sa nu discute de ce a plecat Talia pana dupa aprobarea primului dummy book. Nimic din ceea ce tocmai s-a deschis nu se mai inchide usor. Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?",
              "metadata": {
                "granularity": "chapter",
                "chapterNumber": 1,
                "paragraphCount": 5,
                "displayTitle": "Capitolul 01 — Prima fisura"
              }
            },
            {
              "path": "chapter.chapter-002",
              "chunkIndex": 7,
              "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt. Work replaces confession here because every surface carries the memory of collaboration. Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.\n\nA batch of folios misprints during an overnight press run, forcing them into the same exhausted shift. Talia admits she left after receiving an offer that promised security she never trusted herself to ask Leora for. Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission. When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload. They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep.\n\nLater, talia admits she left after receiving an offer that promised security she never trusted herself to ask leora for. Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission. When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload. They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep.\n\nLater, the misprint mirrors the exact margin shift from the night talia left. The studio forces the past into the present workload. Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission. When the misprint mirrors the exact margin shift from the night Talia left, the studio forces the past into the present workload. They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep.\n\nNothing that has opened here will close easily. Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?",
              "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse. Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii.. Talia Voss citeste prea atent incaperea, iar Cassia Mercer tine in viata versiunea de evenimente pe care ceilalti ar prefera sa o creada. Un lot de coli iese cu erori de tipar in timpul unei ture de noapte la presa, fortandu-le sa lucreze in aceeasi tura epuizata. Talia marturiseste ca a plecat dupa ce a primit o oferta care promitea o siguranta pe care nu s-a putut niciodata incredinta sa i-o ceara Leorei. Leora vrea ca scuzele sa fie rostite limpede, nu ascunse in vorbaria de productie, in timp ce Talia se teme ca onestitatea directa le va costa comanda. Cand eroarea de tipar reproduce exact deplasarea de margine din noaptea in care Talia a plecat., atelierul forteaza trecutul sa intre direct in munca prezentului. Salveaza impreuna tirajul, dar colile reparate poarta acum o margine dublata, abia vizibila, pe care decid sa o pastreze. Mai tarziu, talia marturiseste ca a plecat dupa ce a primit o oferta care promitea o siguranta pe care nu s-a putut niciodata incredinta sa i-o ceara leorei. Leora vrea ca scuzele sa fie rostite limpede, nu ascunse in vorbaria de productie, in timp ce Talia se teme ca onestitatea directa le va costa comanda. Cand eroarea de tipar reproduce exact deplasarea de margine din noaptea in care Talia a plecat., atelierul forteaza trecutul sa intre direct in munca prezentului. Salveaza impreuna tirajul, dar colile reparate poarta acum o margine dublata, abia vizibila, pe care decid sa o pastreze. Mai tarziu, eroarea de tipar reproduce exact deplasarea de margine din noaptea in care talia a plecat. Atelierul forteaza trecutul sa intre direct in munca prezentului. Leora vrea ca scuzele sa fie rostite limpede, nu ascunse in vorbaria de productie, in timp ce Talia se teme ca onestitatea directa le va costa comanda. Cand eroarea de tipar reproduce exact deplasarea de margine din noaptea in care Talia a plecat., atelierul forteaza trecutul sa intre direct in munca prezentului. Salveaza impreuna tirajul, dar colile reparate poarta acum o margine dublata, abia vizibila, pe care decid sa o pastreze. Nimic din ceea ce tocmai s-a deschis nu se mai inchide usor. Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?",
              "metadata": {
                "granularity": "chapter",
                "chapterNumber": 2,
                "paragraphCount": 5,
                "displayTitle": "Capitolul 02 — Linia presiunii"
              }
            },
            {
              "path": "chapter.chapter-003",
              "chunkIndex": 8,
              "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt. Work replaces confession here because every surface carries the memory of collaboration. Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.\n\nAt the warehouse mock-up, a museum curator mistakes them for a long-established couple and thanks them for working so seamlessly together. The public misreading makes both women realize how much of their intimacy remains visible even after the rupture. Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence. When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature. She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics.\n\nLater, the public misreading makes both women realize how much of their intimacy remains visible even after the rupture. Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence. When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature. She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics.\n\nLater, the curator chooses the doubled-margin proof as the book's defining design feature. Their most damaged page becomes the commission's emotional signature. Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence. When the curator chooses the doubled-margin proof as the book's defining design feature, their most damaged page becomes the commission's emotional signature. She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics.\n\nNothing that has opened here will close easily. Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?",
              "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse. Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii.. Talia Voss citeste prea atent incaperea, iar Cassia Mercer tine in viata versiunea de evenimente pe care ceilalti ar prefera sa o creada. La macheta din depozit, o curatoare de muzeu le confunda cu un cuplu vechi si le multumeste pentru cat de firesc lucreaza impreuna. Aceasta lectura gresita in public le face pe amandoua sa inteleaga cat de multa intimitate a ramas vizibila chiar si dupa ruptura. Leora poate pastra parteneriatul intr-o ambiguitate sigura sau poate admite ca aceasta comanda nu poate supravietui unui nou sezon de tacere. Cand curatoarea alege proba cu marginea dublata drept trasatura definitorie de design a cartii., pagina lor cea mai avariata devine semnatura emotionala a comenzii. Ii cere Taliei sa ramana dupa macheta si sa spuna intreaga poveste a plecarii fara s-o transforme in logistica. Mai tarziu, aceasta lectura gresita in public le face pe amandoua sa inteleaga cat de multa intimitate a ramas vizibila chiar si dupa ruptura. Leora poate pastra parteneriatul intr-o ambiguitate sigura sau poate admite ca aceasta comanda nu poate supravietui unui nou sezon de tacere. Cand curatoarea alege proba cu marginea dublata drept trasatura definitorie de design a cartii., pagina lor cea mai avariata devine semnatura emotionala a comenzii. Ii cere Taliei sa ramana dupa macheta si sa spuna intreaga poveste a plecarii fara s-o transforme in logistica. Mai tarziu, curatoarea alege proba cu marginea dublata drept trasatura definitorie de design a cartii. Pagina lor cea mai avariata devine semnatura emotionala a comenzii. Leora poate pastra parteneriatul intr-o ambiguitate sigura sau poate admite ca aceasta comanda nu poate supravietui unui nou sezon de tacere. Cand curatoarea alege proba cu marginea dublata drept trasatura definitorie de design a cartii., pagina lor cea mai avariata devine semnatura emotionala a comenzii. Ii cere Taliei sa ramana dupa macheta si sa spuna intreaga poveste a plecarii fara s-o transforme in logistica. Nimic din ceea ce tocmai s-a deschis nu se mai inchide usor. Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?",
              "metadata": {
                "granularity": "chapter",
                "chapterNumber": 3,
                "paragraphCount": 5,
                "displayTitle": "Capitolul 03 — Pretul intoarcerii"
              }
            },
            {
              "path": "chapter.chapter-004",
              "chunkIndex": 9,
              "source": "Leora Kestrel reaches the inherited letterpress studio on Brindle Lane, where craft, routine, and old tenderness keep rubbing against unspoken hurt. Work replaces confession here because every surface carries the memory of collaboration. Talia Voss reads the room too carefully, while Cassia Mercer keeps alive the version of events other people would rather believe.\n\nOn launch night, Leora inserts the once-abandoned dedication page back into the finished edition. Talia sees the page only after the first public copy is opened in front of the crowd. Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability. When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success. She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view.\n\nLater, talia sees the page only after the first public copy is opened in front of the crowd. Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability. When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success. She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view.\n\nLater, the dedication names the year talia left and the future leora still wants. The launch becomes confession as much as success. Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability. When the dedication names the year Talia left and the future Leora still wants, the launch becomes confession as much as success. She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view.\n\nLeora Kestrel understands now that shared risk creates a truer form of security than controlled distance interdependence-is-stronger-than-isolation. Scarred-trust-rebuilt-on-painful-clarity.",
              "translated": "Leora Kestrel ajunge in atelierul tipografic mostenit de pe Brindle Lane, unde mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse. Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii.. Talia Voss citeste prea atent incaperea, iar Cassia Mercer tine in viata versiunea de evenimente pe care ceilalti ar prefera sa o creada. In noaptea lansarii, Leora reintroduce in editia finala pagina de dedicatie abandonata candva. Talia vede pagina abia dupa ce primul exemplar public este deschis in fata multimii. Leora mai poate prezenta gestul drept branding sau il poate lasa sa stea ca un act public de vulnerabilitate asumata. Cand dedicatia numeste anul in care Talia a plecat si viitorul pe care Leora il mai doreste., lansarea devine marturisire la fel de mult cat devine succes. Ii spune Taliei ca pagina a ramas pentru ca atelierul, si relatia lor, meritau sa fie reconstruite la vedere. Mai tarziu, talia vede pagina abia dupa ce primul exemplar public este deschis in fata multimii. Leora mai poate prezenta gestul drept branding sau il poate lasa sa stea ca un act public de vulnerabilitate asumata. Cand dedicatia numeste anul in care Talia a plecat si viitorul pe care Leora il mai doreste., lansarea devine marturisire la fel de mult cat devine succes. Ii spune Taliei ca pagina a ramas pentru ca atelierul, si relatia lor, meritau sa fie reconstruite la vedere. Mai tarziu, dedicatia numeste anul in care talia a plecat si viitorul pe care leora il mai doreste. Lansarea devine marturisire la fel de mult cat devine succes. Leora mai poate prezenta gestul drept branding sau il poate lasa sa stea ca un act public de vulnerabilitate asumata. Cand dedicatia numeste anul in care Talia a plecat si viitorul pe care Leora il mai doreste., lansarea devine marturisire la fel de mult cat devine succes. Ii spune Taliei ca pagina a ramas pentru ca atelierul, si relatia lor, meritau sa fie reconstruite la vedere. Leora Kestrel intelege acum ca riscul impartasit creeaza o forma de siguranta mai adevarata decat distanta controlata interdependenta este mai puternica decat izolarea. Incredere cicatrizata, reconstruita prin claritate dureroasa..",
              "metadata": {
                "granularity": "chapter",
                "chapterNumber": 4,
                "paragraphCount": 5,
                "displayTitle": "Capitolul 04 — Alegerea ireversibila"
              }
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
