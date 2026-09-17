/* Missing information stays null and is omitted from the page. */
window.PORTFOLIO = {
    name: "dislis.com",
    email: null,
    github: "https://github.com/dislisdev",
    linkedin: "https://www.linkedin.com/in/periklis-dislis-4b7023287/",
    experience: [
        {
            company: "Avis",
            role: null,
            years: null,
            description: {
                el: "Πρώτο σημείο επαφής με τον πελάτη, με ευθύνη για την άμεση εξυπηρέτηση και επίλυση ζητημάτων σε πραγματικό χρόνο. Ανέπτυξα ικανότητες επικοινωνίας, διαχείρισης πίεσης και κατανόησης των αναγκών του χρήστη, θεμέλιο για τη μετέπειτα προσέγγισή μου στο product/UX σκεπτικό.",
                en: "The first point of contact for customers, responsible for immediate service and resolving issues in real time. I developed communication skills, the ability to work under pressure and an understanding of user needs — a foundation for my later approach to product and UX thinking."
            },
            url: "https://www.avis.gr/",
            image: "assets/avis.png",
            imageAlt: "Avis"
        },
        {
            company: "iStorm",
            role: "Apple Sales Professional",
            years: null,
            description: {
                el: "Υποστήριξη πελατών σε τεχνολογικές αποφάσεις, με έμφαση στην κατανόηση της ανάγκης πριν την πρόταση λύσης. Παράλληλη εκπαίδευση σε αρχές marketing, ενισχύοντας την οπτική μου πάνω στην επιχειρηματική πλευρά της τεχνολογίας.",
                en: "Supporting customers in technology decisions, with an emphasis on understanding their needs before recommending a solution. Alongside this, training in marketing principles strengthened my perspective on the business side of technology."
            },
            url: "https://www.istorm.gr/?utm_campaign=Search_Brand_iStorm+%23Ongoing&gad_source=1&gad_campaignid=16818711753&gbraid=0AAAAADi0xcjE9ppHFn7coWlR8n1Y_Aj6O&gclid=CjwKCAjw_KjVBhAHEiwAnC0N9OHNNima4I7kD7zSpI_bJs-lqR0TYufhWtTyRQmaSLu8zr16FNvyHxoCuyUQAvD_BwE",
            image: "assets/premium-reseller.png",
            imageAlt: "Apple Premium Reseller"
        }
    ],
    projects: [
        {
            title: { en: "Rhea", el: "Ρέα" },
            status: "completed",
            category: { en: "AI receptionist", el: "AI γραμματεία" },
            summary: {
                en: "A Greek-speaking AI receptionist for a physiotherapy clinic. It books, reschedules and cancels appointments through conversation.",
                el: "Μια ελληνόφωνη AI γραμματεία για φυσικοθεραπευτήριο. Κλείνει, μεταφέρει και ακυρώνει ραντεβού μέσα από φυσική συνομιλία."
            },
            description: {
                en: "Physiotherapy clinics lose appointments and clients when they cannot answer the phone — especially during peak hours. I built Rhea as an AI receptionist that answers in place of human staff, booking, rescheduling and cancelling appointments through natural conversation in Greek, without the client realizing they are speaking to a bot.",
                el: "Τα φυσικοθεραπευτήρια χάνουν ραντεβού και πελάτες όταν δεν προλαβαίνουν να απαντήσουν στο τηλέφωνο — ιδιαίτερα τις ώρες αιχμής. Έφτιαξα τη Ρέα ως μια AI γραμματεία που απαντά αντί για ανθρώπινο προσωπικό, κλείνει/μεταφέρει/ακυρώνει ραντεβού μέσα από φυσική συνομιλία στα ελληνικά, χωρίς ο πελάτης να καταλαβαίνει ότι μιλάει με bot."
            },
            technologies: ["PHP", "SQLite", "Vanilla JS", "Claude API (tool use)", "Railway"],
            modalUrl: "ai-receptionistgr.up.railway.app",
            linkNote: null,
            liveUrl: null,
            sourceUrl: null
        },
        {
            title: "halvasfarsalon.gr",
            status: "progress",
            modalSummary: {
                el: "Παραδοσιακός παραγωγός χαλβά στη Λάρισα, χωρίς καθόλου online παρουσία — δεν υπήρχε τρόπος για δυνητικούς B2B πελάτες (καταστήματα, χονδρεμπόριο) να τον βρουν ή να δουν τι προσφέρει. Ο πελάτης μου ζήτησε να του φτιάξω ένα site από την αρχή. Σχεδίασα και υλοποίησα μια B2B ιστοσελίδα που παρουσιάζει επαγγελματικά την επιχείρηση και τα προϊόντα της, δίνοντάς του για πρώτη φορά ψηφιακή παρουσία.\n\nΤο site βρίσκεται αυτή τη στιγμή σε υποκατασκευή.",
                en: "A traditional halva producer in Larissa with no online presence — potential B2B clients (retailers and wholesalers) had no way to find the business or see what it offers. The client asked me to build a website from scratch. I designed and developed a B2B website that professionally presents the business and its products, giving it a digital presence for the first time.\n\nThe website is currently under construction."
            },
            modalUrl: "https://halvasfarsalon.gr/",
            category: { en: "B2B website", el: "B2B ιστοσελίδα" },
            summary: {
                en: "A B2B website for a traditional halva producer in Larissa.",
                el: "Μια B2B ιστοσελίδα για παραδοσιακό παραγωγό χαλβά στη Λάρισα."
            },
            description: null,
            technologies: ["HTML", "CSS", "JavaScript"],
            linkNote: null,
            liveUrl: null,
            sourceUrl: null
        },
        {
            title: null,
            status: "completed",
            modalSummary: {
                el: "Ο Γραμμικός Προγραμματισμός διδάσκεται συχνά με στατικό υλικό (σημειώσεις, διαφάνειες) που δεν βοηθά τους φοιτητές να κατανοήσουν διαισθητικά πώς λειτουργούν οι μέθοδοι επίλυσης. Πήρα την πρωτοβουλία να φτιάξω μια διαδραστική εκπαιδευτική ιστοσελίδα στα ελληνικά, σε επικοινωνία με πανεπιστημιακό καθηγητή, ώστε οι φοιτητές να έχουν ένα πιο εύκολο και διαδραστικό εργαλείο μελέτης πάνω στο θέμα.",
                en: "Linear Programming is often taught using static material (notes and slides) that does not help students develop an intuitive understanding of how solution methods work. I took the initiative to build an interactive learning website in Greek, in communication with a university professor, to give students an easier and more interactive tool for studying the subject."
            },
            modalUrl: "https:google.com",
            category: {
                en: "Linear Programming learning site",
                el: "Εκπαιδευτική ιστοσελίδα Γραμμικού Προγραμματισμού"
            },
            summary: {
                en: "A Greek-language learning site for Linear Programming, built for a university professor.",
                el: "Μια ελληνόφωνη εκπαιδευτική ιστοσελίδα για τον Γραμμικό Προγραμματισμό, σχεδιασμένη για πανεπιστημιακό καθηγητή."
            },
            description: null,
            technologies: ["React", "Vite", "JavaScript", "HTML/CSS"],
            linkNote: null,
            liveUrl: null,
            sourceUrl: null
        }
    ]
};
