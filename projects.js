// ============================================================
//  PROJECTS DATA — This is the ONLY file you need to edit!
// ============================================================
//
//  HOW TO ADD A NEW PROJECT:
//  1. Add your project images to "images/<project>/" (for example images/my-robot/)
//  2. Copy one of the project objects below
//  3. Paste it at the TOP of the array (so it shows first)
//  4. Fill in your details
//  5. Run:  python3 optimize-images.py
//     (builds the small WebP files the site actually loads)
//  6. Save and refresh your site — done!
//
//  HOW TO EDIT A PROJECT:
//  Just change the text below and save.
//
//  HOW TO REMOVE A PROJECT:
//  Delete everything between its { and }, including the comma after.
//
//  HOW TO REORDER PROJECTS:
//  Cut and paste a whole { ... }, block to move it up or down.
//
//  FIXING A CROPPED / OFF-CENTER PHOTO:
//  Every image below is normally just a plain filename, e.g.:
//
//      thumbnail: "images/my-project-thumb.jpg"
//
//  Images get cropped to fit their box (thumbnails, hero photos, etc.),
//  and by default that crop is centered — which is why heads or subjects
//  can get cut off. If a specific photo needs adjusting, swap the plain
//  filename for an object with a "focus" point instead:
//
//      thumbnail: { src: "images/my-project-thumb.jpg", focus: "50% 20%" }
//
//  The focus is the point (as % from left, % from top) that the crop will
//  always keep visible. "50% 20%" keeps things centered horizontally but
//  biased toward the top of the photo, so a head near the top doesn't get
//  cut off. You can also use plain words: "top", "bottom", "top left", etc.
//
//  This works on ANY image field: thumbnail, heroImages, section images,
//  and carousel images.
//
//  IMAGE CAROUSEL:
//  Use "carousel" instead of "images" when a section should show one large
//  photo with a filmstrip of the rest underneath. The first item is the one
//  shown large. Nothing moves on its own — a visitor clicks a thumbnail, or
//  uses the left and right arrow keys, to change the photo.
//
//      carousel: [
//        "images/my-project/hero.jpg",
//        { src: "images/my-project/detail.jpg", focus: "50% 30%" }
//      ]
//
//  Don't want to guess the numbers? Open crop-helper.html in your browser,
//  drop the photo in, drag the crosshair to where you want the focus, and
//  it will show you a live preview plus the exact code to paste in.
//
// ============================================================

// Turns an image entry into the attributes the templates need.
// Accepts a filename ("images/x.jpg") or { src, focus }.
// If optimize-images.py has built a variant, the page requests that
// sized WebP instead of the original camera file.
function imgAttrs(entry, role) {
  var src = typeof entry === "string" ? entry : entry.src;
  var style = entry && entry.focus ? "object-position:" + entry.focus + ";" : "";
  var variants = (typeof OPTIMIZED !== "undefined" && OPTIMIZED[src]) || null;
  var eager = role === "hero";
  var sizes = role === "hero"
    ? "(max-width: 768px) 50vw, 280px"
    : role === "card"
      ? "(max-width: 768px) 100vw, 360px"
      : "(max-width: 768px) 100vw, 600px";
  var dims = role === "hero" ? [4, 5] : [16, 10];
  var out = {
    src: src,
    srcset: "",
    sizes: sizes,
    style: style,
    loading: eager ? "eager" : "lazy",
    fetchpriority: "auto",
    width: String(dims[0] * 100),
    height: String(dims[1] * 100)
  };
  if (variants && variants.length) {
    out.srcset = variants.map(function (v) { return v.src + " " + v.w + "w"; }).join(", ");
    var pick = variants[variants.length - 1];
    for (var i = 0; i < variants.length; i++) {
      if (variants[i].w >= 640) { pick = variants[i]; break; }
    }
    out.src = pick.src;
  }
  return out;
}

function imgTag(entry, role, alt, extraClass, highPriority) {
  var a = imgAttrs(entry, role);
  if (highPriority) a.fetchpriority = "high";
  var cls = extraClass ? ' class="' + extraClass + '"' : "";
  var srcset = a.srcset ? ' srcset="' + a.srcset + '" sizes="' + a.sizes + '"' : "";
  var pri = a.fetchpriority === "high" ? ' fetchpriority="high"' : "";
  return '<img' + cls + ' src="' + a.src + '"' + srcset +
    ' width="' + a.width + '" height="' + a.height + '"' +
    ' style="' + a.style + '" alt="' + alt + '"' +
    ' loading="' + a.loading + '" decoding="async"' + pri + '>';
}

const PROJECTS = [
  // Delete this example and replace with your real projects.
  {
    id: "example-project",
    title: "Example Project",
    subtitle: "Replace this with your first project",
    thumbnail: "images/example-project/thumb.jpg",
    heroTitle: "Example Project",
    sections: [
      {
        heading: "The Problem",
        text: "Describe the problem you set out to solve. Who was it for, what constraints did you have, and why did it matter?"
      },
      {
        heading: "The Solution",
        images: [
          "images/example-project/photo-1.jpg",
          "images/example-project/photo-2.jpg"
        ]
      },
      {
        heading: "Outcome",
        text: "Summarize what you built, what you learned, and the result. Swap the placeholder images in images/example-project/ for your own photos, then update the paths above."
      }
    ]
  }
];

// ============================================================
//  SITE SETTINGS — Edit these to change global site info
// ============================================================

const SITE_CONFIG = {
  name: "Jason Sayah",
  siteTitle: "Jason Sayah - Mechanical Engineer",
  linkedIn: "https://www.linkedin.com/in/your-profile/",
  email: "you@example.com",
  phone: "555-555-5555",
  resumeFile: "images/resume/resume.pdf",   // Put your resume PDF here
  aboutText: "I'm building this portfolio from a shared engineering template. Replace this bio with a short introduction to who you are, what you study or work on, and the kinds of projects you care about.",
  heroImages: [
    "images/hero/hero-1.jpg",
    "images/hero/hero-2.jpg"
  ]
};
