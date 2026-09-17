"use strict";
(() => {
    const config = window.PORTFOLIO || {};
    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
    const text = (value) => (typeof value === "string" ? value.trim() : "");
    
    const translations = {
        en: {
            filterProjects: "Filter projects",
            allProjects: "All projects",
            completedProjects: "Completed projects",
            progressProjects: "Projects in progress",
            secondaryEducation: "Secondary education",
            militaryObligations: "Military obligations",
            nextCard: "Next card",
            previousCard: "Previous card",
            experience: "Experience",
            artReceptionistName: "Rhea<span>.</span>",
            realPeople: "Real people.",
            skip: "Skip to content",
            mainNav: "Main navigation",
            home: "Home",
            navWork: "Work",
            navAbout: "About",
            navContact: "Contact",
            layerData: "Data",
            layerLogic: "Logic",
            layerInterface: "Interface",
            role: "Full stack developer",
            heroTitle: "Every layer.<br><span>One vision.</span>",
            heroDescription: "From the first interaction to the logic behind it. I build for the whole experience.",
            explore: "Explore my work",
            educationShort: "Master's in Electrical Eng | Computer Engineering<br>University of Thessaly",
            stackDiagram: "Interactive full stack diagram",
            wholePicture: "The whole picture.",
            selectLayer: "Select a layer to explore",
            workIntro: "A look at what I’m building",
            workTitle: "Work.",
            projectCount: "3 projects",
            aboutIntro: "Behind the work",
            aboutTitle: "Curiosity.<br>With a foundation.",
            aboutDescription: "My studies at the University of Thessaly shape the way I approach software: understand the system, question the details, then build.",
            academicBackground: "Academic background",
            degree: "Master's in Electrical Eng | Computer Engineering",
            university: "University of Thessaly",
            educationNote: "An engineering perspective.<br>A focus on the web.",
            systemsThinking: "Systems thinking",
            contactIntro: "Have something in mind?",
            contactTitle: "Let’s make<br>it happen<span>.</span>",
            sayHello: "Say hello",
            copyEmail: "Copy email",
            footerCredit: "Thoughtfully built, layer by layer.",
            closeProject: "Close project details",
            projectDetails: "Project details",
            visitWebsite: "Visit website ↗",
            viewSource: "View source ↗",
            readAbout: "Read about",
            emailCopied: "Email copied. Let’s talk.",
            copyAddress: "Copy this address:",
            artReceptionist: "AI RECEPTIONIST",
            artB2B: "B2B WEBSITE · LARISSA",
            artLinear: "Linear<br>Programming<span>.</span>",
            artLearning: "LEARNING SITE",
            pageTitle: "dislis.com — Full Stack Developer",
            metaDescription:
                "Full stack developer. Master's in Electrical Eng | Computer Engineering, University of Thessaly. Explore Ρέα, halvasfarsalon.gr and a Linear Programming learning site.",
            toggleLabel: "Switch to Greek"
        },

        el: {
            filterProjects: "Φίλτρο έργων",
            allProjects: "Όλα τα έργα",
            completedProjects: "Ολοκληρωμένα Έργα",
            progressProjects: "Έργα σε εξέλιξη",
            secondaryEducation: "Δευτεροβάθμια εκπαίδευση",
            militaryObligations: "Στρατιωτικές υποχρεώσεις",
            nextCard: "Επόμενη κάρτα",
            previousCard: "Προηγούμενη κάρτα",
            experience: "Εμπειρία",
            artReceptionistName: "Ρέα<span>.</span>",
            realPeople: "Real people.",
            skip: "Μετάβαση στο περιεχόμενο",
            mainNav: "Κύρια πλοήγηση",
            home: "Αρχική",
            navWork: "Έργα",
            navAbout: "Σχετικά",
            navContact: "Επικοινωνία",
            layerData: "Δεδομένα",
            layerLogic: "Λογική",
            layerInterface: "Διεπαφή",
            role: "Full stack προγραμματιστής",
            heroTitle: "Κάθε επίπεδο.<br><span>Ένα όραμα.</span>",
            heroDescription: "Από την πρώτη αλληλεπίδραση έως τη λογική που τη στηρίζει. Δημιουργώ ολόκληρη την εμπειρία.",
            explore: "Δες τα έργα μου",
            educationShort: "Master's in Electrical Eng | Computer Engineering<br>Πανεπιστήμιο Θεσσαλίας",
            stackDiagram: "Διαδραστικό διάγραμμα full stack",
            wholePicture: "Η συνολική εικόνα.",
            selectLayer: "Επίλεξε επίπεδο για εξερεύνηση",
            workIntro: "Μια ματιά σε όσα δημιουργώ",
            workTitle: "Έργα",
            projectCount: "3 έργα",
            aboutIntro: "Πίσω από τη δουλειά",
            aboutTitle: "Περιέργεια.<br>Με γερά θεμέλια.",
            aboutDescription: "Οι σπουδές μου στο Πανεπιστήμιο Θεσσαλίας διαμορφώνουν τον τρόπο που προσεγγίζω το software: κατανοώ το σύστημα, εξετάζω τις λεπτομέρειες και έπειτα δημιουργώ.",
            academicBackground: "Ακαδημαϊκό υπόβαθρο",
            degree: "Master's in Electrical Eng | Computer Engineering",
            university: "Πανεπιστήμιο Θεσσαλίας",
            educationNote: "Μηχανική σκέψη.<br>Εστίαση στο web.",
            systemsThinking: "Συστημική σκέψη",
            contactIntro: "Έχεις κάτι στο μυαλό σου;",
            contactTitle: "Ας το κάνουμε<br>πραγματικότητα<span>.</span>",
            sayHello: "Στείλε μήνυμα",
            copyEmail: "Αντιγραφή email",
            footerCredit: "Χτισμένο προσεκτικά, επίπεδο προς επίπεδο.",
            closeProject: "Κλείσιμο λεπτομερειών έργου",
            projectDetails: "Λεπτομέρειες έργου",
            visitWebsite: "Επίσκεψη στην ιστοσελίδα ↗",
            viewSource: "Προβολή κώδικα ↗",
            readAbout: "Περισσότερα για",
            emailCopied: "Το email αντιγράφηκε.",
            copyAddress: "Αντίγραψε τη διεύθυνση:",
            artReceptionist: "AI ΓΡΑΜΜΑΤΕΙΑ",
            artB2B: "B2B ΙΣΤΟΣΕΛΙΔΑ · ΛΑΡΙΣΑ",
            artLinear: "Γραμμικός<br>Προγραμματισμός<span>.</span>",
            artLearning: "ΕΚΠΑΙΔΕΥΤΙΚΗ ΙΣΤΟΣΕΛΙΔΑ",
            pageTitle: "dislis.com — Full Stack Developer",
            metaDescription: "Full stack developer με σπουδές Ηλεκτρολόγου Μηχανικού στο Πανεπιστήμιο Θεσσαλίας. Δες τη Ρέα, το halvasfarsalon.gr και μια εκπαιδευτική ιστοσελίδα Γραμμικού Προγραμματισμού.",
            toggleLabel: "Switch to English"
        }
    };
    const layerCopy = {
        en: {
            interface: {
                index: "01 / 03",
                title: "The part you feel.",
                body: "Clear interfaces. Thoughtful interactions."
            },
            logic: {
                index: "02 / 03",
                title: "The thinking underneath.",
                body: "The rules and services that connect the experience."
            },
            data: { index: "03 / 03", title: "A solid foundation.", body: "Information, structured with purpose." }
        },
        el: {
            interface: {
                index: "01 / 03",
                title: "Το μέρος που βιώνεις.",
                body: "Καθαρές διεπαφές. Προσεγμένες αλληλεπιδράσεις."
            },
            logic: {
                index: "02 / 03",
                title: "Η σκέψη από πίσω.",
                body: "Οι κανόνες και οι υπηρεσίες που συνδέουν την εμπειρία."
            },
            data: { index: "03 / 03", title: "Γερά θεμέλια.", body: "Πληροφορία, δομημένη με σκοπό." }
        }
    };
    
    const safeUrl = (value) => {
        try {
            const url = new URL(text(value));
            return ["https:", "http:"].includes(url.protocol) ? url.href : "";
        } catch {
            return "";
        }
    };
    const localized = (value, language) => {
        if (typeof value === "object" && value !== null)
            return text(value[language]) || text(value.en) || text(value.el);
        return text(value);
    };
    const createLink = (label, href, className = "") => {
        const link = document.createElement("a");
        link.textContent = label;
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = className;
        return link;
    };

    let language;
    try {
        language = localStorage.getItem("portfolio-language");
    } catch {
        language = null;
    }
    if (!translations[language]) {
        let timeZone = "";
        try {
            timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        } catch {
            timeZone = "";
        }
        language = timeZone === "Europe/Athens" ? "el" : "en";
    }
    let activeLayer = "interface";
    let activeProjectIndex = null;
    let opener = null;
    let priorScrollY = 0;
    let toastTimer;
    const projects = Array.isArray(config.projects) ? config.projects : [];
    const dialog = $("#project-dialog");

    const renderTags = (root, items, fallback = false) => {
        root.replaceChildren();
        const tags = Array.isArray(items) ? items.filter((item) => text(item)) : [];
        root.hidden = !tags.length;
        tags.forEach((item) => {
            const tag = document.createElement("span");
            tag.textContent = item;
            root.append(tag);
        });
    };
    const renderProjectLinks = (root, project, className = "project-visit") => {
        root.replaceChildren();
        [
            [translations[language].visitWebsite, project.liveUrl],
            [translations[language].viewSource, project.sourceUrl]
        ].forEach(([label, value]) => {
            const href = safeUrl(value);
            if (href) root.append(createLink(label, href, className));
        });
        if (!safeUrl(project.liveUrl) && localized(project.linkNote, language)) {
            const note = document.createElement("p");
            note.className = "project-link-note";
            note.textContent = localized(project.linkNote, language);
            root.append(note);
        }
    };
    const renderLayer = () => {
        const copy = layerCopy[language][activeLayer];
        $(".caption-index").textContent = copy.index;
        $(".stack-caption strong").textContent = copy.title;
        $(".stack-caption p").textContent = copy.body;
    };
    const renderProjectDialog = (index) => {
        const project = projects[index];
        if (!project) return;
        $("#dialog-title").textContent = localized(project.title, language) || localized(project.category, language);
        $("#dialog-category").textContent =
            localized(project.category, language) || translations[language].projectDetails;
        $("#dialog-summary").textContent = localized(project.modalSummary || project.summary, language);
        $("#dialog-summary").style.whiteSpace = "pre-line";
        $("#dialog-description").textContent = localized(project.description, language);
        renderTags($("#dialog-tags"), project.technologies, true);
        const links = $("#dialog-links");
        links.replaceChildren();
        const modalUrl = safeUrl(project.modalUrl);
        if (modalUrl)
            links.append(
                createLink(
                    language === "el" ? "Επισκεφθείτε την ιστοσελίδα ↗" : "Visit the website ↗",
                    modalUrl,
                    "project-visit"
                )
            );
        else if (localized(project.modalLinkNote, language)) {
            const note = document.createElement("p");
            note.className = "project-link-note";
            note.textContent = localized(project.modalLinkNote, language);
            links.append(note);
        } else renderProjectLinks(links, project, "project-visit");
    };
    const renderProjects = () => {
        projects.forEach((project, index) => {
            const card = $(`[data-project="${index}"]`);
            if (!card || !project || typeof project !== "object") return;
            const title = localized(project.title, language) || localized(project.category, language);
            $('[data-field="title"]', card).textContent = localized(project.title, language);
            $('[data-field="title"]', card).hidden = !localized(project.title, language);
            $('[data-field="summary"]', card).textContent = localized(project.summary, language);
            $('[data-field="category"]', card).textContent = localized(project.category, language);
            renderTags($('[data-field="tags"]', card), project.technologies, true);
            renderProjectLinks($('[data-field="links"]', card), project);
            const trigger = $(".project-open", card);
            trigger.hidden = !(
                localized(project.summary, language) ||
                localized(project.description, language) ||
                safeUrl(project.liveUrl) ||
                safeUrl(project.sourceUrl)
            );
            trigger.setAttribute("aria-label", `${translations[language].readAbout} ${title}`);
        });
        filterProjects();
        if (activeProjectIndex !== null && dialog.open) renderProjectDialog(activeProjectIndex);
    };
    const applyLanguage = (nextLanguage, persist = true) => {
        language = translations[nextLanguage] ? nextLanguage : "en";
        document.documentElement.lang = language;
        document.documentElement.dataset.language = language;
        $$("[data-i18n]").forEach((element) => {
            const value = translations[language][element.dataset.i18n];
            if (value) element.textContent = value;
        });
        $$("[data-i18n-html]").forEach((element) => {
            const value = translations[language][element.dataset.i18nHtml];
            if (value) element.innerHTML = value;
        });
        $$("[data-i18n-aria]").forEach((element) => {
            const value = translations[language][element.dataset.i18nAria];
            if (value) element.setAttribute("aria-label", value);
        });
        $$("[data-language-option]").forEach((option) =>
            option.setAttribute("aria-current", String(option.dataset.languageOption === language))
        );
        $("#language-toggle").setAttribute("aria-label", translations[language].toggleLabel);

        document.title = translations[language].pageTitle;
        $('meta[name="description"]').setAttribute("content", translations[language].metaDescription);
        renderLayer();
        renderProjects();
        renderExperience();
        $(".typing-line").dataset.typingText = translations[language].realPeople;
        if (persist) {
            try {
                localStorage.setItem("portfolio-language", language);
            } catch {
                /* Storage can be unavailable in private contexts. */
            }
        }
    };

    $("#year").textContent = new Date().getFullYear();
    $$("button[data-layer]").forEach((button) => {
        button.addEventListener("click", () => {
            activeLayer = button.dataset.layer;
            $(".stack-stage").dataset.layer = activeLayer;
            $$("button[data-layer]").forEach((layer) => layer.setAttribute("aria-pressed", String(layer === button)));
            renderLayer();
        });
    });
    projects.forEach((project, index) => {
        const trigger = $(`[data-project-open="${index}"]`);
        if (!trigger) return;
        trigger.addEventListener("click", () => {
            activeProjectIndex = index;
            opener = trigger;
            priorScrollY = window.scrollY;
            renderProjectDialog(index);
            dialog.showModal();
        });
    });
    $("#close-dialog").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
        if (event.target !== dialog) return;
        const box = dialog.getBoundingClientRect();
        if (
            event.clientX < box.left ||
            event.clientX > box.right ||
            event.clientY < box.top ||
            event.clientY > box.bottom
        )
            dialog.close();
    });
    dialog.addEventListener("close", () => {
        activeProjectIndex = null;
        window.scrollTo({ top: priorScrollY, behavior: "instant" });
        opener?.focus({ preventScroll: true });
    });
    $("#language-toggle").addEventListener("click", () => applyLanguage(language === "el" ? "en" : "el"));
    document.addEventListener("click", (event) => {
        const link = event.target.closest('a.wordmark, a[href^="#"]');
        if (
            !link ||
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
        )
            return;
        const target = link.classList.contains("wordmark") ? null : document.getElementById(link.hash.slice(1));
        if (!target && !link.classList.contains("wordmark")) return;
        event.preventDefault();
        history.replaceState(null, "", location.pathname + location.search);
        const behavior = reducedMotion.matches ? "auto" : "smooth";
        if (!target) {
            window.scrollTo({ top: 0, behavior });
            return;
        }
        target.scrollIntoView({ behavior });
        if (link.classList.contains("skip-link")) {
            if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
        }
    });

    const email = text(config.email);
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/[?&#]/.test(email)) {
        $("#email-link").hidden = false;
        $("#email-link").href = `mailto:${encodeURIComponent(email)}`;
        $("#copy-email").hidden = false;
    }
    const showToast = (message) => {
        clearTimeout(toastTimer);
        const toast = $("#toast");
        toast.textContent = message;
        toast.hidden = false;
        toastTimer = setTimeout(() => {
            toast.hidden = true;
        }, 6000);
    };
    $("#copy-email").addEventListener("click", async (event) => {
        const button = event.currentTarget;
        button.disabled = true;
        button.setAttribute("aria-busy", "true");
        try {
            if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
            await navigator.clipboard.writeText(email);
            showToast(translations[language].emailCopied);
        } catch {
            showToast(`${translations[language].copyAddress} ${email}`);
        } finally {
            button.disabled = false;
            button.removeAttribute("aria-busy");
        }
    });
    $("#social-links").replaceChildren();
    const linkedinUrl = safeUrl(config.linkedin);
    $("#linkedin-contact").hidden = !linkedinUrl;
    if (linkedinUrl) $("#linkedin-contact").href = linkedinUrl;

    [
        ["LinkedIn ↗", config.linkedin],
        ["GitHub ↗", config.github]
    ].forEach(([label, value]) => {
        const href = safeUrl(value);
        if (href) $("#social-links").append(createLink(label, href));
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    $$(".nav-links a").forEach((link) => {
                        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
                        else link.removeAttribute("aria-current");
                    });
                });
            },
            { rootMargin: "-10% 0px -60% 0px" }
        );
        $$("section[id], footer[id]").forEach((section) => observer.observe(section));
    }

    let selectedProjectFilter = "all";
    const filterProjects = () => {
        const selected = selectedProjectFilter;
        projects.forEach((project, index) => {
            const card = $(`[data-project="${index}"]`);
            if (card) card.hidden = selected !== "all" && project.status !== selected;
        });
    };
    const filter = $("#project-filter");
    const filterTrigger = $(".project-filter-trigger", filter);
    const filterMenu = $(".project-filter-menu", filter);
    const closeProjectFilter = () => {
        filter.classList.remove("is-open");
        filterTrigger.setAttribute("aria-expanded", "false");
        filterMenu.setAttribute("aria-hidden", "true");
    };
    filterTrigger.addEventListener("click", () => {
        const isOpen = filter.classList.toggle("is-open");
        filterTrigger.setAttribute("aria-expanded", String(isOpen));
        filterMenu.setAttribute("aria-hidden", String(!isOpen));
    });
    $$("[data-project-filter]").forEach((option) =>
        option.addEventListener("click", () => {
            selectedProjectFilter = option.dataset.projectFilter;
            $$("[data-project-filter]").forEach((item) => item.setAttribute("aria-checked", String(item === option)));
            $("[data-filter-label]", filter).textContent = option.textContent;
            filterProjects();
            closeProjectFilter();
            filterTrigger.focus();
        })
    );
    document.addEventListener("click", (event) => {
        if (!filter.contains(event.target)) closeProjectFilter();
    });
    filter.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeProjectFilter();
    });
    const renderExperience = () => {
        const list = $("#experience-list");
        list.replaceChildren();
        (config.experience || []).forEach((item) => {
            const row = document.createElement("article");
            row.className = "experience-row";
            const main = document.createElement(item.url ? "a" : "div");
            main.className = "experience-copy";
            if (item.url) {
                main.href = safeUrl(item.url);
                main.target = "_blank";
                main.rel = "noopener noreferrer";
            }
            ["company", "role", "years", "description"].forEach((field) => {
                const value = localized(item[field], language);
                if (!value) return;
                const element = document.createElement(field === "company" ? "h3" : "p");
                element.className = `experience-${field}`;
                element.textContent = value;
                main.append(element);
            });
            row.append(main);
            if (text(item.image)) {
                const visual = document.createElement("div");
                visual.className = "experience-visual";
                const image = document.createElement("img");
                image.src = item.image;
                image.alt = text(item.imageAlt);
                visual.append(image);
                row.append(visual);
            }
            list.append(row);
        });
    };

    const deckCards = $$(".education-stage .education-panel");
    let deckOrder = [...deckCards];
    let deckBusy = false;
    let deckTimer;
    let deckFrame;
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const positionDeck = () =>
        deckOrder.forEach((card, position) => {
            card.dataset.position = position;
            card.setAttribute("aria-hidden", String(position !== 0));
        });
    const finishDeck = () => {
        clearTimeout(deckTimer);
        cancelAnimationFrame(deckFrame);
        deckCards.forEach((card) => {
            card.classList.add("deck-snap");
            card.classList.remove("deck-exit", "deck-enter");
        });
        positionDeck();
        void $(".education-stage").offsetWidth;
        deckCards.forEach((card) => card.classList.remove("deck-snap"));
        deckBusy = false;
        $("#deck-announcement").textContent = $("h3", deckOrder[0]).textContent;
    };
    const rotateDeck = (direction) => {
        if (deckBusy) return;
        deckBusy = true;
        const outgoing = direction === "next" ? deckOrder[0] : deckOrder[2];
        if (direction === "next") deckOrder.push(deckOrder.shift());
        else deckOrder.unshift(deckOrder.pop());
        if (reducedMotion.matches) {
            finishDeck();
            return;
        }
        if (direction === "next") {
            outgoing.classList.add("deck-exit");
            positionDeck();
            deckTimer = setTimeout(finishDeck, 450);
        } else {
            outgoing.classList.add("deck-snap", "deck-enter");
            void outgoing.offsetWidth;
            outgoing.classList.remove("deck-snap");
            deckFrame = requestAnimationFrame(() => {
                outgoing.classList.remove("deck-enter");
                positionDeck();
                deckTimer = setTimeout(finishDeck, 450);
            });
        }
    };
    $$(".deck-dot").forEach((dot) => {
        dot.addEventListener("click", () => rotateDeck(dot.dataset.direction));
        dot.addEventListener("keydown", (event) => {
            if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
            event.preventDefault();
            rotateDeck(event.key === "ArrowLeft" ? "next" : "previous");
        });
    });
    reducedMotion.addEventListener("change", () => {
        if (reducedMotion.matches && deckBusy) finishDeck();
    });

    applyLanguage(language, false);
    const typingLine = $(".typing-line");
    const typingText = $(".typing-text");
    typingLine.setAttribute("aria-label", typingLine.dataset.typingText);
    typingText.setAttribute("aria-hidden", "true");
    let typingTimer;
    const finishTyping = () => {
        clearTimeout(typingTimer);
        typingLine.classList.remove("is-typing");
        typingText.textContent = typingLine.dataset.typingText;
    };
    const startTyping = () => {
        clearTimeout(typingTimer);
        if (reducedMotion.matches) {
            finishTyping();
            return;
        }
        const letters = [...typingLine.dataset.typingText];
        let index = 0;
        typingText.textContent = "";
        typingLine.classList.add("is-typing");
        const typeLetter = () => {
            const letter = document.createElement("span");
            letter.className = "typing-letter";
            letter.textContent = letters[index++];
            typingText.append(letter);
            if (index < letters.length) {
                const delay = letter.textContent === " " ? 240 : [150, 175, 160, 185][index % 4];
                typingTimer = setTimeout(typeLetter, delay);
            } else {
                typingTimer = setTimeout(finishTyping, 220);
            }
        };
        typingTimer = setTimeout(typeLetter, 500);
    };
    if ("IntersectionObserver" in window) {
        const typingObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) startTyping();
                    else finishTyping();
                });
            },
            { threshold: 0.8 }
        );
        typingObserver.observe(typingLine);
    }
    reducedMotion.addEventListener("change", () => {
        if (reducedMotion.matches) finishTyping();
    });
})();
