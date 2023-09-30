import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
    ".digitalhouse",
    `I use Linux Mint, which is Debian-based, for my everyday use with Python, Java, and Web-dev languages. I currently use XFCE as my desktop environment because it is a lightweight DE for my potato PC.`,
    "Linux Mint OS",
    "LInux as Daily Driver",
    "Feb 2023 - Oct 2023"
);

hoverChangeExperience(
    ".zuplae",
    `My second programming language I learned is Python, for its syntax simplicity, ease of reading, and vast community. I also use Python for web scrapping, web development in Django or Flask, and automating boring stuff.`,
    "Python Programming",
    "Automation, Web Scrapping, & Backend",
    "Dec 2022 - Oct 2023"
);

hoverChangeExperience(
    ".codigofontetv",
    `Html/CSS was my first ever non-programming language I learned in the technology world, where I can create front-end websites with these languages. I'm used to being a backend developer with Node.js, Django, and PHP, front-ends are templates only.`,
    "Web Development",
    "Html, Css, Js",
    "Sept 2022 - Oct 2023"
);

hoverChangeExperience(
    ".contweb",
    `My first programming language, and where I got my fundamentals in programming, especially the basics and OOP, I use Java for developing GUI applications with Java FX.`,
    "Java Programming",
    "JavaFx & OOP",
    "Oct 2022 - Oct 2023 "
);

hoverChangeDescription(
  ".html",
  "Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used as the default login shell for most Linux distributions. Bash was one of the first programs Linus Torvalds ported to Linux, alongside GCC."
);
hoverChangeDescription(
  ".css",
  "Burp or Burp Suite is a graphical tool for testing Web application security. The tool is written in Java and developed by PortSwigger Security."
);
hoverChangeDescription(
  ".js",
  "Wireshark is a free and open-source packet analyzer. It is used for network troubleshooting, analysis, software and communications protocol development, and education. Originally named Ethereal, the project was renamed Wireshark in May 2006 due to trademark issues."
);
hoverChangeDescription(
  ".sass",
  "Maltego is a software used for open-source intelligence and forensics, developed by Paterva from Pretoria, South Africa. Maltego focuses on providing a library of transforms for discovery of data from open sources, and visualizing that information in a graph format”"
);
hoverChangeDescription(
  ".react",
  "The Arduino Integrated Development Environment is a cross-platform application that is written in functions from C and C++. It is used to write and upload programs to Arduino compatible boards, but also, with the help of third-party cores, other vendor development boards."
);
hoverChangeDescription(
  ".next",
  "C++ is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or C with Classes. The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation."
);
hoverChangeDescription(
  ".styled",
  "Ghidra is a free and open source reverse engineering tool developed by the National Security Agency of the United States. The binaries were released at RSA Conference in March 2019; the sources were published one month later on GitHub. Ghidra is seen by many security researchers as a competitor to IDA Pro."
);
hoverChangeDescription(
  ".tailwind",
  "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming."
);
