#!/usr/bin/env node
// Verifies the BUILT static-export output (ui/out/) serves the search/AI-crawler basics:
// robots.txt (text/plain), sitemap.xml (XML, absolute production-host URLs, real lastmod),
// a self-canonical on home, and valid JSON-LD with a real schema.org type.
// Run after `cd ui && npm run build:cloudflare` (the production variant): node
// scripts/check-seo-files.mjs ui/out
//
// Computes its own root via import.meta.url so it runs from any directory
// (matches this repo's script convention).

import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const outDirArg = process.argv[2] ?? "ui/out";
const OUT_DIR = path.isAbsolute(outDirArg) ? outDirArg : path.join(ROOT, "..", outDirArg);
const PRODUCTION_HOST = "https://electrighteous.com";

const failures = [];
const passes = [];

function fail(msg) {
  failures.push(msg);
}
function pass(msg) {
  passes.push(msg);
}

async function checkRobots() {
  const p = path.join(OUT_DIR, "robots.txt");
  if (!existsSync(p)) return fail("robots.txt: missing from build output");
  const body = await readFile(p, "utf8");
  if (!/^User-agent:/im.test(body)) return fail("robots.txt: no User-agent directive found");
  if (!/Allow:\s*\//i.test(body)) return fail("robots.txt: no Allow: / directive found");
  if (!/Sitemap:\s*https?:\/\//i.test(body)) return fail("robots.txt: no absolute Sitemap: line");
  pass("robots.txt: present with User-agent/Allow/Sitemap directives");
  return body;
}

async function checkSitemap() {
  const p = path.join(OUT_DIR, "sitemap.xml");
  if (!existsSync(p)) return fail("sitemap.xml: missing from build output");
  const body = await readFile(p, "utf8");
  if (!body.trim().startsWith("<?xml")) return fail("sitemap.xml: not valid XML (no XML prolog)");
  if (!body.includes("<urlset")) return fail("sitemap.xml: no <urlset> root element");
  const locs = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) return fail("sitemap.xml: no <loc> entries found");
  const nonAbsolute = locs.filter((u) => !/^https?:\/\//.test(u));
  if (nonAbsolute.length > 0) {
    return fail(`sitemap.xml: ${nonAbsolute.length} <loc> entries are not absolute URLs`);
  }
  const wrongHost = locs.filter((u) => !u.startsWith(PRODUCTION_HOST));
  if (wrongHost.length > 0) {
    return fail(
      `sitemap.xml: ${wrongHost.length} <loc> entries do not use the production host ${PRODUCTION_HOST} (e.g. ${wrongHost[0]})`
    );
  }
  const lastmods = [...body.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
  if (lastmods.length === 0) return fail("sitemap.xml: no <lastmod> entries found");
  if (lastmods.some((d) => !/^\d{4}-\d{2}-\d{2}/.test(d))) {
    return fail("sitemap.xml: a <lastmod> entry is not a real date");
  }
  pass(`sitemap.xml: ${locs.length} absolute production-host URLs, all with real lastmod dates`);
  return body;
}

async function checkCanonical() {
  const p = path.join(OUT_DIR, "index.html");
  if (!existsSync(p)) return fail("index.html: missing from build output (home page)");
  const body = await readFile(p, "utf8");
  const match = body.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i);
  if (!match) return fail("home page: no self-canonical <link rel=\"canonical\"> tag found");
  const href = match[1];
  if (href !== `${PRODUCTION_HOST}/`) {
    return fail(`home page: canonical href is "${href}", expected "${PRODUCTION_HOST}/"`);
  }
  pass(`home page: self-canonical present (${href})`);
  return body;
}

async function checkJsonLd(homeHtml) {
  if (!homeHtml) return fail("JSON-LD: cannot check, home page HTML unavailable");
  const scripts = [...homeHtml.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
  )];
  if (scripts.length === 0) return fail("home page: no application/ld+json <script> block found");
  let parsed;
  try {
    parsed = JSON.parse(scripts[0][1]);
  } catch (err) {
    return fail(`JSON-LD: block is not valid JSON (${err.message})`);
  }
  const nodes = Array.isArray(parsed["@graph"]) ? parsed["@graph"] : [parsed];
  const types = nodes.map((n) => n["@type"]).filter(Boolean);
  if (types.length === 0) return fail("JSON-LD: no @type found on any node");
  const EXPECTED = ["WebSite", "Organization"];
  const hasExpected = EXPECTED.some((t) => types.includes(t));
  if (!hasExpected) {
    return fail(`JSON-LD: expected a type from [${EXPECTED.join(", ")}], found [${types.join(", ")}]`);
  }
  pass(`JSON-LD: valid JSON, types [${types.join(", ")}]`);
}

async function main() {
  if (!existsSync(OUT_DIR)) {
    console.error(`No build output at ${OUT_DIR} — run the build first.`);
    process.exit(1);
  }
  await checkRobots();
  await checkSitemap();
  const homeHtml = await checkCanonical();
  await checkJsonLd(homeHtml);

  for (const p of passes) console.log(`PASS: ${p}`);
  for (const f of failures) console.log(`FAIL: ${f}`);

  if (failures.length > 0) {
    console.log(`\n${failures.length} check(s) failed.`);
    process.exit(1);
  }
  console.log("\nAll search/AI-crawler basics present and correct.");
}

main();
