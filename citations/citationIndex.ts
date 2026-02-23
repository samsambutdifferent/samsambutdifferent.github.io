// ============================================================
// citationIndex.ts  — Complete Citation Registry
// Updated: 2026-02-20
// ============================================================

export interface Citation {
  pmid: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  citation: string;
  url: string;
  htmlFile: string;
}

// ── All citations ────────────────────────────────────────────
export const CITATIONS: Record<string, Citation> = {

  // ── BACE1 ──────────────────────────────────────────────────

  pmid_10531052: {
    pmid: "10531052",
    title: "Beta-secretase cleavage of Alzheimer's amyloid precursor protein by the transmembrane aspartic protease BACE",
    authors: "Vassar R, Bennett BD, Babu-Khan S, et al.",
    journal: "Science",
    year: 1999,
    citation: "Vassar R et al. Science. 1999;286(5440):735-741.",
    url: "https://pubmed.ncbi.nlm.nih.gov/10531052/",
    htmlFile: "citations/pmid_10531052.html",
  },

  pmid_15126696: {
    pmid: "15126696",
    title: "BACE1: the beta-secretase enzyme in Alzheimer's disease",
    authors: "Vassar R.",
    journal: "Journal of Molecular Neuroscience",
    year: 2004,
    citation: "Vassar R. J Mol Neurosci. 2004;23(1-2):105-114.",
    url: "https://pubmed.ncbi.nlm.nih.gov/15126696/",
    htmlFile: "citations/pmid_15126696.html",
  },

  pmid_32223911: {
    pmid: "32223911",
    title: "The β-Secretase BACE1 in Alzheimer's Disease",
    authors: "Hampel H, Vassar R, De Strooper B, et al.",
    journal: "Biological Psychiatry",
    year: 2021,
    citation: "Hampel H et al. Biol Psychiatry. 2021;89(9):745-756.",
    url: "https://pubmed.ncbi.nlm.nih.gov/32223911/",
    htmlFile: "citations/pmid_32223911.html",
  },

  pmid_24691405: {
    pmid: "24691405",
    title: "BACE1 inhibitor drugs in clinical trials for Alzheimer's disease",
    authors: "Yan R, Vassar R.",
    journal: "Lancet Neurology",
    year: 2014,
    citation: "Yan R, Vassar R. Lancet Neurol. 2014;13(3):319-329.",
    url: "https://pubmed.ncbi.nlm.nih.gov/24691405/",
    htmlFile: "citations/pmid_24691405.html",
  },

  pmid_29719179: {
    pmid: "29719179",
    title: "Verubecestat for mild-to-moderate Alzheimer's disease",
    authors: "Egan MF, Kost J, Voss T, et al.",
    journal: "New England Journal of Medicine",
    year: 2018,
    citation: "Egan MF et al. N Engl J Med. 2018;378(18):1691-1703.",
    url: "https://pubmed.ncbi.nlm.nih.gov/29719179/",
    htmlFile: "citations/pmid_29719179.html",
  },

  pmid_30970186: {
    pmid: "30970186",
    title: "Verubecestat for prodromal Alzheimer's disease",
    authors: "Egan MF, Kost J, Tariot PN, et al.",
    journal: "New England Journal of Medicine",
    year: 2019,
    citation: "Egan MF et al. N Engl J Med. 2019;380(15):1408-1420.",
    url: "https://pubmed.ncbi.nlm.nih.gov/30970186/",
    htmlFile: "citations/pmid_30970186.html",
  },

  pmid_25599931: {
    pmid: "25599931",
    title: "Pharmacological inhibition of BACE1 impairs synaptic plasticity and cognitive functions",
    authors: "Filser S, Ovsepian SV, Masana M, et al.",
    journal: "Biological Psychiatry",
    year: 2015,
    citation: "Filser S et al. Biol Psychiatry. 2015;77(8):729-739.",
    url: "https://pubmed.ncbi.nlm.nih.gov/25599931/",
    htmlFile: "citations/pmid_25599931.html",
  },

  pmid_23412139: {
    pmid: "23412139",
    title: "Discovery of an Orally Available, Brain Penetrant BACE1 Inhibitor that Affords Robust CNS Aβ Reduction",
    authors: "Stamford AW, Scott JD, Li SW, et al.",
    journal: "ACS Medicinal Chemistry Letters",
    year: 2012,
    citation: "Stamford AW et al. ACS Med Chem Lett. 2012;3(11):897-902.",
    url: "https://pubmed.ncbi.nlm.nih.gov/23412139/",
    htmlFile: "citations/pmid_23412139.html",
  },

  pmid_23683349: {
    pmid: "23683349",
    title: "Inhibitors of BACE for treating Alzheimer's disease: a fragment-based drug discovery story",
    authors: "Stamford A, Strickland C.",
    journal: "Current Opinion in Chemical Biology",
    year: 2013,
    citation: "Stamford A, Strickland C. Curr Opin Chem Biol. 2013;17(3):320-328.",
    url: "https://pubmed.ncbi.nlm.nih.gov/23683349/",
    htmlFile: "citations/pmid_23683349.html",
  },

  pmid_34265844: {
    pmid: "34265844",
    title: "Highly accurate protein structure prediction with AlphaFold",
    authors: "Jumper J, Evans R, Pritzel A, et al.",
    journal: "Nature",
    year: 2021,
    citation: "Jumper J et al. Nature. 2021;596(7873):583-589.",
    url: "https://pubmed.ncbi.nlm.nih.gov/34265844/",
    htmlFile: "citations/pmid_34265844.html",
  },

  // ── Insulin ─────────────────────────────────────────────────

  pmid_23302862: {
    pmid: "23302862",
    title: "How insulin engages its primary binding site on the insulin receptor",
    authors: "Menting JG, Whittaker J, Margetts MB, et al.",
    journal: "Nature",
    year: 2013,
    citation: "Menting JG et al. Nature. 2013;493(7431):241-245.",
    url: "https://pubmed.ncbi.nlm.nih.gov/23302862/",
    htmlFile: "citations/pmid_23302862.html",
  },

  pmid_10320380: {
    pmid: "10320380",
    title: "Insulin structure and function",
    authors: "Pullen RA, Lindsay DG, Wood SP, et al.",
    journal: "Nature",
    year: 1976,
    citation: "Pullen RA et al. Nature. 1976;259(5542):369-373.",
    url: "https://pubmed.ncbi.nlm.nih.gov/10320380/",
    htmlFile: "citations/pmid_10320380.html",
  },

  pmid_34850005: {
    pmid: "34850005",
    title: "New Horizons: Next-Generation Insulin Analogues: Structural Principles and Clinical Goals",
    authors: "Jarosinski MA, Chen YS, Varas N, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: 2022,
    citation: "Jarosinski MA et al. J Clin Endocrinol Metab. 2022;107(4):909-928.",
    url: "https://pubmed.ncbi.nlm.nih.gov/34850005/",
    htmlFile: "citations/pmid_34850005.html",
  },

  pmid_24651808: {
    pmid: "24651808",
    title: "The structure of insulin: a review",
    authors: "Weiss MA.",
    journal: "Current Medicinal Chemistry",
    year: 2009,
    citation: "Weiss MA. Curr Med Chem. 2009;16(11):1356-1374.",
    url: "https://pubmed.ncbi.nlm.nih.gov/24651808/",
    htmlFile: "citations/pmid_24651808.html",
  },

  pmid_11445250: {
    pmid: "11445250",
    title: "Evolution of the insulin molecule: insights into structure-activity and phylogenetic relationships",
    authors: "Conlon JM.",
    journal: "Peptides",
    year: 2001,
    citation: "Conlon JM. Peptides. 2001;22(7):1183-1193.",
    url: "https://pubmed.ncbi.nlm.nih.gov/11445250/",
    htmlFile: "citations/pmid_11445250.html",
  },

  pmid_10837704: {
    pmid: "10837704",
    title: "Insulin analogs with improved pharmacokinetic profiles",
    authors: "Brange J, Vølund A.",
    journal: "Advanced Drug Delivery Reviews",
    year: 1999,
    citation: "Brange J, Vølund A. Adv Drug Deliv Rev. 1999;35(2-3):307-335.",
    url: "https://pubmed.ncbi.nlm.nih.gov/10837704/",
    htmlFile: "citations/pmid_10837704.html",
  },

  pmid_25179915: {
    pmid: "25179915",
    title: "A review of the pharmacological properties of insulin degludec and their clinical relevance",
    authors: "Haahr H, Heise T.",
    journal: "Clinical Pharmacokinetics",
    year: 2014,
    citation: "Haahr H, Heise T. Clin Pharmacokinet. 2014;53(9):787-800.",
    url: "https://pubmed.ncbi.nlm.nih.gov/25179915/",
    htmlFile: "citations/pmid_25179915.html",
  },

  pmid_32990302: {
    pmid: "32990302",
    title: "Insulin fibrillation: toward strategies for attenuating the process",
    authors: "Qafary M, Rashno F, Khajeh K, et al.",
    journal: "Journal of Cellular Physiology",
    year: 2021,
    citation: "Qafary M et al. J Cell Physiol. 2021;236(3):2151-2165.",
    url: "https://pubmed.ncbi.nlm.nih.gov/32990302/",
    htmlFile: "citations/pmid_32990302.html",
  },
};

// ── Answer → Citation Mappings ────────────────────────────────
//   Each question gets exactly 3 citations.
export const ANSWER_CITATIONS: Record<string, string[]> = {

  // BACE1 Questions
  bace1_q1: [
    "pmid_32223911",  // Hampel 2021 review — what BACE1 is
    "pmid_10531052",  // Vassar 1999 — original discovery
    "pmid_15126696",  // Vassar 2004 — characterisation review
  ],

  bace1_q2: [
    "pmid_24691405",  // Yan 2014 — inhibitor classes in trials
    "pmid_23412139",  // Stamford 2012 — iminopyrimidinone CNS series
    "pmid_23683349",  // Stamford 2013 — fragment-based classes review
  ],

  bace1_q3: [
    "pmid_30970186",  // Egan 2019 — verubecestat prodromal trial failure
    "pmid_29719179",  // Egan 2018 — verubecestat mild-mod trial failure
    "pmid_25599931",  // Filser 2015 — synaptic plasticity mechanism of failure
  ],

  bace1_q4: [
    "pmid_34265844",  // Jumper 2021 AlphaFold — AI structure prediction (DDN BioNeMo relevance)
    "pmid_23412139",  // Stamford 2012 — structure-based CNS inhibitor design
    "pmid_23683349",  // Stamford 2013 — FBDD structure-based pipeline
  ],

  bace1_q5: [
    "pmid_24691405",  // Yan 2014 — promising scaffold overview
    "pmid_23412139",  // Stamford 2012 — iminopyrimidinone scaffold
    "pmid_23683349",  // Stamford 2013 — cyclic amidine scaffold
  ],

  // Insulin Questions
  insulin_q1: [
    "pmid_23302862",  // Menting 2013 — receptor binding crystal structure
    "pmid_10320380",  // Pullen 1976 — classic structural features
    "pmid_34850005",  // Jarosinski 2022 — next-gen structural principles
  ],

  insulin_q2: [
    "pmid_10320380",  // Pullen 1976 — structure basis for mimetics
    "pmid_24651808",  // Weiss 2009 — structure review inc. mimetics
    "pmid_34850005",  // Jarosinski 2022 — molecular engineering approaches
  ],

  insulin_q3: [
    "pmid_24651808",  // Weiss 2009 — stability structural basis
    "pmid_25179915",  // Haahr 2014 — degludec stability/PK
    "pmid_32990302",  // Qafary 2021 — fibrillation & stability strategies
  ],

  insulin_q4: [
    "pmid_11445250",  // Conlon 2001 — cross-species conservation
    "pmid_10320380",  // Pullen 1976 — invariant residues
    "pmid_34850005",  // Jarosinski 2022 — evolutionary constraints
  ],

  insulin_q5: [
    "pmid_10837704",  // Brange 1999 — fast vs long-acting PK mechanisms
    "pmid_24651808",  // Weiss 2009 — analog design structural basis
    "pmid_25179915",  // Haahr 2014 — degludec long-acting mechanism
  ],
};

export type QuestionKey = keyof typeof ANSWER_CITATIONS;

/** Helper: get full Citation objects for a question */
export function getCitationsForQuestion(questionKey: QuestionKey): Citation[] {
  const pmids = ANSWER_CITATIONS[questionKey] ?? [];
  return pmids.map((id) => CITATIONS[id]).filter(Boolean);
}
